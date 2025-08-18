import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.scss";
import styles from "./components/Toggle/index.module.scss";
import Root from "./components/Root";
import ThemeProvider from "./providers/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Root className={styles.root} />
    </ThemeProvider>
  </StrictMode>
);
