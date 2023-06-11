import React, { useState } from "react";

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

interface TooltipProps {
  text: string;
  placement?: Placement;
  children: React.ReactNode;
  width?: number;
}
export const Tooltip: React.FC<TooltipProps> = ({
  text,
  placement = "top",
  children,
  width,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const getTooltipClass = (): string => {
    switch (placement) {
      case "top":
        return "absolute -translate-y-full -top-1.5 left-1/2 -translate-x-1/2";
      case "left":
        return "absolute transform top-1/2 -translate-y-1/2 -left-1.5 -translate-x-full";
      case "right":
        return "absolute transform  top-1/2 -translate-y-1/2 -right-1.5 translate-x-full";
      case "bottom":
        return "absolute transform -bottom-1.5 translate-y-full left-1/2 -translate-x-1/2";
      default:
        return "absolute -translate-y-full -top-1.5 left-1/2 -translate-x-1/2";
    }
  };

  return (
    <div className="relative inline-block ">
      <div
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div
        
          className={`${getTooltipClass()}`}
          style={{
            width: width ? width + "px" : "200px",
          }}
        >
          <div className="bg-gray-800 text-white text-sm rounded py-2 px-4 inline-flex">
            {text}
          </div>
        </div>
      )}
    </div>
  );
};
