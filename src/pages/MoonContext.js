// MoonContext.js
import React, { createContext, useState, useContext } from 'react';

const MoonContext = createContext();

export function useMoon() {
  return useContext(MoonContext);
}

export const MoonProvider = ({ children }) => {
  const [moonX, setMoonX] = useState(null);

  return (
    <MoonContext.Provider value={{ moonX, setMoonX }}>
      {children}
    </MoonContext.Provider>
  );
};