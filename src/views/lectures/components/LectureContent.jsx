// src/components/LectureContent.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip, Divider } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/system';
import Quiz from './Quiz';
import GitHubLabButton from './GitHubLabButton';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const StyledContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& img': {
    maxWidth: '100%',
    height: 'auto'
  },
  '& video': {
    maxWidth: '100%',
    height: 'auto'
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  '& p': {
    marginBottom: theme.spacing(2)
  },
  '& ul, & ol': {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  '& hr': {
    margin: theme.spacing(2, 0)
  },
  '& .katex-display': {
    margin: theme.spacing(2, 0)
  }
}));

const ContentWrapper = styled(Box)({
  flex: 1,
});

const BottomSection = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  paddingTop: theme.spacing(2),
}));

// Markdown parser function
const parseMarkdownContent = (content) => {
  console.log('Raw content:', content);
  const titleRegex = /^#\s(.+)$/m;
  const quizRegex = /---quiz---([\s\S]*?)---end quiz---/;
  const labRegex = /---lab---([\s\S]*?)---end lab---/;

  const titleMatch = content.match(titleRegex);
  const title = titleMatch ? titleMatch[1] : '';

  const quizMatch = content.match(quizRegex);
  const labMatch = content.match(labRegex);

  let markdown = content;
  let quiz = null;
  let labUrl = null;

  if (labMatch) {
    labUrl = labMatch[1].trim();
    markdown = markdown.replace(labRegex, '').trim();
  }

  if (quizMatch) {
    const quizContent = quizMatch[1];
    markdown = markdown.replace(quizRegex, '').trim();
    try {
      quiz = JSON.parse(quizContent);
    } catch (error) {
      console.error('Error parsing quiz data:', error);
    }
  }

  markdown = markdown.replace(titleRegex, '').trim();

  console.log('Parsed content:', { title, markdown, quiz, labUrl });
  return { title, markdown, quiz, labUrl };
};

const LectureContent = ({ content, onQuizComplete }) => {
  const [parsedContent, setParsedContent] = useState({ 
    title: '', 
    markdown: '', 
    quiz: null,
    labUrl: null 
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const parsed = parseMarkdownContent(content);
    setParsedContent(parsed);
    if (parsed.quiz) {
      const points = parsed.quiz.questions.reduce((sum, question) => sum + (question.points || 1), 0);
      setTotalPoints(points);
    }
  }, [content]);

  const handleQuizComplete = (isCorrect) => {
    setQuizCompleted(isCorrect);
    if (onQuizComplete) {
      onQuizComplete(isCorrect);
    }
  };

  return (
    <StyledContent>
      <ContentWrapper>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h1" gutterBottom>
            {parsedContent.title || 'Lecture Title'}
          </Typography>
          {totalPoints > 0 && (
            <Chip
              label={`${totalPoints} PTS`}
              color={quizCompleted ? 'success' : 'default'}
              sx={{
                bgcolor: quizCompleted ? undefined : 'grey.200'
              }}
            />
          )}
        </Box>
        <ReactMarkdown
          children={parsedContent.markdown}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            hr: ({ ...props }) => <Divider {...props} />
          }}
          breaks={true}
        />
        {parsedContent.quiz && (
          <Quiz quiz={parsedContent.quiz} onComplete={handleQuizComplete} />
        )}
      </ContentWrapper>
      
      {parsedContent.labUrl && (
        <BottomSection>
          <Divider />
          <GitHubLabButton labUrl={parsedContent.labUrl} />
        </BottomSection>
      )}
    </StyledContent>
  );
};

export default LectureContent;