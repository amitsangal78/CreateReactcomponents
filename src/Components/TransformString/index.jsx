import React, { useState } from "react";
import styles from "./transformStirng.module.css";

// String Transformers Component
export const StringTransformers = () => {
  const [inputString, setInputString] = useState("");

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const applyTransformation = (type) => {
    // TODO: Add transformation logic here
    console.log(type);
    switch (type) {
      case "reverse":
        const reversedStr = inputString.split(" ").reverse().join(" ");
        setInputString(reversedStr);
        break;
      case "capital":
        const splitString = inputString.split(" ");
        const capitalizeWords = splitString.map((item) => item.charAt(0).toLocaleUpperCase() + item.slice(1))
        console.log(capitalizeWords)
        capitalizeWords.join(" ");
        console.log(capitalizeWords)
        setInputString(capitalizeWords.join(" ")) 
        break;
      case "uppercase":
        const transformToUpper = inputString.toLocaleUpperCase();
        setInputString(transformToUpper)
        break;
      case "lowercase":
        const transformToLower = inputString.toLocaleLowerCase();
        setInputString(transformToLower)
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>String Transformers</h1>
      <select onChange={(e) => applyTransformation(e.target.value)}>
        <option value="">Select Transformation</option>
        <option value="reverse">Reverse</option>
        <option value="capital">Capitalize</option>
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
      </select>
      <input className={styles.input} onChange={(e) => handleInputChange(e)} value={inputString}/>
    </div>
  );
};
