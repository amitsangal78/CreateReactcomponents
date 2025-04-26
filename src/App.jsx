import { useState, useEffect, useMemo } from "react";
import { StringTransformers } from "./Components/TransformString";
import { TicTacToe } from "./Components/TicTacToe";
import { Throttle, debounce } from "./utils/utils";
import { ToastComp } from "./Components/Toast";
import { Counter } from "./Components/Counter";
import { MultiStepForm } from "./Components/MultiStepForm";
import { List } from "./Components/Crud";

// Form elements
import MultiSelectUsage from "./FormElementUsage/useMultiSelect";

function App() {
  const [inputText, setInputText] = useState("");

  const add = (a, b) => a + b;

  const throttleFn = useMemo(() => Throttle(add, 10000), []);
  const debounceFn = useMemo(() => debounce(add, 3000), []);
  throttleFn(2, 3)
    .then((res1) => console.log(res1))
    .catch((err1) => console.log(err1));
  throttleFn(4, 5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  useEffect(() => {
    if (inputText?.length >= 3) {
      debounceFn(inputText?.length, 7)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [inputText]);

  return (
    <>
      <MultiSelectUsage />

      <List />
      <MultiStepForm />
      <Counter />
      <ToastComp />
      <TicTacToe />
      <StringTransformers />
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </>
  );
}

export default App;
