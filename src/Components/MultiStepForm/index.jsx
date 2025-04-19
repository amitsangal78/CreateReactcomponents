import React, { useEffect, useRef, useState } from "react";
import styles from "./MultiStepFrom.module.css";

// MultiStepForm Component
export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      Name: "",
      Email: "",
      phoneNumber: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    payment: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: "",
    },
    Review: {
      password:"",
      confirmPassword: "",
      checkbox: true,
    },
  });
};
