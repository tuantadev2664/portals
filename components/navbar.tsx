"use client";

import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import React from "react";
import { Avatar, AvatarGroup, Button, Divider } from "@heroui/react";
import { DarkModeIcon, BellIcon } from "./icons";
import { useTheme } from "next-themes";

export default function Navbar() {
  const avatarColor = ["#FF4CAC", "#7054FE", "#4193FE", "#32BB70"];
  const avatarNames = ["J", "A", "H", "F"];

  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className=" relative bg-[#111111CC] rounded-2xl p-[6px] m-auto mt-5">
      <div className="absolute top-0 left-0 bg-gradient-to-r to-[#91F16F] from-[#8F8F8F00] opacity-20 rounded-2xl w-2/3 h-full"></div>
      <div className="z-10 flex justify-between min-w-[688px]">
        <div className="flex gap-[14px]">
          <div className="bg-[#202020] w-9 h-9 flex items-center justify-center rounded-[14px]">
            <Image
              src="./portal-logo.svg"
              width={28}
              height={24.5}
              alt="Logo"
              className="object-cover"
            />
          </div>
          <Link href="/" className="text-[#FFFFFF] font-medium text-sm">
            Back to Dashboard
          </Link>
          <AvatarGroup
            size="sm"
            radius="sm"
            max={4}
            total={7}
            className="flex gap-1"
            renderCount={(count) => (
              <div className="w-8 h-8 rounded-md bg-[#232323] text-white/70 text-sm flex items-center justify-center -ml-3 z-50">
                <p className="opacity-60">{`${count - 4}+`}</p>
              </div>
            )}
          >
            {avatarNames.map((name, index) => (
              <Avatar
                key={name}
                name={name}
                alt={`Avatar ${name}`}
                classNames={{
                  base: `bg-[${avatarColor[index]}] text-white`,
                }}
              />
            ))}
          </AvatarGroup>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={() => onChange()}
            className="p-2 rounded-xl bg-[#202020]"
          >
            <DarkModeIcon />
          </div>
          <div className="w-[10px] h-0 border-1 rotate-90 opacity-60 border-[#FFFFFF]"></div>
          <div className="p-2 rounded-xl bg-[#202020]">
            <BellIcon />
          </div>
          <Avatar
            name="H"
            radius="sm"
            size="sm"
            alt="User Avatar"
            classNames={{
              base: "bg-[#4193FE] text-white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
