import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMailShare,
} from "@tabler/icons-react";
import classNames from "classnames";

const RedesSociales = () => {
  const socialMedias = [
    {
      name: "instagram",
      url: "https://www.instagram.com/orbisdev/",
      icon: IconBrandInstagram,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/orbis-alonzo-gutierrez-54564716a/",
      icon: IconBrandLinkedin,
    },
    {
      name: "github",
      url: "https://github.com/Orbis25",
      icon: IconBrandGithub,
    },
    {
      name: "orbisalonzo@gmail.com",
      url: "mailto:orbisalonzo@gmail.com?subject=From%20MyWebsite!",
      icon: IconMailShare,
    },
  ];
  return (
    <section className="container py-10 flex flex-col gap-3 lg:flex-row justify-between items-center">
      <div
        className={classNames(
          "flex gap-2 justify-center items-center flex-wrap",
          "md:gap-4"
        )}
      >
        {socialMedias.map((socialMedia, index) => {
          const Icon = socialMedia.icon;
          return (
            <a
              key={index}
              href={socialMedia.url}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-y-text200/20 hover:bg-primary100  px-4 py-2 rounded-full flex items-center gap-x-2 hover:text-accent100 transition-colors"
            >
              <Icon />
              {socialMedia.name}
            </a>
          );
        })}
      </div>
      <div className=" bg-text200/10 px-4 py-2 rounded-full flex items-center gap-x-2">
        Available for work
        <div className=" size-3 bg-green-300 rounded-full relative">
          <div className=" inset-0 absolute bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default RedesSociales;
