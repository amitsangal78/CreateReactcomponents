import React, { useEffect } from "react";
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
    </div>
  );
};
