import React from 'react';

export interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
  color?: string;
  img?: string;
  type?: 'square' | 'circle' | 'rounded';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size,
  border,
  color,
  img,
  type,
  className,
}) => {
  return (
    <>
      {img ? (
        <img
          src={img}
          className={`${color ? `ring-${color}-500` : ''} ${
            size === 'small'
              ? 'h-[35px] w-[35px]'
              : size === 'medium'
              ? 'h-[45px] w-[45px]'
              : size === 'large'
              ? 'h-[55px] w-[55px]'
              : ''
          } ${border ? `border border-solid border-${color}-500` : ''} ${
            type === 'square'
              ? 'rounded-3xl'
              : type === 'circle'
              ? 'rounded-[50%]'
              : type === 'rounded'
              ? 'rounded'
              : 'rounded-none'
          } m-auto ${className ? className : ''}`}
          alt=""
        />
      ) : (
        <div
          className={`${
            color ? `ring-${color}-500 ring-2 bg-${color}-500` : ''
          } ${
            size === 'small'
              ? 'h-[35px] w-[35px]'
              : size === 'medium'
              ? 'h-[45px] w-[45px]'
              : size === 'large'
              ? 'h-[55px] w-[55px]'
              : ''
          } ${border ? `border border-solid border-${color}-500` : ''} ${
            type === 'square'
              ? 'rounded-3xl'
              : type === 'circle'
              ? 'rounded-[50%]'
              : type === 'rounded'
              ? 'rounded'
              : 'rounded-none'
          } m-auto ${className ? className : ''}`}
        />
      )}
    </>
  );
};
