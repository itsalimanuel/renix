import React, { AnchorHTMLAttributes } from "react";

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to?: string;
  type?: "primary" | "success" | "info" | "warning" | "danger";
  text?: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}


export const LinkTo: React.FC<LinkProps> = ({ to, type, text, className, size }) => {
  return (
    <a
      href={to}
      className={`${
        type === "info"
          ? "bg-gray-700 text-white border-gray-700"
          : type === "success"
          ? "bg-green-700 text-white border-green-700"
          : type === "warning"
          ? "bg-orange-700 text-white border-orange-700"
          : type === "danger"
          ? "bg-red-700 text-white border-red-700"
          : " bg-transparent dark:text-white text-black"
      } ${
        size === "small"
          ? "text-sm py-1.5 px-2.5"
          : size === "medium"
          ? "text-base py-2.5 px-3.5"
          : size === "large"
          ? "text-lg py-3 px-4"
          : " text-xs py-1.5 px-1.5"
      } ${className ? className : ""}rounded`}
    >
      {text}
    </a>
  );
};
