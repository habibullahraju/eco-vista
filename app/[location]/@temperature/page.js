import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComponents from "@/components/TemperatureComponents";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponents lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
