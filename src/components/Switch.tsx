import { IconSunFilled } from "@tabler/icons-react";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={() => toggleDarkMode()}
      className=" ml-3 overflow-hidden relative size-10  grid place-content-center rounded-full bg-gray-200 dark:bg-bg300"
    >
      <div
        className={classNames(
          " size-3 rounded-full bg-white",
          darkMode ? "size-4" : "size-3"
        )}
      />
      <div
        className={classNames(
          " rounded-full  absolute left-[50%]  top-[50%] bg-gray-200 dark:bg-bg300",
          darkMode
            ? "size-4 -translate-x-[25%] -translate-y-[60%] "
            : "size-3 -translate-x-[-30%] -translate-y-[120%]",
          " transition-transform duration-300"
        )}
      />
      <IconSunFilled
        className={classNames(
          "absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          darkMode ? "scale-0" : " scale-110",
          "transition-transform duration-300"
        )}
      />
    </button>
  );
};

export default Switch;
