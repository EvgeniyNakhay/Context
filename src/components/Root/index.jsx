import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import Toggle from "../Toggle";

const Root = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Toggle
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark);
          if (theme === themes.dark) setTheme(themes.light);
        }}
        value={theme === themes.dark}
      />
    </>
  );
};

export default Root;
