const adjustedIntervalFunction = (func: () => void, interval = 1000) => {
  let expected = Date.now() + interval;
  let timeout;

  const step = () => {
    const drift = Date.now() - expected;
    if (drift > interval) expected = Date.now() + interval;
    else expected += interval;
    func();

    timeout = setTimeout(step, Math.max(0, interval - drift));
  };
  timeout = setTimeout(step, interval);
  return {
    stop: () => clearTimeout(timeout),
  };
};

export default adjustedIntervalFunction;
