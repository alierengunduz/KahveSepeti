import { FC } from "react";

interface inputProps {
  bg: string;
  text: string;
  type: string;
  placeholder: string;
  w: string;
}

const input: FC<inputProps> = ({ bg, text, type,placeholder,w}) => {
  return (
    <div>
      <input
        type={type}
        className={`bg-${bg} text-${text}  p-2 w-${w}  outline-none pl-4 rounded-3xl `}
        placeholder={placeholder}
      />
    </div>
  );
};

export default input;
