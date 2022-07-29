import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  skills,
  profession,
  home,
  description,
  projects,
} from "../api/appData";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [baseTheme, setBaseTheme] = useState(true);

  const [showSidebar, setShowSidebar] = useState(false);

  const [allSkills, setAllSkill] = useState([]);
  const [skillPerPage, setSkillPerPage] = useState(20);

  const [allProfession, setAllProfession] = useState([]);
  const [professionPerPage, setProfessionPerPage] = useState(20);

  const handleLightMode = () => {
    setBaseTheme(true);
  };

  const handleDarkMode = () => {
    setBaseTheme(false);
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const moreSkills = () => {
    setSkillPerPage(skillPerPage + 4);
  };

  const moreProfessions = () => {
    setProfessionPerPage(professionPerPage + 4);
  };

  const handleSkills = useCallback((page, perPage) => {
    if (skills.length) {
      setAllSkill(skills.length);
    }
    setAllSkill(skills.slice(page, perPage));
  }, []);

  const handleProfessions = useCallback((page, perPage) => {
    setAllProfession(profession.slice(page, perPage));
  }, []);

  useEffect(() => {
    handleSkills(0, skillPerPage);
    handleProfessions(0, professionPerPage);
  }, [handleSkills, skillPerPage, handleProfessions, professionPerPage]);

  return (
    <AppContext.Provider
      value={{
        baseTheme,
        showSidebar,
        allSkills,
        allProfession,
        handleDarkMode,
        handleLightMode,
        handleSidebar,
        moreSkills,
        moreProfessions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
