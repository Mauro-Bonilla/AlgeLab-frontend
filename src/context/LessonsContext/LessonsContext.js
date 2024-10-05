import { createContext, useState, useEffect, useMemo } from 'react';
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
      { id: '0.3', no: '0.3', subtema: 'Introducción a los vectores', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.4', no: '0.4', subtema: 'Definición básica', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.5', no: '0.5', subtema: 'Operaciones fundamentales', estado: 'No iniciado', puntos: 0, lessonId: '0' },
      { id: '0.6', no: '0.6', subtema: 'Laboratorio de vectores', estado: 'No iniciado', puntos: 0, lessonId: '0' },
    ]
  },
  {
    id: '1',
    no: '1',
    tema: 'Espacios vectoriales',
    estado: 'No iniciado',
    puntos: 0,
    subtemas: [
      { id: '1.1', no: '1.1', subtema: 'Definición y ejemplos', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.2', no: '1.2', subtema: 'Subespacios vectoriales', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.3', no: '1.3', subtema: 'Combinación lineal. Generadores', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.4', no: '1.4', subtema: 'Independencia lineal', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.5', no: '1.5', subtema: 'Bases y dimensión', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.6', no: '1.6', subtema: 'Los cuatro espacios fundamentales de una matriz', estado: 'No iniciado', puntos: 0, lessonId: '1' },
      { id: '1.7', no: '1.7', subtema: 'Aplicación a sistemas de ecuaciones', estado: 'No iniciado', puntos: 0, lessonId: '1' },
    ]
  },
];

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState(initialLessons);
  const [navigationHistory, setNavigationHistory] = useState({});

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

  const value = useMemo(() => ({ 
    lessons, 
    setLessons, 
    navigationHistory, 
    setNavigationHistory 
  }), [lessons, navigationHistory]);

  return (
    <LessonsContext.Provider value={value}>
      {children}
    </LessonsContext.Provider>
  );
};

LessonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};