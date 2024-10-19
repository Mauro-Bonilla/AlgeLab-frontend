// src/context/LessonsContext/LessonsContext.js
import React, { createContext, useState, useEffect } from 'react';

export const LessonsContext = createContext();

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);
  const [navigationHistory, setNavigationHistory] = useState({});
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch('/api/lessons');
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    const storedHistory = localStorage.getItem('navigationHistory');
    if (storedHistory) {
      setNavigationHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('navigationHistory', JSON.stringify(navigationHistory));
  }, [navigationHistory]);

  const fetchContent = async (lessonId, unitId) => {
    if (!content[lessonId] || !content[lessonId][unitId]) {
      try {
        const response = await fetch(`/docs/lecture-${lessonId}/lecture${lessonId}.${unitId}.md`);
        const text = await response.text();
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

  const value = {
    lessons,
    setLessons,
    navigationHistory,
    setNavigationHistory,
    content,
    fetchContent
  };

  return (
    <LessonsContext.Provider value={value}>
      {children}
    </LessonsContext.Provider>
  );
};

// src/views/lessons/Lessons.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import CollapsibleTable from "../../components/tables/CollapsiobleTable";
import { columns, expandedColumns } from "./constants/LessonsConstants";
import { LessonsContext } from '../../context/LessonsContext/LessonsContext';

const Lessons = () => {
  const { lessons } = useContext(LessonsContext);
  const navigate = useNavigate();

  const handleNavigate = (subtema) => {
    navigate(`/anh-algelab/lecciones/${subtema.lessonId}/${subtema.id}`);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Lecciones
          </Typography>
          <Divider />
          <CollapsibleTable
            data={lessons}
            columns={columns}
            expandedColumns={expandedColumns}
            onNavigate={handleNavigate}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Lessons;

// src/hooks/useLessons.js
import { useContext, useCallback } from 'react';
import { LessonsContext } from '../context/LessonsContext/LessonsContext';
import { useNavigate } from 'react-router-dom';

export const useLessons = () => {
  const { lessons, setLessons, navigationHistory, setNavigationHistory, fetchContent } = useContext(LessonsContext);
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

    fetchContent(subtema.lessonId, subtema.id);
    navigate(`/anh-algelab/lecciones/${subtema.lessonId}/${subtema.id}`);
  }, [setLessons, navigationHistory, setNavigationHistory, navigate, fetchContent]);

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