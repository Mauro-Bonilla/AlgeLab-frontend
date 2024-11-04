// src/views/lessons/Lessons.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import CollapsibleTable from "../../components/tables/CollapsiobleTable";
import { columns, expandedColumns } from "./constants/LessonsConstants";
import { LessonsContext } from '../../context/LessonsContext/LessonsContext';

const Lessons = () => {
  const { lessons, setLessons, navigationHistory, setNavigationHistory } = useContext(LessonsContext);
  const navigate = useNavigate();

  const handleNavigate = (subtema) => {
    setLessons(prevLessons => {
      return prevLessons.map(lesson => {
        if (lesson.id === subtema.lessonId) {
          const updatedSubtemas = lesson.subtemas.map(sub => {
            if (sub.id === subtema.id) {
              let newPoints = sub.puntos;
              let newStatus = sub.estado;

              if (!navigationHistory[sub.id]) {
                newPoints += 0;
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
    });

    // Updated navigation route
    navigate(`/anh-algelab/lecciones/${subtema.lessonId}/${subtema.id}`);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Mis Lecciones
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