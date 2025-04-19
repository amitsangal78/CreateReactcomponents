import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Toast } from "./Toast";

export const ToastComp = () => {
  const [count, setCount] = useState(0);
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = uuidv4();
    setToasts([...toasts, { ...toast, id }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <h1>Toast</h1>
      <div>
        <button
          onClick={() => {
            addToast({
              type: "error",
              message: "This is error message" + count,
            });
            setCount((prev) => prev + 1);
          }}
        >
          Add Error Toast
        </button>
        <button
          onClick={() => {
            addToast({
              type: "success",
              message: "This is success message" + count,
            });
            setCount((prev) => prev + 1);
          }}
        >
          Add Success Toast
        </button>
      </div>
      {toasts?.map((item, index) => (
        <Toast
          toastItem={item}
          index={index}
          removeToast={removeToast}
          interval={item?.interval}
          key={item?.id}
        />
      ))}
    </>
  );
};
