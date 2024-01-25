import React, { createContext, useContext, useEffect, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch('/profile/images');
        if (!response.ok) {
          console.log(response);
          return;
        }
        const {images} = await response.json();
        setImages(images)
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
  }, []);

  console.log(images)

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('usePredictions must be used within a PredictionProvider');
  }
  return context;
};
