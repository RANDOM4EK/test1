import { useEffect, useState } from "react";

function useTheme() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    if (isLight) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "white";
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(prev => !prev);
  };

  return { isLight, toggleTheme };
}

export default useTheme;
