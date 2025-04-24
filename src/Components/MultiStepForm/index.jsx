import React, { useEffect, useState } from "react";

import { formJson } from "./multiStepFrom";
import styles from "./MultiStepForm.module.css";
import { validationPatterns } from "../../utils/utils";

// MultiStepForm Component
export const MultiStepForm = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {}, []);

  const validateField = (field) => {
    let isValid = true;
    const value = formData[field.name];

    const setError = (message) => {
      isValid = false;
      setErrors((prev) => ({ ...prev, [field.name]: message }));
    };

    const clearError = () => {
      setErrors((prev) => ({ ...prev, [field.name]: "" }));
    };

    if (field.validation) {
      for (const rule of field.validation) {
        switch (rule) {
          case "empty":
            if (!value?.trim()) {
              setError("This is a mandatory field");
              return false;
            }
            break;
          case "name":
            if (!validationPatterns.name.test(value)) {
              setError("Name must contain only letters and spaces");
              return false;
            }
            break;
          case "email":
            if (!validationPatterns.email.test(value)) {
              setError("Enter a valid email address");
              return false;
            }
            break;
          case "password":
            if (!validationPatterns.password.test(value)) {
              setError("Enter a valid password");
              return false;
            }
            break;
          case "confirmPassword":
            if (value !== formData["password"]) {
              setError("Passwords do not match");
              return false;
            }
            break;
          case "zip":
            if (!validationPatterns.zip.test(value)) {
              setError("Enter a valid zip code");
              return false;
            }
            break;
          case "phonenumber":
            if (!validationPatterns.phone.test(value)) {
              setError("Enter a valid phone number");
              return false;
            }
            break;
          case "checked":
            if (!value) {
              setError("This field must be checked");
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    clearError();
    return isValid;
  };

  const validateStep = (step) => {
    const stepData = formJson?.form[step - 1];
    if (!stepData) return false;
    return stepData.fields.every((field) => {
      return validateField(field);
    });
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === formJson?.form.length) {
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className={styles.container}>
        {formJson?.form.map((step) => (
          <div
            key={step.id}
            style={{ display: currentStep === step.id ? "flex" : "none" }}
          >
            <h2>{step.name}</h2>
            <div>
              {step.fields.map((field) => (
                <div key={field.name}>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                  />
                  {errors[field.name] && (
                    <p className={styles.error}>{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          {currentStep > 1 && (
            <button onClick={() => handleBack()}>Back</button>
          )}
          {currentStep <= formJson?.form.length && (
            <button onClick={() => handleNext()}>Next</button>
          )}
        </div>
      </div>
    </>
  );
};
