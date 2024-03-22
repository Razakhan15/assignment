import { createContext, useState } from "react";

export const AppProvider = createContext();

function Context({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AppProvider.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppProvider.Provider>
  );
}

export default Context;
