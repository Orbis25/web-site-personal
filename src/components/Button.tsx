import { FC } from "react";

interface Props {
  children: any;
  classNames?: string;
}
const Button: FC<Props> = ({ children, classNames = "rounded-full" }) => {
  return (
    <button
      className={`${classNames} bg-primary100 hover:bg-primary200 transition-colors duration-500  px-4 py-2 flex items-center gap-x-2 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
