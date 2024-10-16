// src/views/lectures/components/LectureContent.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Quiz from './Quiz';
import { styled } from '@mui/system';

const StyledContent = styled(Box)(({ theme }) => ({
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '& video': {
    maxWidth: '100%',
    height: 'auto',
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  '& p': {
    marginBottom: theme.spacing(2),
  },
  '& ul, & ol': {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

const LectureContent = ({ content, onQuizComplete }) => {
  return (
    <StyledContent>
      <ReactMarkdown>{content.body}</ReactMarkdown>
      {content.image && (
        <Box component="img" src={content.image} alt={content.title} />
      )}
      {content.video && (
        <Box component="video" controls>
          <source src={content.video} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      )}
      {content.quiz && (
        <Quiz quiz={content.quiz} onComplete={onQuizComplete} />
      )}
    </StyledContent>
  );
};

export default LectureContent;