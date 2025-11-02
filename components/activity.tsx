"use client";

import React from "react";
import { Avatar, Badge } from "@heroui/react";
import { RocketIcon } from "./icons";

export default function Activity() {
  return (
    <div className="flex items-center justify-center gap-3 px-5 py-2">
      <Badge
        color="success"
        content={<RocketIcon />}
        placement="bottom-right"
        classNames={{
          badge:
            "!w-[14px] !h-[14px] !min-w-[14px] !p-0 !min-h-[14px] flex items-center justify-center border-[0.88px]",
        }}
      >
        <Avatar size="md" radius="sm" src="./av3.jpg" />
      </Badge>
      <p className="font-normal text-[16px]">
        Amalia awarded badge during event
        <span className="text-[#00000066] dark:text-[#FFFFFF66]"> 10 mins</span>
      </p>
    </div>
  );
}
