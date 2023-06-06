import React,{ useState } from "react";

 export interface DialogProps {
  block?: boolean;
  children?: React.ReactNode;
  title?: string;
  body?: string;
  close?: string;
  width?:number;
  confirm?: string;
  size?: "small" | "medium" | "large";
  model?: React.ReactDOM;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Dialog: React.FC<DialogProps> = ({
  block,
  children,
  title,
  body,
  width,
  close,
  confirm,
  size,
  onClick,
}) => {
  const [open, setOpen] = useState(block);

  return (
    <>
      {children && <div onClick={() => setOpen(!open)}>{children}</div>}
      {open === true && (
        <div className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center">
          <div className=" absolute inset-0 w-full h-full  dark:bg-gray-900 bg-opacity-80 blur-sm"></div>
          <div
            className={`relative ${
              width != undefined ? `max-w-[${width}px]` : "max-w-xl"
            } w-full bg-white rounded-lg shadow dark:bg-gray-700 p-5 flex flex-col text-left gap-2`}
          >
            {title && (
              <div className="flex items-center justify-between">
                <h1 className=" text-xl font-bold">{title}</h1>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            )}
            {body && (
              <p className=" text-base text-gray-400 font-normal">{body}</p>
            )}
            <div className="flex items-center justify-end gap-1">
              {close && (
                <button
                  onClick={() => setOpen(!open)}
                  className={` ${
                    size === "small"
                      ? "px-3 py-2 text-xs font-medium"
                      : size === "medium"
                      ? "px-3 py-2 text-sm font-medium"
                      : size === "large"
                      ? "px-5 py-3 text-base font-medium"
                      : "text-sm px-5 py-2.5"
                  }  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-gray-200 focus:outline-none`}
                >
                  {close}
                </button>
              )}
              {confirm && (
                <button
                  onClick={onClick}
                  className={` ${
                    size === "small"
                      ? "px-3 py-2 text-xs font-medium"
                      : size === "medium"
                      ? "px-3 py-2 text-sm font-medium"
                      : size === "large"
                      ? "px-5 py-3 text-base font-medium"
                      : "text-sm px-5 py-2.5"
                  }  text-gray-900 focus:outline-none bg-green-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-gray-200 dark:border-green-600 dark:hover:text-white dark:hover:bg-green-700`}
                >
                  {confirm}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
