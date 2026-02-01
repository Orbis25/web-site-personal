import { IconSunFilled } from "@tabler/icons-react";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(true); // Default to dark mode
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", `${darkMode}`);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={() => toggleDarkMode()}
      className="ml-3 overflow-hidden relative size-10 grid place-content-center rounded-xl bg-slate-200 dark:bg-slate-800 hover:ring-2 ring-primary100/50 transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      <div
        className={classNames(
          "size-3 rounded-full bg-white transition-all duration-300",
          darkMode ? "scale-100" : "scale-0",
        )}
      />
      <div
        className={classNames(
          "rounded-full absolute left-[50%] top-[50%] bg-slate-200 dark:bg-slate-800 transition-all duration-300",
          darkMode
            ? "size-4 -translate-x-[25%] -translate-y-[60%]"
            : "size-0 -translate-x-[50%] -translate-y-[50%]",
        )}
      />
      {!darkMode && (
        <IconSunFilled className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-amber-500 scale-110" />
      )}
    </button>
  );
};

export default Switch;
