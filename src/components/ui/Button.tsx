import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "white" | "black";
  size?: "sm" | "md" | "lg";
  className?: string;
  isDiscount?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  isDiscount = false,
  ...props
}: ButtonProps) => {
  const sizes = {
    lg: "h-15 lg:h-[74px] w-full md:w-[534px] text-[14px] lg:text-[22px]",
    md: "h-[57px] w-full md:w-[287px] text-base",
    sm: "h-[40px] w-full md:w-[190px] text-xs",
  };

  const variants = {
    primary: "bg-gradient-secondary text-white",
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  return (
    <button
      className={`relative flex items-center justify-center rounded-full font-semibold transition duration-300 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {isDiscount ? (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[59px] h-15 lg:w-[74px] lg:h-[74px] lg:w-10 lg:h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-[20px] font-semibold oldstyle-nums">
          -50%
        </span>
      ) : null}
    </button>
  );
};

export default Button;
