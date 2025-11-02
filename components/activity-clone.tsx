"use client";

import React from "react";
import { Avatar, Badge } from "@heroui/react";
import { PulsFillIcon } from "./icons";

export default function ActivityClone() {
  return (
    <div className="flex items-center justify-center gap-3 px-5 py-2">
      <Badge
        content={<PulsFillIcon />}
        placement="bottom-right"
        classNames={{
          badge:
            "!w-[14px] !h-[14px] !min-w-[14px] !p-0 !min-h-[14px] rounded-full flex items-center justify-center border-[0.88px] bg-[#F97F4B] overflow-hidden",
        }}
      >
        <Avatar
          name="H"
          size="md"
          radius="sm"
          style={{ backgroundColor: "#5E53F5" }}
          className="text-white"
        />
      </Badge>
      <p className="font-normal text-[16px]">
        Amalia awarded badge during event
        <span className="text-[#00000066] dark:text-[#FFFFFF66]"> 10 mins</span>
      </p>
    </div>
  );
}
