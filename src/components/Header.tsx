const Header = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="bg-bg200 py-5">
      <nav className=" container flex items-center justify-between">
        <a className=" text-2xl font-semibold text-primary200" href="/">
          OAlonzo
        </a>
        <ul className="flex items-center">
          {navItems.map((item) => {
            return (
              <li key={item.name}>
                <a className="px-3" href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
