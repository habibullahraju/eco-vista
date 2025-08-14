import Image from "next/image";
import Link from "next/link";
import image from "../public/network.gif";

export default function NoLocationInfo() {
  return (
    <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div class="card flex flex-col items-center justify-center text-center p-6">
        <h6 class="feature-name mb-4">No Location Found</h6>
        <div class="feature-main flex flex-col items-center">
          <Image
            width={50}
            height={50}
            class="max-w-20 opacity-70"
            src={image}
            alt="no location icon"
          />
          <h3 class="feature-title  text-gray-500 mt-4">—</h3>
          <span class="feature-name pt-6 text-gray-400">
            Please search for a location
          </span>
          <Link href="/" className="border rounded-md  px-4 py-1">
            Click for your Location
          </Link>
        </div>
      </div>
    </div>
  );
}
