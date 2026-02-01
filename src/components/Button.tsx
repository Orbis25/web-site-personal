import { FC, ReactNode, MouseEvent } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: FC<Props> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "rounded-xl font-medium transition-all duration-300 px-6 py-3 shrink-0 flex items-center justify-center gap-2 text-white shadow-lg active:scale-95",
        "bg-primary100 hover:bg-primary200 hover:shadow-primary100/20",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
