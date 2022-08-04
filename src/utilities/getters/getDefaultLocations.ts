import { ILocationShort } from "@interfaces/LocationShort";

const getDefaultLocations = (): ILocationShort[] => {
  const { DEFAULT_LOCATIONS } = process.env;
  if (DEFAULT_LOCATIONS) {
    const defaultLocations = JSON.parse(DEFAULT_LOCATIONS);
    return defaultLocations;
  }
  return [
    {
      name: "Cox Mill",
      region: "North Carolina",
      country: "United States of America",
      url: "cox-mill-north-carolina-united-states-of-america",
    },
    {
      name: "Wallace Crossroads",
      region: "North Carolina",
      country: "United States of America",
      url: "wallace-crossroads-north-carolina-united-states-of-america",
    },
    {
      name: "Poplar Tent",
      region: "North Carolina",
      country: "United States of America",
      url: "poplar-tent-north-carolina-united-states-of-america",
    },
    {
      name: "Roberta Mill",
      region: "North Carolina",
      country: "United States of America",
      url: "roberta-mill-north-carolina-united-states-of-america",
    },
    {
      name: "Harrisburg",
      region: "North Carolina",
      country: "United States of America",
      url: "harrisburg-north-carolina-united-states-of-america",
    },
  ];
};

export default getDefaultLocations;
