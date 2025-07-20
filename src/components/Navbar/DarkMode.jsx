import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import darkIcon from "../../assets/website/dark-mode-button.png";
import lightIcon from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

 useEffect(() => {
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
}, [isDarkMode]);


  return (
    <Button
      variant="transparent"
      size="sm"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="border-0 p-2 bg-transparent"
    >
      <img
        src={isDarkMode ? lightIcon : darkIcon}
        alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        style={{ width: "40px", height: "28px", cursor: "pointer" }}
      />
    </Button>
  );
};

export default DarkMode;
