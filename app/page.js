import Image from "next/image";
import First from "@/components/First";
import Second from "@/components/Second";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12">
          <div className="bg-gray-900 hidden md:block lg:block md:col-span-2 md:overflow-hidden">
            <First />
          </div>
          <div className="bg-gray-100 col-span-12 bg-body block w-100 md:col-span-10">
            <Second />
          </div>
        </div>
      </div>
    </>
  );
}
