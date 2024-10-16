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
    navigate(`/anh-algelab/lecciones/${subtema.lessonId}`);
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