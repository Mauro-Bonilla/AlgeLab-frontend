import { useContext, useCallback } from 'react';
import { LessonsContext } from '../../../context/LessonsContext/LessonsContext';

export const useLessons = () => {
  const { lessons, setLessons, navigationHistory, setNavigationHistory } = useContext(LessonsContext);

  const handleNavigate = useCallback((subtema) => {
    setLessons(prevLessons => {
      const updatedLessons = prevLessons.map(lesson => {
        if (lesson.id === subtema.lessonId) {
          const updatedSubtemas = lesson.subtemas.map(sub => {
            if (sub.id === subtema.id) {
              let newPoints = sub.puntos;
              let newStatus = sub.estado;

              // Check if this is the first navigation
              if (!navigationHistory[sub.id]) {
                newPoints += 10;
                newStatus = 'En proceso';
                // Update navigation history
                setNavigationHistory(prev => ({ ...prev, [sub.id]: true }));
              }

              return { ...sub, estado: newStatus, puntos: newPoints };
            }
            return sub;
          });

          // Check if all subtemas are completed
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

    // Here you would typically navigate to the lesson content
    console.log(`Navigating to lesson: ${subtema.lessonId}, subtema: ${subtema.id}`);
  }, [setLessons, navigationHistory, setNavigationHistory]);

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

          // Check if all subtemas are completed
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