export const Throttle = (fn, timer) => {
  let isThrottled = false;

  return function (...args) {
    return new Promise((resolve, reject) => {
      if (isThrottled) return reject("Throttled");

      isThrottled = true;
      resolve(fn(...args));

      setTimeout(() => {
        console.log("now throttle can run");
        isThrottled = false;
      }, timer);
    });
  };
};

export const debounce = (fn, timer) => {
  let timerRef;

  return function (...args) {
    return new Promise((resolve, reject) => {
      clearTimeout(timerRef);

      timerRef = setTimeout(() => {
        resolve(fn(...args));
      }, timer);
    });
  };
};

export const validationPatterns = {
  name: /^[a-zA-Z ]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  zip: /^[0-9]{5}(?:-[0-9]{4})?$/,
  phone: /^\+?[1-9]\d{1,14}$/,
};
