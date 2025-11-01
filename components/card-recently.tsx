import { Avatar, Card, CardFooter, CardHeader, Image } from "@heroui/react";
import React from "react";

export default function CardRecently({
  isLive,
  timeAgo,
}: {
  isLive: boolean;
  timeAgo: string;
}) {
  return (
    <div className="relative isolate">
      <div className="w-[180px] h-[120px] rounded-xl absolute ml-2 -z-10 -top-2 bg-[#E7E7E7] -rotate-3"></div>
      <Card radius="lg">
        <Image
          src="./card-image.png"
          height={200}
          alt="Card Image"
          className="z-0 object-cover"
          width={200}
        />
        <CardHeader className="absolute z-10">
          <div className="flex items-center justify-between w-full gap-2">
            {isLive && <div className="bg-[#FF5B5B] rounded-sm w-3 h-3"></div>}
            <div className="flex items-center justify-center gap-2">
              {[...Array(2)].map((_, index) => (
                <Avatar
                  key={index}
                  src="./av3.jpg"
                  alt={`Avatar ${index + 1}`}
                  className="w-[18px] h-[18px] rounded-[6px]"
                />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardFooter className="absolute z-10 flex flex-col items-start gap-1 -bottom-1">
          <h3 className="font-medium text-white text-[18px] line-clamp-2">
            How we plan the beautiful trip in Bali ABC
          </h3>
          <span className="font-normal text-[12px] text-[#FFFFFF4D]">
            Update {timeAgo} ago
          </span>
          <Avatar size="sm" radius="sm" src="./av1.jpg" alt="Avatar 1" />
        </CardFooter>
      </Card>
    </div>
  );
}
