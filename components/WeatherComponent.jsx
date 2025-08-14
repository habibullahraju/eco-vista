import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function WeatherComponent({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          width={200}
          height={200}
          class="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
        />
        <h3 class="feature-title">{main}</h3>
        <span class="feature-name">{description}</span>
      </div>
    </Card>
  );
}
