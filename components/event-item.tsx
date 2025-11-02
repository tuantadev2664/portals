import React from "react";
import { Image } from "@heroui/image";
import { DotsIcon, UserIcon, VideoIcon } from "./icons";
import { Avatar, AvatarGroup } from "@heroui/avatar";

interface EventProps {
  status: string;
  eventType: string[];
  time: string;
}

export default function EventItem({ status, eventType, time }: EventProps) {
  return (
    <div className="flex items-start justify-center h-6/12">
      <div className="relative h-full min-w-4">
        <div
          className={`mb-1 flex flex-col items-start before:content-[''] before:absolute before:mt-2.5 after:mt-2.5 after:content-[''] before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:border-l-2 before:border-dashed dark:before:border-[#3E3E3E] before:border-[#D7D7D7] before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 
        ${
          status === "live"
            ? "after:bg-[#FC3131] dark:after:bg-[#FF9090] dark:after:border-[#B85858] after:border-[#ECC4BF]"
            : "after:bg-[#989898] dark:after:bg-[#FFFFFF] dark:after:border-[#363636] after:border-gray-300"
        } group-last:before:hidden sm:flex-row sm:before:left-1 sm:before:ml-1 sm:after:left-1 sm:after:ml-1`}
        ></div>
      </div>
      <div className="p-4 ml-10 dark:bg-[#111111] border-1 dark:border-[#1F1F1F] border-[#F5F5F5] rounded-lg flex gap-4">
        <Image
          src="./event.png"
          height={103}
          width={103}
          className="object-cover"
        />
        <div className="space-y-2 min-w-[500px]">
          <div className="space-y-0.5">
            <div className="flex gap-[10px] justify-start items-center">
              <h4 className="text-xs font-medium">{time}</h4>
              {status === "live" && (
                <div className="h-6 dark:border-1 dark:border-[#891B1B00] dark:bg-[#F2272729] bg-[#FFEEEC] px-2 py-1 space-x-1 rounded-lg flex items-center justify-center">
                  <div className="relative w-[12px] h-[12px] dark:border-[0.75px] rounded-full dark:bg-[#FFA1A133] bg-[#FFD1CC] dark:border-[#B85858] flex items-center justify-center">
                    <div className="h-[6px] w-[6px] rounded-full dark:bg-[#FF9090] dark:shadow-lg dark:shadow-[#FF6060] bg-[#FC3131]"></div>
                  </div>
                  <span className="dark:text-[#FFFFFF4D] text-[#330C0C] text-xs dark:font-normal font-medium">
                    Now
                  </span>
                </div>
              )}

              {eventType.includes("inPerson") && (
                <div className="h-6 dark:border-1 dark:border-[#2E2E2E] dark:bg-[#36363799] bg-[#8969FA1F] px-2 py-1 space-x-1 rounded-lg flex items-center justify-center">
                  <UserIcon />
                  <span className="dark:text-[#FFFFFF4D] text-[#131131] text-xs font-normal">
                    In-person
                  </span>
                </div>
              )}

              {eventType.includes("virtual") && (
                <div className="h-6 dark:border-1 dark:border-[#2E2E2E] dark:bg-[#36363799] bg-[#1ABC721F] px-2 py-1 space-x-1 rounded-lg flex items-center justify-center">
                  <VideoIcon />
                  <span className="dark:text-[#FFFFFF4D] text-[#2C4D35] text-xs font-normal">
                    Virtual
                  </span>
                </div>
              )}
            </div>
            <p className="text-lg font-medium">
              Meeting about fitness after work
            </p>
          </div>

          <p className="text-xs text-[#868687] dark:text-[#9CA3AF] opacity-60 font-normal max-w-[396px] truncate">
            Lorem ipsum is placeholder text commonly used in the graphic, print
            , and publishing industries for previewing layouts and visual
            designs.
          </p>

          <div className="flex items-center justify-start gap-3">
            <div className="flex items-center justify-center gap-[6px]">
              <p className="text-xs font-normal opacity-40">Host: </p>
              <Avatar
                className="w-[18px] h-[18px] border-1 dark:border-[#2B2826] border-white rounded-md"
                src="./av1.jpg"
                alt="Avatar 1"
              />
              <p className="text-xs font-normal">Tom Davis</p>
            </div>
            <div className="flex items-center justify-center gap-[6px]">
              <p className="text-xs font-normal opacity-40">Speakers: </p>
              <div className="flex -space-x-1 pointer-events-none">
                {[...Array(3)].map((_, index) => (
                  <Avatar
                    radius="sm"
                    src={`./av${index + 1}.jpg`}
                    alt={`Avatar ${index + 1}`}
                    className="!w-[18px] !h-[18px] !min-w-0 border-1 dark:border-[#2B2826] border-white rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <DotsIcon />
        </div>
      </div>
    </div>
  );
}
