import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { LessonsProvider } from './context/LessonsContext/LessonsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LessonsProvider>
          <App />
        </LessonsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);