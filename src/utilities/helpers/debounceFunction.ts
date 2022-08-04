const debounceFunction = (
  func: () => void,
  wait = 1500,
  inmediate?: boolean
) => {
  let timeout;
  function debounce(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!inmediate) func.apply(context, args);
    };
    const callNow = inmediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
  return debounce;
};

export default debounceFunction;
