import Gradient from "./Gradient";
import NetCore from "../assets/skills/netcore.png";
import Nodejs from "../assets/skills/nodejs.png";
import Js from "../assets/skills/js.png";
import Ts from "../assets/skills/ts.png";
import Sql from "../assets/skills/sql.png";
import ReactJs from "../assets/skills/reactjs.png";
import AngularJS from "../assets/skills/angularJS.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import materialUi from "../assets/skills/material-ui.png";
import nestJs from "../assets/skills/nestjs.svg";
import Mongodb from "../assets/skills/mongodb.png";

import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [isHover, setIsHover] = useState<null | number>(null);
  const skills = [
    {
      name: ".Net",
      logo: NetCore,
      color: "#5c2992",
    },
    {
      name: "Nodejs",
      logo: Nodejs,
      color: "#539e43",
    },
    {
      name: "Javascript",
      logo: Js,
      color: "#f7e018",
    },
    {
      name: "TypeScript",
      logo: Ts,
      color: "#2d79c7",
    },
    {
      name: "SQL",
      logo: Sql,
      color: "#bf3d34",
    },
    {
      name: "Reactjs",
      logo: ReactJs,
      color: "#61dbfb",
    },

    {
      name: "AngularJS",
      logo: AngularJS,
      color: "#c3002f",
    },
    {
      name: "Bootstrap",
      logo: Bootstrap,
      color: "#7611f7",
    },
    {
      name: "Material UI",
      logo: materialUi,
      color: "#007fff",
    },
    {
      name: "Nestjs",
      logo: nestJs,
      color: "#e0234e",
    },
    {
      name: "MongoDB",
      logo: Mongodb,
      color: "#45a538",
    },
    {
      name: "React Native",
      logo: ReactJs,
      color: "#61dbfb",
    },
  ];
  return (
    <section className="relative ">
      <Gradient className=" rotate-180" />
      <div className="container my-24">
        <h2 className=" dark:text-white pt-24">Skills</h2>
        <ul className=" flex gap-4 flex-wrap mt-10 justify-center ">
          {skills.map((skill, index) => {
            return (
              <motion.li
                key={index}
                onMouseEnter={() => setIsHover(index)}
                onMouseLeave={() => setIsHover(null)}
                className=" relative size-24 rounded-full grid place-content-center"
                style={{
                  backgroundColor: `${skill.color}20`,
                }}
              >
                <div
                  className="group flex flex-col gap-y-1 items-center"
                  key={index}
                >
                  <motion.img
                    layoutId={`id-${skill.name}`}
                    src={skill.logo}
                    alt={skill.name}
                    className="w-9"
                  />
                  {isHover === index && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.1 }}
                      className="dark:text-white text-center text-xs"
                    >
                      {skill.name}
                    </motion.span>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
