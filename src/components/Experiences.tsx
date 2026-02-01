import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import experiencesEs from "../assets/data/es/experiences.json";
import experiencesEn from "../assets/data/en/experiences.json";

const Experiences = () => {
  const { t, i18n } = useTranslation();

  const experiences = useMemo(() => {
    return i18n.language === "es" ? experiencesEs : experiencesEn;
  }, [i18n.language]);

  const formatDate = (
    startDate: string,
    endDate: string | null,
    current: boolean,
  ) => {
    const start = new Date(startDate).getFullYear();
    if (current) {
      return `${start} - ${t("experience.present")}`;
    }
    const end = endDate ? new Date(endDate).getFullYear() : "";
    return `${start} - ${end}`;
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="bg-gradient-to-r from-primary100 to-accent100 bg-clip-text text-transparent mb-16">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mt-10 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass dark:glass-dark rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border-l-4 border-l-primary100"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent100 group-hover:text-primary200 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium text-slate-600 dark:text-text200 mt-1">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-sm text-slate-500 dark:text-text200/60 mt-1">
                      {exp.location}
                    </p>
                  )}
                </div>
                <div className="bg-primary100/10 text-primary200 px-4 py-1.5 rounded-full text-sm font-semibold self-start md:self-center border border-primary100/20">
                  {formatDate(exp.startDate, exp.endDate, exp.current)}
                </div>
              </div>

              <p className="text-slate-600 dark:text-text200 leading-relaxed mb-8 text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-200 dark:bg-bg300/30 text-slate-600 dark:text-text200 border border-slate-300 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
