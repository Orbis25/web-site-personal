import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMailShare,
} from "@tabler/icons-react";

const RedesSociales = () => {
  const socialMedias = [
    {
      name: "instagram",
      url: "https://www.instagram.com/eduardomtzp",
      icon: IconBrandInstagram,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/eduardomtzp",
      icon: IconBrandLinkedin,
    },
    {
      name: "github",
      url: "https://www.linkedin.com/in/eduardomtzp",
      icon: IconBrandGithub,
    },
    {
      name: "orbisalonzo@gmail.com",
      url: "mailto:orbisalonzo@gmail.com?subject=From%20MyWebsite!",
      icon: IconMailShare,
    },
  ];
  return (
    <section className="container py-10 flex justify-between items-center">
      <div className=" flex gap-x-3 items-center">
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
