import { IconSend } from "@tabler/icons-react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass dark:glass-dark rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-primary100/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 bg-accent100/20 blur-[100px] rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-start">
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary100 to-accent100 bg-clip-text text-transparent mb-8 lg:text-start leading-tight">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-slate-600 dark:text-text200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("contact.description")}
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <Button
              className="text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-transform group"
              onClick={() =>
                (window.location.href = "mailto:orbisalonzo@gmail.com")
              }
            >
              <IconSend className="size-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {t("contact.button")}
            </Button>
            <p className="mt-6 text-sm text-slate-400 dark:text-text200/50 font-medium tracking-widest uppercase">
              {t("contact.responseTime")}
            </p>
          </div>
        </div>
      </motion.div>

      <footer className="mt-20 text-center text-slate-400 dark:text-text200/40 text-sm">
        <p>© {new Date().getFullYear()} Orbis Alonzo. Built with Passion.</p>
      </footer>
    </section>
  );
};

export default ContactMe;
