import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './pages/auth/loginPage/LoginContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import storageLocalHost from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { NewAdvertFormContextProvider } from './pages/NewAdvertPage/Context';

const token = storageLocalHost.get('auth');
if (token) setAuthorizationHeader(token);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider initiallyLogged={!!token}>
        <NewAdvertFormContextProvider>
          <App />
        </NewAdvertFormContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
