// src/context/LessonsContext/LessonsContext.js

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

const mockContent = {
  '0': {
    id: '0',
    title: 'Introducción a Algelab',
    units: [
      {
        id: '0.1',
        title: '¿Qué es Algelab?',
        body: 'Algelab es una plataforma educativa diseñada para ayudarte a aprender álgebra lineal de manera interactiva y efectiva. Utiliza tecnología avanzada para proporcionar una experiencia de aprendizaje única y personalizada.',
        image: '/path/to/algelab-image.jpg',
        bullets: [
          'Aprendizaje interactivo',
          'Ejercicios prácticos',
          'Visualizaciones 3D'
        ],
        quiz: {
          title: 'Quiz: ¿Qué es Algelab?',
          questions: [
            {
              id: 'q1',
              type: 'single',
              text: '¿Cuál es el principal objetivo de Algelab?',
              options: [
                'Enseñar programación',
                'Enseñar álgebra lineal',
                'Enseñar cálculo',
                'Enseñar estadística'
              ],
              correctAnswer: 'Enseñar álgebra lineal'
            },
            {
              id: 'q2',
              type: 'multiple',
              text: '¿Qué características ofrece Algelab? (Selecciona todas las que apliquen)',
              options: [
                'Aprendizaje interactivo',
                'Ejercicios prácticos',
                'Visualizaciones 3D',
                'Clases presenciales'
              ],
              correctAnswers: ['Aprendizaje interactivo', 'Ejercicios prácticos', 'Visualizaciones 3D']
            }
          ]
        }
      },
      {
        id: '0.2',
        title: 'Funcionalidades principales de Algelab',
        body: 'Algelab ofrece una variedad de características para mejorar tu experiencia de aprendizaje. Estas incluyen lecciones interactivas, ejercicios prácticos, y visualizaciones 3D de conceptos algebraicos.',
        video: '/path/to/algelab-features.mp4',
        quiz: {
          title: 'Quiz: Funcionalidades de Algelab',
          questions: [
            {
              id: 'q1',
              type: 'multiple',
              text: '¿Cuáles son las funcionalidades principales de Algelab?',
              options: [
                'Lecciones interactivas',
                'Ejercicios prácticos',
                'Visualizaciones 3D',
                'Exámenes presenciales'
              ],
              correctAnswers: ['Lecciones interactivas', 'Ejercicios prácticos', 'Visualizaciones 3D']
            }
          ]
        }
      }
    ]
  },
  '1': {
    id: '1',
    title: 'Espacios vectoriales',
    units: [
      {
        id: '1.1',
        title: 'Definición y ejemplos',
        body: 'Un espacio vectorial es una estructura algebraica formada por un conjunto no vacío de objetos llamados vectores, en el que están definidas dos operaciones: la suma de vectores y el producto de un escalar por un vector...',
        image: '/path/to/vector-space-image.jpg',
        quiz: {
          title: 'Quiz: Espacios vectoriales',
          questions: [
            {
              id: 'q1',
              type: 'single',
              text: '¿Qué es un espacio vectorial?',
              options: [
                'Un conjunto de números',
                'Una estructura algebraica con vectores y operaciones definidas',
                'Un tipo de gráfico',
                'Una fórmula matemática'
              ],
              correctAnswer: 'Una estructura algebraica con vectores y operaciones definidas'
            }
          ]
        }
      }
    ]
  }
};

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState(initialLessons);
  const [navigationHistory, setNavigationHistory] = useState({});
  const [content, setContent] = useState(mockContent);

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
    setNavigationHistory,
    content
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