import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full-layout/loadable/Loadable';
import ProtectedRoute from '../components/protected-route/ProtectedRoute';

/* ***Layouts**** */
const FullLayoutLanding = Loadable(lazy(() => import('../layouts/full-layout/FullLayoutLanding')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank-layout/BlankLayout')));

/* ****Pages***** */
const Home = Loadable(lazy(() => import('../views/home/Home')));

/* ****Auth***** */
const Login = Loadable(lazy(() => import('../views/auth/Login/Login')));
const Error = Loadable(lazy(() => import('../views/auth/Error/Error')));

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
    path: '/anh-algelab/auth',
    element: <BlankLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/anh-algelab/auth/404" replace /> },
    ],
  },
];

export default Router;