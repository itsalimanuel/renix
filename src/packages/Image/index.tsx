import React from 'react';

 export interface imageProps {
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  placeholder?: string;
  src?: string;
  alt?: string;
  zIndex?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const Image: React.FC<imageProps> = ({
  src,
  fit,
  width,
  height,
  alt,
  className,
  zIndex,
}) => {
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className ? className : ''} ${
            zIndex ? `z-[${zIndex}] relative` : ''
          } ${
            fit === 'fill'
              ? ' object-fill'
              : fit === 'contain'
              ? 'object-contain'
              : fit === 'cover'
              ? 'object-cover'
              : fit === 'none'
              ? 'object-none'
              : fit === 'scale-down'
              ? 'object-scale-down'
              : ''
          } m-auto`}
        />
      ) : (
        <div className="w-full h-full min-h-[150px] bg-slate-400 flex items-center justify-center relative p-5">
          FAILED
        </div>
      )}
    </>
  );
};

