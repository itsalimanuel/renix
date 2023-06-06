import React from 'react';

 export interface LineProps {
  type?: 'solid' | 'dashed';
  color?: string;
  className?: string;
}

export const Line: React.FC<LineProps> = ({ color, type, className }) => {
  return (
    <div
      className={`${
        type === 'solid'
          ? 'border-solid'
          : type === 'dashed'
          ? 'border-dashed'
          : ''
      }  ${color ? `border-${color}-400` : ''} ${
        className ? className : ''
      } mt-2 border-b `}
    ></div>
  );
};
