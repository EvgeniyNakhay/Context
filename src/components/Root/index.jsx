import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import Toggle from "../Toggle";
import Description from "../description/description";
import MainCaption from "../mainCaption/mainCaption";
import StatusIcon from "../statusIcon/statusIcon";

const Root = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusIcon />
      <MainCaption />
      <Description />
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
