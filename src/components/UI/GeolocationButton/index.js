import { useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import ErrorPopup from "@ui/ErrorPopup";

const GeolocationButton = ({ onChangeLocation }) => {
  const [showError, setShowError] = useState(false);

  const closeError = () => setShowError(false);

  const handleError = () => setShowError(true);

  const successLocation = ({ coords }) => {
    if (typeof onChangeLocation === "function") onChangeLocation(coords);
  };

  const accessGeolocation = () => {
    if (!navigator.geolocation) handleError();
    else navigator.geolocation.getCurrentPosition(successLocation, handleError);
  };

  return (
    <>
      <div className="w-fit absolute py-1 px-2 rounded bg-white/75">
        <button
          type="button"
          className="flex items-center text-brand-accent-main"
          onClick={accessGeolocation}
        >
          <LocationMarkerIcon className="w-5 h-5" />
          <span className="hidden md:inline">&nbsp;Use my location</span>
        </button>
      </div>
      {showError && (
        <ErrorPopup
          text="We couldn't access your location :("
          title="Oops..."
          onClose={closeError}
        />
      )}
    </>
  );
};

export default GeolocationButton;
