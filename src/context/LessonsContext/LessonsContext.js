import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const LessonsContext = createContext();

const initialLessons = [
  {
    id: '0',
    no: '0',
    tema: 'Introducción a Algelab',
    estado: 'No iniciado',
    puntos: 0,
    subtemas: [
      { id: '0.1', no: '0.1', subtema: '¿Qué es Algelab?', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.2', no: '0.2', subtema: 'Funcionalidades principales de Algelab', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.3', no: '0.3', subtema: 'Aprendizaje multimedia y aprendizaje activo', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.4', no: '0.4', subtema: 'Ejemplo de Laboratorio', estado: 'No iniciado', puntos: 0, lessonId: '0' },
    ]
  },
  {
    id: '1',
    no: '1',
    tema: 'Vectores y espacios vectoriales',
    estado: 'No iniciado',
    puntos: 0,
    subtemas: [
      { id: '1.1', no: '1.1', subtema: 'Vectores: Introducción', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.2', no: '1.2', subtema: 'Espacios y subespacios vectoriales', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.3', no: '1.3', subtema: 'Combinación lineales y sistemas generadores', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.4', no: '1.4', subtema: 'Independencia lineal', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.5', no: '1.5', subtema: 'Bases y dimensión', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.6', no: '1.6', subtema: 'Laboratorio', estado: 'No iniciado', puntos: 0, lessonId: '1' },
    ]
  },
];

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState(initialLessons);
  const [navigationHistory, setNavigationHistory] = useState({});
  const [content, setContent] = useState({});

  useEffect(() => {
    const storedLessons = localStorage.getItem('lessons');
    const storedHistory = localStorage.getItem('navigationHistory');
    if (storedLessons) setLessons(JSON.parse(storedLessons));
    if (storedHistory) setNavigationHistory(JSON.parse(storedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem('lessons', JSON.stringify(lessons));
    localStorage.setItem('navigationHistory', JSON.stringify(navigationHistory));
  }, [lessons, navigationHistory]);

  const fetchContent = async (lessonId, unitId) => {
    console.log('Fetching content for:', { lessonId, unitId });
    if (!content[lessonId] || !content[lessonId][unitId]) {
      try {
        // Updated fetch URL to match the file path
        const response = await fetch(`/docs/lecture-${lessonId}/lecture${unitId}.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log('Fetched content:', text);
        setContent(prevContent => ({
          ...prevContent,
          [lessonId]: {
            ...prevContent[lessonId],
            [unitId]: text
          }
        }));
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    }
  };

  const updateLessonProgress = (lessonId, unitId, points = 100) => {
    setLessons(prevLessons => {
      return prevLessons.map(lesson => {
        if (lesson.id === lessonId) {
          const updatedSubtemas = lesson.subtemas.map(subtema => {
            if (subtema.id === unitId) {
              return { ...subtema, estado: 'Terminado', puntos: subtema.puntos + points };
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
  };

  const value = useMemo(() => ({
    lessons,
    setLessons,
    navigationHistory,
    setNavigationHistory,
    content,
    fetchContent,
    updateLessonProgress
  }), [lessons, navigationHistory, content]);

  return (
    <LessonsContext.Provider value={value}>
      {children}
    </LessonsContext.Provider>
  );
};

LessonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LessonsProvider;
