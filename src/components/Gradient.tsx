import { FC } from "react";

interface Props {
  className?: string;
}

const Gradient: FC<Props> = ({ className }) => {
  return (
    <div
      className={` ${className} absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#f8fafc_40%,#6366f1_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0f172a_40%,#6366f1_100%)]`}
    />
  );
};

export default Gradient;
