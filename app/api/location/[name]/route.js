import { getLocationByName } from "../location-utils";

export async function GET(request, { params }) {
  const data = await getLocationByName(params.name);

  return Response.json(data);
}
