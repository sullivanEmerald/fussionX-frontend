import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersProvider } from './context/user';
import { ImageProvider } from './context/image';
import UserProvider from './context/person';

// this will be taken to the user ROUTESS
import AppProvider from './context/main';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <UserProvider>
    <UsersProvider>
      <ImageProvider>
          <App />
      </ImageProvider>
      </UsersProvider>
    </UserProvider>
    </AppProvider>
  </React.StrictMode>
);


