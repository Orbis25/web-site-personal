import Switch from "./Switch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.about"), href: "#hero" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.contact"), href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full glass dark:glass-dark transition-all duration-300">
      <nav className="container flex items-center justify-between py-4">
        <a
          className="text-2xl font-bold bg-gradient-to-r from-primary100 to-accent100 bg-clip-text text-transparent hover:scale-105 transition-transform"
          href="/"
        >
          OAlonzo<span className="text-primary200"></span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a className="nav-link" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Switch />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
