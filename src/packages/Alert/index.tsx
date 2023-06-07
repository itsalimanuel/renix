import React, { useState, useEffect } from 'react';

interface AlertProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  duration?: number;
  icon?: boolean;
  onClose?: () => void;
  location?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const Alert: React.FC<AlertProps> = ({
  type,
  message,
  duration = 5000,
  onClose,
  location = 'top-right',
  icon,
}) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [duration, onClose]);

  const handleAlertClose = () => {
    setShowAlert(false);
    if (onClose) {
      onClose();
    }
  };

  let alertColorClasses = '';
  switch (type) {
    case 'success':
      alertColorClasses =
        'bg-green-200 dark:text-black text-white border-b-4 border-green-900';
      break;
    case 'info':
      alertColorClasses =
        'bg-blue-200 dark:text-black text-white border-b-4 border-blue-900';
      break;
    case 'warning':
      alertColorClasses =
        'bg-yellow-200 dark:text-black text-white border-b-4 border-yellow-900';
      break;
    case 'error':
      alertColorClasses =
        'bg-red-200 dark:text-black text-white border-b-4 border-red-900';
      break;
    default:
      alertColorClasses =
        'bg-gray-200 dark:text-black text-white border-b-4 border-gray-900';
  }

  let alertPositionClasses = '';
  switch (location) {
    case 'top-left':
      alertPositionClasses = 'fixed top-6 left-6';
      break;
    case 'top-right':
      alertPositionClasses = 'fixed top-6 right-6';
      break;
    case 'bottom-left':
      alertPositionClasses = 'fixed bottom-6 left-6';
      break;
    case 'bottom-right':
      alertPositionClasses = 'fixed bottom-6 right-6';
      break;
    default:
      alertPositionClasses = 'fixed top-6 right-6';
  }

  return (
    <>
      {showAlert && (
        <div
          className={`px-4 py-2 max-w-md flex items-start  text-left rounded ${alertColorClasses} ${alertPositionClasses}`}
        >
          {icon && type === 'info' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          ) : type === 'error' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          ) : type === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          ) : type === 'warning' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          ) : (
            ''
          )}
          <p className="text-sm">{message}</p>

          <svg
            onClick={handleAlertClose}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 ml-4 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}
    </>
  );
};
