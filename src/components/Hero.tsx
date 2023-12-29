import Button from "./Button";
import { IconEye, IconFileCv } from "@tabler/icons-react";
import Image from "../assets/profile.png";

const Hero = () => {
  return (
    <section className=" relative">
      <div className="container  py-20 flex items-center gap-x-10 justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-medium text-primary200">Hello, I'm</p>
          <h1 className="text-6xl font-bold text-primary200">Orbis Alonzo</h1>
          <p className="text-lg max-w-[30ch] mt-5 mb-5 ">
            Full Stack Software Engineer, I create seamless web experiences for
            end-users
          </p>
          <div className="flex items-center gap-x-2">
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
        <img className=" w-80" src={Image} alt="Imagen Profile Github Orbis" />
      </div>
    </section>
  );
};

export default Hero;
