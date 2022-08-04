const ErrorPopup = ({ text, title, onClose }) => (
  <div className="absolute top-0 left-0 h-full w-full invisible flex justify-center items-center">
    <div className="w-fit max-w-[40%] rounded-lg border-2 border-brand-accent-gray visible bg-white/[.85] text-center">
      <h2 className="font-bold py-1">{title}</h2>
      <p className="border-y-2 border-brand-accent-gray text-lg leading-tight py-3">
        {text}
      </p>
      <button
        className="w-full py-1 font-bold text-red-500"
        type="button"
        onClick={() => {
          if (typeof onClose === "function") onClose();
        }}
      >
        Close
      </button>
    </div>
  </div>
);

export default ErrorPopup;
