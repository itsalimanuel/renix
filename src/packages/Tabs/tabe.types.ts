import React from "react";

export interface TabProps {
  label: string;
  position?: string;
  active: boolean; // Added the active prop
  onClick: () => void; // Added the onClick prop
  children: React.ReactNode;
}
