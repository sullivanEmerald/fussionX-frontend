import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ImageProvider } from './context/image';
import AppProvider from './context/main';
import UserProvider from './context/loggeduser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <AppProvider>
          <App />
    </AppProvider>
    </UserProvider>
  </React.StrictMode>
);


