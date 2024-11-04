// src/views/lectures/utils/contentLoader.js

import { useContext } from 'react';
import { LessonsContext } from '../../../context/LessonsContext/LessonsContext';

export const useContentLoader = () => {
  const { content } = useContext(LessonsContext);

  const fetchLectureContent = async (lectureId) => {
    // Simulating an async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content[lectureId]);
      }, 500);
    });
  };

  return { fetchLectureContent };
};