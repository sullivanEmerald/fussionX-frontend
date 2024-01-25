import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersProvider } from './context/user';
import { ImageProvider } from './context/image';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <ImageProvider>
          <App />
      </ImageProvider>
    </UsersProvider>
  </React.StrictMode>
);


