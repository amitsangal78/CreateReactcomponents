import React, { useEffect, useRef, useState } from "react";

import { formJson } from './multiStepFrom'; 
import styles from "./MultiStepFrom.module.css";


// MultiStepForm Component
export const MultiStepForm = () => {
  const [formData, setFormData] = useState(formJson);

  useEffect(() => {

  }, []);

  return (
    <>
    </>
  )
};
