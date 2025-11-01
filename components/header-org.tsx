"use client";

import React from "react";
import NameOrg from "./name-org";
import { InstagramIcon, PinterestIcon, PlusIcon, TiktokIcon } from "./icons";
import { Button } from "@heroui/react";

export default function HeaderOrg() {
  return (
    <div className="flex justify-around w-full px-10 mt-10">
      <NameOrg />
      <div className="flex items-end ">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-5">
            <InstagramIcon size={24} />
            <PinterestIcon size={24} />
            <TiktokIcon size={24} />
          </div>
          <Button
            color="primary"
            endContent={<PlusIcon />}
            className="text-white"
          >
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
}
