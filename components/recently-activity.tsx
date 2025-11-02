import React from "react";
import Activity from "./activity";
import ActivityClone from "./activity-clone";

export default function RecentlyActivity() {
  return (
    <div className="relative rounded-2xl border font-medium text-md dark:border-[#1F1F1F] border-[#F5F5F5] space-x-4 before:rounded-2xl before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-b before:to-[#FFFFFF] before:from-[#FFFFFF00] dark:before:to-[#000000] dark:before:from-[#00000000]">
      <p className="pt-5 pl-5">Recently-activity</p>
      <div>
        <Activity />
        <ActivityClone />
        {[...Array(2)].map((_, index) => (
          <Activity key={index} />
        ))}
      </div>
    </div>
  );
}
