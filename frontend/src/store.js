import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

