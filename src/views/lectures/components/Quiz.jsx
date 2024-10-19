// src/views/lectures/components/Quiz.jsx
import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Checkbox } from '@mui/material';

const Quiz = ({ quiz, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

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

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach(question => {
      if (question.type === 'multiple') {
        const userAnswers = answers[question.id] || {};
        const isCorrect = question.correctAnswers.every(ca => userAnswers[ca]) &&
                          Object.keys(userAnswers).every(ua => question.correctAnswers.includes(ua));
        if (isCorrect) score++;
      } else {
        if (answers[question.id] === question.correctAnswer) score++;
      }
    });
    const percentage = (score / quiz.questions.length) * 100;
    setResult({ score, total: quiz.questions.length, percentage });
    onComplete(percentage === 100);
  };

  return (
    <Box>
      <Typography variant="h2" gutterBottom>{quiz.title}</Typography>
      {quiz.questions.map(question => (
        <Box key={question.id} mb={3}>
          <Typography variant="h6">{question.text}</Typography>
          {question.type === 'multiple' ? (
            question.options.map(option => (
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
            ))
          ) : (
            <RadioGroup
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value, false)}
            >
              {question.options.map(option => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          )}
        </Box>
      ))}
      <Button variant="contained" onClick={handleSubmit}>Enviar respuestas</Button>
      {result && (
        <Box mt={2}>
          <Typography>Resultado: {result.score} de {result.total} correctas ({result.percentage}%)</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;