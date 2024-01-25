import React, { createContext, useContext, useEffect, useState } from 'react';

export const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const getPredictions = async () => {
      try {
        const response = await fetch('/predictions');
        if (!response.ok) {
          console.log(response);
          return;
        }
        const {odds} = await response.json();
        setPredictions(odds)
      } catch (error) {
        console.error(error);
      }
    };

    getPredictions();
  }, []);

  return (
    <PredictionContext.Provider value={{ predictions, setPredictions }}>
      {children}
    </PredictionContext.Provider>
  );
};

export const usePredictions = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePredictions must be used within a PredictionProvider');
  }
  return context;
};
