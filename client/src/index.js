import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ImageProvider } from './context/image';
import AppProvider from './context/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
          <App />
    </AppProvider>
  </React.StrictMode>
);


