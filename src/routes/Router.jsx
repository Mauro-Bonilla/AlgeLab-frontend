import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full-layout/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full-layout/FullLayout')));
const FullLayoutLanding = Loadable(lazy(() => import('../layouts/full-layout/FullLayoutLanding')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank-layout/BlankLayout')));

/* ****auth***** */
const Error = Loadable(lazy(() => import('../views/auth/Error/Error')));
const Login = Loadable(lazy(() => import('../views/auth/Login/Login')));

/* ****Pages***** */
const Home = Loadable(lazy(() => import('../views/home/Home')));

/* ****Routes***** */
const Router = [
    {
      path: '/',
      element: <Navigate to="/anh-algelab" />,
    },
    {
      path: '/anh-algelab',
      element: <FullLayoutLanding />,
      children: [
        { path: '', element: <Home /> },
      ],
    },
    {
      path: '/anh-algelab',
      element: <FullLayout />,
      children: [

        { path: '*', element: <Navigate to="/anh-algelab/auth/404" replace /> },
      ],
    },
    {
      path: '/anh-algelab/auth',
      element: <BlankLayout />,
      children: [
        { path: '404', element: <Error /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <Navigate to="/anh-algelab/auth/404" replace /> },
      ],
    },
  ];
  
  export default Router;