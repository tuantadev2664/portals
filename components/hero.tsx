// import Image from "next/image";
import React from "react";
import { Image } from "@heroui/image";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";

export default function Hero() {
  return (
    // <div className="h-64 bg-gradient-to-tr from-blue-700 to-blue-700"></div>
    <div className="relative flex items-center justify-center w-full">
      <div className="w-full overflow-hidden rounded-[20px]">
        <Image
          src="./hero.png"
          alt="Placeholder"
          height={250}
          className="object-cover origin-top-right scale-[1.4] min-w-[1300px]"
        />
      </div>
      {/* <div className="h-64 bg-gradient-to-tr from-[#020024] via-[#0011ff] to-[#00eaff] rounded-lg"></div> */}
      <div className="absolute z-10 top-40 left-17">
        <div className="relative">
          <Image
            src="./portal.png"
            alt="Brand logo"
            width={100}
            height={100}
            className="shadow-lg rounded-[20px] border-4 border-[#EBEBFD3D]"
          />
          {/* chấm thông báo (tùy chọn) */}
          <span
            className="absolute z-20 w-6 h-6 bg-red-500 rounded-full -bottom-1 -right-1"
            aria-hidden="true"
          />
        </div>
        {/* <Badge
          color="danger"
          content=""
          placement="bottom-right"
          shape="circle"
        >
          <Avatar
            isBordered
            radius="md"
            size="lg"
            src="./portal.png"
            alt="Avatar"
          />
        </Badge> */}
      </div>
    </div>
  );
}
