import React from "react";
import { ClockIcon } from "./icons";

export default function TimeLocation() {
  return (
    <div className="flex justify-between items-center px-5 py-4 border rounded-2xl dark:border-[#1F1F1F] dark:bg-[#111111] border-[#F5F5F5]">
      <ClockIcon />
      <p className="font-normal text-[16px] opacity-50">
        Time in your location
      </p>
      <p className="font-medium text-[16px]">1:14 PM</p>
    </div>
  );
}
