import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersProvider } from './context/user';
import { ImageProvider } from './context/image';
import AppProvider from './context/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <UsersProvider>
      <ImageProvider>
          <App />
      </ImageProvider>
    </UsersProvider>
    </AppProvider>
  </React.StrictMode>
);


