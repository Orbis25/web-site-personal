import Gradient from "./Gradient";
import NetCore from "../assets/skills/netcore.png";
import Nodejs from "../assets/skills/nodejs.png";
import Js from "../assets/skills/js.png";
import Ts from "../assets/skills/ts.png";
import Sql from "../assets/skills/sql.png";
import ReactJs from "../assets/skills/reactjs.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import materialUi from "../assets/skills/material-ui.png";
import nestJs from "../assets/skills/nestjs.svg";
import Mongodb from "../assets/skills/mongodb.png";
import AWSIcon from "../assets/skills/aws.svg";

// New SVG icons
import DockerIcon from "../assets/skills/docker-icon.svg";
import FirebaseIcon from "../assets/skills/firebase-icon.svg";
import GitIcon from "../assets/skills/git-icon.svg";
import GeminiIcon from "../assets/skills/google-gemini.svg";
import AzureIcon from "../assets/skills/microsoft-azure.svg";
import OpenAIIcon from "../assets/skills/openai-icon.svg";
import PostgresIcon from "../assets/skills/postgresql.svg";
import RabbitMQIcon from "../assets/skills/rabbitmq-icon.svg";
import RedisIcon from "../assets/skills/redis.svg";
import SupabaseIcon from "../assets/skills/supabase-icon.svg";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import skillsData from "../assets/data/skills.json";

const Skills = () => {
  const { t } = useTranslation();

  // Map skill IDs to imported logos
  const logoMap: Record<string, string> = {
    dotnet: NetCore,
    nodejs: Nodejs,
    javascript: Js,
    typescript: Ts,
    sql: Sql,
    postgresql: PostgresIcon,
    react: ReactJs,
    bootstrap: Bootstrap,
    materialui: materialUi,
    nestjs: nestJs,
    mongodb: Mongodb,
    redis: RedisIcon,
    aws: AWSIcon,
    firebase: FirebaseIcon,
    openai: OpenAIIcon,
    gemini: GeminiIcon,
    supabase: SupabaseIcon,
    rabbitmq: RabbitMQIcon,
    docker: DockerIcon,
    azure: AzureIcon,
    git: GitIcon,
  };

  const skills = skillsData.map((skill) => ({
    ...skill,
    logo: logoMap[skill.id] || skill.logo,
  }));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="relative py-24 bg-bg200/50">
      <Gradient className="rotate-180 opacity-20" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="bg-gradient-to-r from-accent100 to-primary100 bg-clip-text text-transparent mb-16">
            {t("skills.title")}
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                backgroundColor: `${skill.color}20`,
                borderColor: `${skill.color}40`,
              }}
              className="glass dark:glass-dark aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 border border-white/10 transition-colors duration-300 group cursor-default"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain relative z-10 transition-transform duration-500 group-hover:rotate-12"
                />
              </div>
              <span className="text-slate-800 dark:text-text100 font-medium text-sm group-hover:text-primary100 dark:group-hover:text-primary200 transition-colors">
                {skill.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
