import React from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full-layout/loadable/Loadable';
import ProtectedRoute from '../components/protected-route/ProtectedRoute';

// Layouts
const FullLayoutLanding = Loadable(React.lazy(() => import('../layouts/full-layout/FullLayoutLanding')));
const FullLayout = Loadable(React.lazy(() => import('../layouts/full-layout/FullLayout')));
const BlankLayout = Loadable(React.lazy(() => import('../layouts/blank-layout/BlankLayout')));

// Pages
const Home = Loadable(React.lazy(() => import('../views/home/Home')));
const Lessons = Loadable(React.lazy(() => import('../views/lessons/Lessons')));
const Lecture = Loadable(React.lazy(() => import('../views/lectures/Lectures')));

// Auth
const Login = Loadable(React.lazy(() => import('../views/auth/Login/Login')));
const Error = Loadable(React.lazy(() => import('../views/auth/Error/Error')));

const Router = [
  {
    path: '/',
    element: <Navigate to="/anh-algelab" />,
  },
  {
    path: '/anh-algelab',
    element: (
      <ProtectedRoute>
        <FullLayoutLanding />
      </ProtectedRoute>
    ),
    children: [
      { path: '', element: <Home /> },
    ],
  },
  {
    path: '/anh-algelab',
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'lecciones', element: <Lessons /> },
      { path: 'lecciones/:idLecture', element: <Lecture /> },
    ],
  },
  {
    path: '/anh-algelab/auth',
    element: <BlankLayout />,
    children: [
      { path: 'login', element: <Login /> },
    ],
  },
  { path: '/anh-algelab/404', element: <Error /> },
  { path: '*', element: <Navigate to="/anh-algelab/404" replace /> },
];

export default Router;