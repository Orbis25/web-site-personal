import { FC } from "react";

interface Props {
  children: any;
}
const Button: FC<Props> = ({ children }) => {
  return (
    <button className=" bg-primary100 hover:bg-primary200 transition-colors duration-500  px-4 py-2 rounded-full flex items-center gap-x-2">
      {children}
    </button>
  );
};

export default Button;
