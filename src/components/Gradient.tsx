import { FC } from "react";

interface Props {
  className?: string;
}

const Gradient: FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={` ${className} absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1A1A1A_40%,#6A00FF_100%)]`}
      />
    </>
  );
};

export default Gradient;
