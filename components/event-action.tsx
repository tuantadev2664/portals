"use client";

import { Button } from "@heroui/button";
import React from "react";
import { GridIcon, ListIcon, PlusIcon } from "./icons";

export default function EventAction() {
  return (
    <div className="flex items-center justify-center space-x-[10px]">
      <Button
        endContent={<PlusIcon />}
        className="text-white bg-primary dark:bg-[#FFFFFF26]"
      >
        Submit Event
      </Button>
      <div className="flex items-center justify-center bg-[#FFFFFF] p-1 rounded-[10px] shadow-md dark:shadow-none dark:bg-black">
        <Button
          isIconOnly
          className="!w-[30px] !h-[30px] p-0 !min-w-0 bg-[#66D2A1] border-1 border-[#BEF2DA]"
          radius="sm"
        >
          <ListIcon />
        </Button>
        <Button
          isIconOnly
          className="!w-[30px] !h-[30px] p-0 !min-w-0  dark:bg-[#252526] bg-[#F8F8F8] border-1 dark:border-[#3C3C3C] border-[#F5F5F5] ml-2"
          radius="sm"
        >
          <GridIcon />
        </Button>
      </div>
    </div>
  );
}
