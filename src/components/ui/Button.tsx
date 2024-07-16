import React, { FC } from 'react';

interface ButtonProps {
  text?: string;
  bg?: string;
  children: React.ReactNode;
  border?: string;
  hoverBg?: string;
  hoverText?: string;
  hoverScale?: string;
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
  borderRadius?: string;
  transitionDuration?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  text,
  bg,
  children,
  border = 'none',
  hoverBg = 'primary',
  hoverText = 'white',
  hoverScale = '105',
  width = 'auto',
  height = 'auto',
  paddingX = '10',
  paddingY = '2',
  borderRadius = 'md',
  transitionDuration = '300',
  type = 'button',
}) => {
  return (
    <button type={type}
      className={`bg-${bg}-500 border-${border} px-${paddingX} py-${paddingY} w-${width} h-${height} rounded-${borderRadius} text-${text} 
      hover:bg-${hoverBg} hover:text-${hoverText} hover:scale-${hoverScale} transition duration-${transitionDuration} ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
