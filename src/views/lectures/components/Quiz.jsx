import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Button, 
  Checkbox, 
  FormGroup,
  Paper,
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useAlertContext } from '../../../context/AlertContext/AlertContext';

const MatchingQuestion = ({ question, onMatch }) => {
  const [items, setItems] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  
  useEffect(() => {
    setItems(question.pairs.map(pair => pair.right).sort(() => Math.random() - 0.5));
  }, [question]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);

    const correct = newItems.every((item, index) => item === question.pairs[index].right);
    setIsCorrect(correct);
    onMatch(question.id, correct);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
        Relaciona las columnas
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Left Column - Fixed */}
        <Box sx={{ width: '200px' }}>
          {question.pairs.map((pair) => (
            <Paper
              key={pair.left}
              elevation={3}
              sx={{
                p: 2,
                mb: 2,
                textAlign: 'center',
                bgcolor: 'background.paper',
                minHeight: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography>{pair.left}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Right Column - Draggable */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable-list">
            {(provided, snapshot) => (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ 
                  width: '200px',
                  minHeight: '100%'
                }}
              >
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        elevation={snapshot.isDragging ? 6 : 3}
                        sx={{
                          mb: 2,
                          p: 2,
                          textAlign: 'center',
                          bgcolor: snapshot.isDragging 
                            ? 'lightgrey' 
                            : 'background.paper',
                          cursor: 'grab',
                          minHeight: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.05)',
                          },
                          userSelect: 'none',
                        }}
                      >
                        <Typography>{item}</Typography>
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </Box>
  );
};

const Quiz = ({ quiz, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const { showAlert } = useAlertContext();
  const [points, setPoints] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState({});

  const handleAnswerChange = (questionId, answer, isMultiple) => {
    if (isMultiple) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: { ...(prev[questionId] || {}), [answer]: !prev[questionId]?.[answer] }
      }));
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const handleMatch = (questionId, isCorrect) => {
    setCompletedQuestions(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach(question => {
      let isCorrect = false;
      const questionPoints = question.points || 1;

      switch (question.type) {
        case 'multiple':
          const userAnswers = answers[question.id] || {};
          isCorrect = question.correctAnswers.every(ca => userAnswers[ca]) &&
                      Object.keys(userAnswers).every(ua => question.correctAnswers.includes(ua));
          break;

        case 'single':
          isCorrect = answers[question.id] === question.correctAnswer;
          break;

        case 'matching':
          isCorrect = completedQuestions[question.id];
          break;

        default:
          break;
      }

      if (isCorrect) {
        score += questionPoints;
        showAlert(`¡Correcto! Has ganado ${questionPoints} puntos`, 'success', 2000);
      } else {
        showAlert(`Respuesta incorrecta.`, 'error', 2000);
      }
    });

    setPoints(score);
    onComplete(score > 0);
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'multiple':
        return (
          <FormGroup>
            {question.options.map(option => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={answers[question.id]?.[option] || false}
                    onChange={() => handleAnswerChange(question.id, option, true)}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        );

      case 'single':
        return (
          <RadioGroup
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value, false)}
          >
            {question.options.map(option => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        );

      case 'matching':
        return (
          <MatchingQuestion
            question={question}
            onMatch={handleMatch}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          fontSize: '1.7rem',
          mb: 4 
        }}
      >
        {quiz.title}
      </Typography>
      
      {quiz.questions.map(question => (
        <Box key={question.id} mb={4}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Typography variant="h6">{question.text}</Typography>
            <Typography variant="subtitle1" color="primary">
              ({question.points || 1} puntos)
            </Typography>
          </Box>
          {renderQuestion(question)}
        </Box>
      ))}
      <Button 
        variant="contained" 
        onClick={handleSubmit}
        size="large"
        sx={{ mt: 2 }}
      >
        Enviar respuestas
      </Button>
      {points > 0 && (
        <Box mt={2}>
          <Typography variant="h6" color="primary">
            Total de puntos: {points}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
