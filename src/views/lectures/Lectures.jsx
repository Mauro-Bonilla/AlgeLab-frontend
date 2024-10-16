// src/views/lectures/Lectures.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Chip, Tooltip, IconButton } from '@mui/material';
import UnitDropdown from '../../components/unit-dropdown/UnitDropdown';
import { LessonsContext } from '../../context/LessonsContext/LessonsContext';
import LectureContent from './components/LectureContent';
import { styled } from '@mui/system';
import { ArrowLeft } from 'react-feather';

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
  const { idLecture } = useParams();
  const navigate = useNavigate();
  const { lessons, setLessons, content } = useContext(LessonsContext);
  const [currentUnit, setCurrentUnit] = useState(0);
  const [lectureContent, setLectureContent] = useState(null);

  useEffect(() => {
    if (content && content[idLecture]) {
      setLectureContent(content[idLecture]);
    }
  }, [idLecture, content]);

  const handleUnitChange = (unitIndex) => {
    setCurrentUnit(unitIndex);
  };

  const handleNextUnit = () => {
    if (currentUnit < lectureContent.units.length - 1) {
      setCurrentUnit(currentUnit + 1);
    } else {
      console.log('Lecture completed');
    }
  };

  const handleQuizComplete = (isCorrect) => {
    if (isCorrect) {
      setLessons(prevLessons => {
        return prevLessons.map(lesson => {
          if (lesson.id === idLecture) {
            const updatedSubtemas = lesson.subtemas.map(subtema => {
              if (subtema.id === lectureContent.units[currentUnit].id) {
                return { ...subtema, estado: 'Terminado', puntos: subtema.puntos + 100 };
              }
              return subtema;
            });
            const allCompleted = updatedSubtemas.every(sub => sub.estado === 'Terminado');
            const totalPoints = updatedSubtemas.reduce((sum, sub) => sum + sub.puntos, 0);
            return { 
              ...lesson, 
              subtemas: updatedSubtemas,
              estado: allCompleted ? 'Terminado' : 'En proceso',
              puntos: totalPoints
            };
          }
          return lesson;
        });
      });
    }
  };

  if (!lectureContent) return <Typography>Cargando...</Typography>;

  return (
    <Box sx={{ m: 2 }}>
      <TopBar>
        <Tooltip title="Volver a lecciones">
          <CircularIconButton onClick={() => navigate('/anh-algelab/lecciones')}>
            <ArrowLeft size={24} />
          </CircularIconButton>
        </Tooltip>
        <UnitDropdown
          units={lectureContent.units}
          currentUnit={currentUnit}
          onUnitChange={handleUnitChange}
        />
        <Button 
          variant="contained" 
          onClick={handleNextUnit}
        >
          Siguiente
        </Button>
      </TopBar>
      <StyledCard>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h1" gutterBottom>
              {lectureContent.units[currentUnit].title}
            </Typography>
            <Chip label="100 XP" color="success" />
          </Box>
          <LectureContent 
            content={lectureContent.units[currentUnit]}
            onQuizComplete={handleQuizComplete}
          />
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default Lectures;