import React, { useEffect } from "react";
import { X } from "lucide-react";
import styles from "./Toast.module.css";

export const Toast = ({ toastItem, removeToast, interval = 2000, index }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     removeToast(toastItem?.id);
  //   }, interval);
  // }, []);

  return (
    <div
      className={
        toastItem?.type === "error" ? styles.errorToast : styles.successToast
      }
      style={{ top: index * 65 }}
    >
      {toastItem?.message}
      <button
        onClick={() => removeToast(toastItem?.id)}
        style={{ padding: "0", marginLeft: "10px" }}
      >
        <X size={14} />
      </button>
    </div>
  );
};
