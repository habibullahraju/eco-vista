export const getLocationData = async (lat, log) => {
  try {
    const response = await fetch(
      `https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${log}&localityLanguage=en`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocationLatLogList = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/location");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocationLatLog = async (locationName) => {
  const response = await fetch(
    `http://localhost:3000/api/location/${locationName}`
  );
  const data = await response.json();

  return data;
};

export const getResolvedLatLong = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getLocationLatLog(location);

  if (locationLatlong.latitude && locationLatlong.longitude) {
    const lat = locationLatlong.latitude;
    const lon = locationLatlong.longitude;

    return { lat, lon };
  }
};
