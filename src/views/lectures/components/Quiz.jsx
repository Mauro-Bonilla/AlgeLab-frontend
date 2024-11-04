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
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MatchingQuestion = ({ question, onMatch }) => {
  // ... (Same as before)
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
                label={
                  <ReactMarkdown
                    children={option}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                  />
                }
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
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={
                  <ReactMarkdown
                    children={option}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                  />
                }
              />
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
        <ReactMarkdown
          children={quiz.title}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </Typography>

      {quiz.questions.map(question => (
        <Box key={question.id} mb={4}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Typography variant="h6">
              <ReactMarkdown
                children={question.text}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              />
            </Typography>
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
