import { Avatar, AvatarGroup } from "@heroui/avatar";
import React from "react";
import SubNameOrg from "./sub-name-org";

export default function NameOrg() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start gap-4">
        <h1 className="text-[40px] font-medium">Running Club</h1>
        <AvatarGroup className="flex gap-1 ">
          <Avatar size="sm" radius="sm" src="./av1.jpg" alt="Avatar 1" />
          <Avatar size="sm" radius="sm" src="./av2.jpg" alt="Avatar 2" />
          <Avatar size="sm" radius="sm" src="./av3.jpg" alt="Avatar 3" />
        </AvatarGroup>
      </div>
      <SubNameOrg />
    </div>
  );
}
