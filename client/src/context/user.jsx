import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('/users');
        if (!response.ok) {
          console.log(response);
          return;
        }
        const {users} = await response.json();
        setUsers(users)
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  console.log(users)

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('usePredictions must be used within a PredictionProvider');
  }
  return context;
};
