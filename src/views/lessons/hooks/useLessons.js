import { useContext, useCallback } from 'react';
import { LessonsContext } from '../../../context/LessonsContext/LessonsContext';
import { useNavigate } from 'react-router-dom';

export const useLessons = () => {
  const { lessons, setLessons, navigationHistory, setNavigationHistory } = useContext(LessonsContext);
  const navigate = useNavigate();

  const handleNavigate = useCallback((subtema) => {
    setLessons(prevLessons => {
      const updatedLessons = prevLessons.map(lesson => {
        if (lesson.id === subtema.lessonId) {
          const updatedSubtemas = lesson.subtemas.map(sub => {
            if (sub.id === subtema.id) {
              let newPoints = sub.puntos;
              let newStatus = sub.estado;

              if (!navigationHistory[sub.id]) {
                newPoints += 5;
                newStatus = 'En proceso';
                setNavigationHistory(prev => ({ ...prev, [sub.id]: true }));
              }

              return { ...sub, estado: newStatus, puntos: newPoints };
            }
            return sub;
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
      return updatedLessons;
    });

    navigate(`/anh-algelab/lecciones/${subtema.id}`);
  }, [setLessons, navigationHistory, setNavigationHistory, navigate]);

  const completeSubtema = useCallback((subtemaId, lessonId) => {
    setLessons(prevLessons => {
      const updatedLessons = prevLessons.map(lesson => {
        if (lesson.id === lessonId) {
          const updatedSubtemas = lesson.subtemas.map(sub => {
            if (sub.id === subtemaId) {
              return { ...sub, estado: 'Terminado' };
            }
            return sub;
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

      return updatedLessons;
    });
  }, [setLessons]);

  return { lessons, handleNavigate, completeSubtema };
};