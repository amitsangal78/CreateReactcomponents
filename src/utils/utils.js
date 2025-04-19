export const Throttle = (fn, timer) => {
  let isThrottled = false;

  return function (...args) {
    return new Promise((resolve, reject) => {
      if (isThrottled) return reject("Throttled");

      isThrottled = true;
      resolve(fn(...args));

      setTimeout(() => {
        console.log('now throttle can run')
        isThrottled = false;
      }, timer);
    });
  };
}

export const debounce = (fn, timer) => {
  let timerRef;

  return function (...args) {
    return new Promise((resolve, reject) => {
      clearTimeout(timerRef)

      timerRef = setTimeout(() => {
        resolve(fn(...args))
      }, timer);
    });
  };
}
