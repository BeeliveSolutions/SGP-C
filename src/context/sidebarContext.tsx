import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

function SideBarProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarContext, SideBarProvider };
