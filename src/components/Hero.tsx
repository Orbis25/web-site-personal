import Button from "./Button";
import { IconEye, IconFileCv } from "@tabler/icons-react";
import Image from "../assets/profile.png";
import RedesSociales from "./RedesSociales";
import Gradient from "./Gradient";
import classNames from "classnames";

const Hero = () => {
  return (
    <section className=" relative min-h-screen">
      <Gradient className="[clip-path:polygon(0%_0%,100%_0%,100%_90%,50%_100%,0%_90%)]" />
      <div
        className={classNames(
          "container py-20 flex flex-col-reverse items-center gap-10 justify-between",
          "md:flex-row"
        )}
      >
        <div className="flex flex-col text-center md:text-start">
          <p className="text-xl font-medium text-accent100">Hello, I'm</p>
          <h1 className="text-6xl font-bold bg-gradient-to-r to-primary200 bg-clip-text from-primary100 text-transparent ">
            Orbis Alonzo
          </h1>
          <p className="text-lg max-w-[30ch] mt-5 mb-5 ">
            Full Stack Software Engineer, I create seamless web experiences for
            end-users
          </p>
          <div className="flex items-center gap-x-2 mx-auto md:mx-0">
            <Button>
              <IconFileCv />
              Download cv
            </Button>
            <Button>
              <IconEye />
              See Projects
            </Button>
          </div>
        </div>
        <img
          className="md:w-80 w-60"
          src={Image}
          alt="Imagen Profile Github Orbis"
        />
      </div>
      <RedesSociales />
    </section>
  );
};

export default Hero;
