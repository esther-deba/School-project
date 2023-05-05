import { createContext, useState } from 'react';
const EndPointContext = createContext();
const EndPointProvider = ({ children }) => {
  return (
    <EndPointContext.Provider
      value={{ endpoint: 'https://web-production-8816.up.railway.app/api' }}
    >
      {children}
    </EndPointContext.Provider>
  );
};
export { EndPointProvider, EndPointContext };
