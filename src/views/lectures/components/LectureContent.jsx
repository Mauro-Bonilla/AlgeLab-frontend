// src/views/lectures/components/LectureContent.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/system';
import Quiz from './Quiz';
import { parseMarkdownContent } from '../../../utils/markdownParser';

// Import the necessary plugins and CSS for rendering LaTeX
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

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
  // Additional styles for math equations
  '& .katex-display': {
    margin: theme.spacing(2, 0),
  },
}));

const LectureContent = ({ content, onQuizComplete }) => {
  const [parsedContent, setParsedContent] = useState({ title: '', markdown: '', quiz: null });

  useEffect(() => {
    const parsed = parseMarkdownContent(content);
    console.log('Parsed content:', parsed);
    setParsedContent(parsed);
  }, [content]);

  return (
    <StyledContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h1" gutterBottom>
          {parsedContent.title || 'Lecture Title'}
        </Typography>
        <Chip label="100 XP" color="success" />
      </Box>
      <ReactMarkdown
        children={parsedContent.markdown}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      {parsedContent.quiz && (
        <Quiz quiz={parsedContent.quiz} onComplete={onQuizComplete} />
      )}
    </StyledContent>
  );
};

export default LectureContent;
