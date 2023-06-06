import React from 'react';

export interface spaceProps {
  type?: 'dashed' | 'solid' | 'dots';
  className?: string;
  text?: string;
  color?: string;
}

export const Space: React.FC<spaceProps> = ({ text, type, className, color }) => {
  return (
    <div className={`flex items-center ${className ? className : ''}`}>
      <div
        className={`flex-grow border-b ${
          type === 'dashed'
            ? 'border-dashed'
            : type === 'dots'
            ? 'border-dotted'
            : ''
        } border-${color}-300 dark:border-gray-300`}
      ></div>
      <div className="mx-2">
        <h3 className="font-normal text-xs uppercase text-black dark:text-gray-400">
          {text}
        </h3>
      </div>
      <div
        className={`flex-grow border-b border-${color}-300  ${
          type === 'dashed'
            ? 'border-dashed'
            : type === 'dots'
            ? 'border-dotted'
            : ''
        } dark:border-gray-300`}
      ></div>
    </div>
  );
};


