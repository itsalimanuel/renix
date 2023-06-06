import React from "react";

 export interface RadioProps {
  size?: "small" | "medium" | "large";
  label?: string | number | boolean;
  disabled?: boolean;
  border?: boolean;
  name?: string;
  value?: string | number | boolean |any;
  children?: React.ReactNode;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  size,
  label,
  disabled,
  border,
  name,
  value,
  className,
}) => {
  return (
    <div
      className={`relative w-fit bg-transparent   rounded peer peer-focus:border-red-500 checked:border-red-600 ${
        size === "small"
          ? "px-2.5 py-1.5 text-sm"
          : size === "medium"
          ? "px-3 py-2 text-base leading-5"
          : size === "large"
          ? "px-3.5 py-2.5 text-xl"
          : "py-0.5 px-1 text-xs leading-6"
      } text-black dark:text-white ${className ? className : ""} ${
        border ? "border-black border dark:border-white" : ""
      } ${disabled == true ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <label
        className={`flex items-center gap-2 ${
          disabled == true ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        htmlFor={name}
      >
        <input
          type="radio"
          name={name}
          value={value}
          className={`leading-4 ${
            disabled == true ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={disabled}
        />
        <span className="z-0">{label}</span>
      </label>
    </div>
  );
};