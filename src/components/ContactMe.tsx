import { IconSend } from "@tabler/icons-react";
import Button from "./Button";

const ContactMe = () => {
  return (
    <section className="pt-24 pb-24 container grid md:grid-cols-2 text-center md:text-start">
      <div>
        <h2 className=" dark:text-white md:text-start w-[70%] mx-auto md:w-full md:mx-0">
          Got a project? Let's Talk!
        </h2>
        <p className="max-w-[40ch] mt-10">
          If you want to learn more about me, have a question, or just want to
          say hello, please don't hesitate to contact me. I'll get back to you
          as soon as possible.
        </p>
      </div>
      <Button classNames=" w-fit mx-auto md:w-full md:mx-0 items-center justify-center rounded-3xl mt-5 md:mt-0">
        <IconSend />
        Send me a message
      </Button>
    </section>
  );
};

export default ContactMe;
