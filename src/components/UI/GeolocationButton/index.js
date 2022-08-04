import { LocationMarkerIcon } from "@heroicons/react/outline";

const GeolocationButton = ({ onChangeLocation }) => {
  const successLocation = ({ coords }) => {
    if (typeof onChangeLocation === "function") onChangeLocation(coords);
  };

  const handleError = () => {
    // handle error
  };

  const accessGeolocation = () => {
    if (!navigator.geolocation) handleError();
    else navigator.geolocation.getCurrentPosition(successLocation, handleError);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center text-brand-accent-main"
        onClick={accessGeolocation}
      >
        <LocationMarkerIcon className="w-5 h-5" />
        <span className="hidden md:inline">&nbsp;Use my location</span>
      </button>
    </div>
  );
};

export default GeolocationButton;
