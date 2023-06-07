import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface UseLoadingOptions {
  target?: string | HTMLElement;
}

export const useLoading = (options?: UseLoadingOptions) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const targetElement =
        options?.target &&
        (typeof options.target === "string"
          ? document.querySelector(options.target)
          : options.target);

      if (targetElement instanceof HTMLElement) {
        targetElement.classList.add("relative");
      } else if (typeof targetElement === "string") {
        const element = document.querySelector(targetElement);
        if (element instanceof HTMLElement) {
          element.classList.add("relative");
        }
      } else {
        document.body.classList.add("overflow-hidden");
      }
    } else {
      const targetElement =
        options?.target &&
        (typeof options.target === "string"
          ? document.querySelector(options.target)
          : options.target);

      if (targetElement instanceof HTMLElement) {
        targetElement.classList.remove("relative");
      } else if (typeof targetElement === "string") {
        const element = document.querySelector(targetElement);
        if (element instanceof HTMLElement) {
          element.classList.remove("relative");
        }
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [loading, options?.target]);

  const LoadingOverlay: React.FC = () =>
    loading
      ? ReactDOM.createPortal(
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="loader">Loading...</div>
          </div>,
          options?.target
            ? (typeof options.target === "string"
                ? document.querySelector(options.target)
                : options.target) || document.body
            : document.body
        )
      : null;

  return [LoadingOverlay, setLoading] as const;
};
