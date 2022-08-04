const TemperatureTag = ({ temperature = 0, className }) => (
  <span className={className}>
    {temperature}
    <span className="text-[smaller]">&#8451;</span>
  </span>
);

export default TemperatureTag;
