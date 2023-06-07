import React, { useState, useEffect } from 'react';
export interface backToTopProps {
  dir?: 'left' | 'right';
  text?: string;
  icon?: boolean;
}
export const BackToTop: React.FC<backToTopProps> = ({ dir, text, icon }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-6 flex items-center gap-1 text-xs uppercase font-medium ${
        dir === 'right' ? 'right-6' : dir === 'left' ? 'left-6' : 'right-6'
      } transition-opacity duration-300 ease-in-out ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      {!icon ? (
        text
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </>
      )}
    </button>
  );
};
