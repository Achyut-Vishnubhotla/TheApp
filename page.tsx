import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

interface AppSidebarButton {
  
}


export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 flex justify-start pt-8">
        <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transiion-all">
          <BsTwitter />
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-500"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
