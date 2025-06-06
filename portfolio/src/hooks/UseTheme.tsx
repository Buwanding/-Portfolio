// src/hooks/useTheme.js
import { useEffect, useState } from "react";

function useTheme(): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
// Update your useTheme hook to always return [string, Dispatch<SetStateAction<string>>]
