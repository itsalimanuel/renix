import React,{ FC } from 'react';

 export interface BadgeProps {
  value?: number | string;
  max?: number;
  isDot?: boolean;
  type?: 'primary' | 'warning';
  children?: React.ReactNode;
  className?: string;
  dir?: 'right' | 'left';
}

export const Badge: FC<BadgeProps> = ({
  value,
  max,
  isDot,
  type,
  children,
  className,
  dir,
}: any) => {
  const displayValue = value && value >= max ? `${max}+` : value;

  return (
    <button
      className={`relative px-4 py-2 rounded hover:bg-blue-300 hover:bg-opacity-20 ${
        className ? className : ''
      }`}
      data-value={value}
      data-max={max}
    >
      <span
        className={`absolute text-xs top-0  -translate-y-1/2 px-0.5   rounded ${
          dir == 'right'
            ? 'right-0 translate-x-1/2 '
            : dir == 'left'
            ? 'left-0 -translate-x-1/2 '
            : 'right-0 translate-x-1/2'
        } ${
          type == 'primary'
            ? 'bg-green-500'
            : type == 'warning'
            ? 'bg-orange-500'
            : 'bg-blue-500'
        } ${isDot ? ' w-2 h-2 rounded-3xl' : ''}`}
      >
        {isDot ? '' : displayValue}
      </span>
      {children}
    </button>
  );
};


