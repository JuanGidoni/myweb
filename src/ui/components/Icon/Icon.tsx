// File: src/ui/components/Icon.tsx

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "../../context/IconContext";

interface IconProps {
  name: string;
  color?: string;
  title?: string;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, title, size, className }) => {
  const icons = useContext(IconContext);
  const icon = icons[name];

  if (!icon) {
    throw new Error(`Icon "${name}" is not registered.`);
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      title={title}
      size={size}
      className={className}
    />
  );
};

export default Icon;
