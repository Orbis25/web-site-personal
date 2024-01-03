import Switch from "./Switch";

const Header = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className=" bg-gray-100 dark:bg-bg200 py-5">
      <nav className=" container flex items-center justify-between">
        <a className=" text-2xl font-semibold text-primary200" href="/">
          OAlonzo
        </a>
        <ul className="flex items-center">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="px-3" href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
          <Switch />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
