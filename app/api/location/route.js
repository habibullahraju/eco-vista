import { getLocations } from "./location-utils";

export async function GET() {
    const data = await getLocations();

    return Response.json(data);
}