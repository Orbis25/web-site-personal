import Button from "./Button";
import { IconEye, IconFileCv } from "@tabler/icons-react";
import Image from "../assets/profile.jpg";
import RedesSociales from "./RedesSociales";
import Gradient from "./Gradient";
import classNames from "classnames";
import CV from "../assets/orbiscv.pdf";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center"
    >
      <Gradient className="opacity-50 dark:opacity-30 [clip-path:polygon(0%_0%,100%_0%,100%_90%,50%_100%,0%_90%)]" />

      <div className="container relative z-10 py-10">
        <div
          className={classNames(
            "flex flex-col items-center gap-12 justify-between",
            "lg:flex-row-reverse",
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-start max-w-2xl"
          >
            <p className="text-xl font-medium text-accent100 mb-2">
              {t("hero.hello")}
            </p>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary100 via-primary200 to-accent100 bg-clip-text text-transparent pb-2 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-text200 mt-6 mb-10 leading-relaxed font-light">
              <Trans
                i18nKey="hero.description"
                components={[
                  <span className="text-primary100 dark:text-primary200 font-bold border-b-2 border-primary100/30" />,
                  <span />, // text between
                  <span className="text-primary100 dark:text-primary200 font-medium" />,
                  <span />, // text between
                  <span className="text-accent100 font-medium" />,
                ]}
              />
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => window.open(CV)}
                className="group relative overflow-hidden px-8 py-4 transition-all hover:scale-105 active:scale-95"
              >
                <IconFileCv className="mr-2 group-hover:rotate-12 transition-transform" />
                {t("hero.downloadCv")}
              </Button>
              <Button className="text-primary100 dark:text-white bg-transparent border-2 border-primary100/50 hover:bg-primary100/10 px-8 py-4 transition-all hover:scale-105 active:scale-95">
                <IconEye className="mr-2 group-hover:scale-125 transition-transform" />
                {t("hero.viewProjects")}
              </Button>
            </div>

            <div className="mt-12">
              <RedesSociales />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Aura de color - Movida fuera del contenedor directo para evitar interferencia de blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary100/30 to-accent100/30 rounded-full blur-[80px] -z-10 animate-pulse-soft"></div>

            <img
              className="relative z-10 w-60 md:w-80 rounded-full border-4 border-white/20 shadow-2xl animate-float transition-all duration-700 active:scale-95"
              src={Image}
              alt="Orbis Alonzo Profile"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
