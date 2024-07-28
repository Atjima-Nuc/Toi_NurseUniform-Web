import { useEffect } from "react";
import { createPortal } from "react-dom";

const withModal = {
  small: "w-[200px]",
  big: "w-[900px]",
  full: "w-full",
  register: "w-[600px]",
};

export default function Modal({
  width = "full",
  title,
  children,
  open,
  onClose,
}) {
  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handlePressEsc);
    return () => document.removeEventListener("keydown", handlePressEsc);
  }, [onClose]);
  return (
    <>
      {open ? (
        <>
          <div className="fixed bg-slate-300 inset-0 opacity-50 z-30"></div>
          <div className="fixed inset-0 z-40" onMouseDown={onClose}>
            <div className="flex justify-center items-center min-h-screen">
              <div
                className={`bg-white rounded-lg shadow-lg ${withModal[width]}`}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <button className="invisible">&#10005;</button>
                  <h5 className="text-xl font-medium">{title}</h5>
                  <button onClick={onClose}>&#10005;</button>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
