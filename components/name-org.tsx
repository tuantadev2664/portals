import { Avatar, AvatarGroup } from "@heroui/avatar";
import React from "react";
import SubNameOrg from "./sub-name-org";
import { Tooltip } from "@heroui/react";
import { Content } from "next/font/google";

export default function NameOrg() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start gap-4">
        <h1 className="text-[40px] font-medium ">Running Club</h1>
        <AvatarGroup className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <Tooltip
              key={index}
              content={`Member ${index + 1}`}
              showArrow
              classNames={{
                content: ["text-xs"],
              }}
            >
              <Avatar
                size="sm"
                radius="sm"
                src={`./av${index + 1}.jpg`}
                alt={`Avatar ${index + 1}`}
                className="border-1 dark:border-[#2B2826] border-white"
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
      <SubNameOrg />
    </div>
  );
}
