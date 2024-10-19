// src/views/lectures/Lectures.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Button, Tooltip, IconButton, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowLeft } from 'react-feather';
import UnitDropdown from '../../components/unit-dropdown/UnitDropdown';
import { LessonsContext } from '../../context/LessonsContext/LessonsContext';
import LectureContent from './components/LectureContent';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95%',
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '800px',
  margin: '0 auto 16px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95%',
  },
}));

const CircularIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(5px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Lectures = () => {
  const { lessonId, unitId } = useParams();
  const navigate = useNavigate();
  const { lessons, updateLessonProgress, content, fetchContent } = useContext(LessonsContext);
  const [currentUnit, setCurrentUnit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Lectures component mounted');
    console.log('Params:', { lessonId, unitId });

    const loadContent = async () => {
      setIsLoading(true);
      if (lessonId && unitId) {
        await fetchContent(lessonId, unitId);
        const lesson = lessons.find(l => l.id === lessonId);
        if (lesson) {
          const unitIndex = lesson.subtemas.findIndex(s => s.id === unitId);
          if (unitIndex !== -1) {
            setCurrentUnit(unitIndex);
          }
        }
      }
      setIsLoading(false);
    };

    loadContent();
  }, [lessonId, unitId, lessons, fetchContent]);

  const handleUnitChange = (unitIndex) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson && lesson.subtemas[unitIndex]) {
      navigate(`/anh-algelab/lecciones/${lessonId}/${lesson.subtemas[unitIndex].id}`);
    }
  };

  const handleNextUnit = () => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson && currentUnit < lesson.subtemas.length - 1) {
      const nextUnit = lesson.subtemas[currentUnit + 1];
      navigate(`/anh-algelab/lecciones/${lessonId}/${nextUnit.id}`);
    } else {
      console.log('Lecture completed');
      navigate('/anh-algelab/lecciones');
    }
  };

  const handleQuizComplete = (isCorrect) => {
    if (isCorrect) {
      updateLessonProgress(lessonId, unitId);
    }
  };

  const currentLesson = lessons.find(l => l.id === lessonId);
  const lectureContent = content[lessonId] && content[lessonId][unitId];

  console.log('Current lesson:', currentLesson);
  console.log('Lecture content:', lectureContent);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!currentLesson || !lectureContent) {
    return <Typography>No se pudo cargar el contenido de la lección.</Typography>;
  }

  return (
    <Box sx={{ m: 2 }}>
      <TopBar>
        <Tooltip title="Volver a lecciones">
          <CircularIconButton onClick={() => navigate('/anh-algelab/lecciones')}>
            <ArrowLeft size={24} />
          </CircularIconButton>
        </Tooltip>
        <UnitDropdown
          units={currentLesson.subtemas}
          currentUnit={currentUnit}
          onUnitChange={handleUnitChange}
        />
        <Button
          variant="contained"
          onClick={handleNextUnit}
        >
          {currentUnit < currentLesson.subtemas.length - 1 ? 'Siguiente' : 'Finalizar'}
        </Button>
      </TopBar>
      <StyledCard>
        <CardContent>
          <LectureContent
            content={lectureContent}
            onQuizComplete={handleQuizComplete}
          />
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default Lectures;
