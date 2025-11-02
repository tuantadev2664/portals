"use client";

import React from "react";
import CardRecently from "./card-recently";

export default function Recently() {
  const recentlyData = [
    { isLive: true, timeAgo: "43 mins" },
    { isLive: false, timeAgo: "2 days" },
    { isLive: false, timeAgo: "2 weeks" },
    { isLive: true, timeAgo: "a moment" },
  ];
  return (
    <div className="space-y-6">
      <h2 className="flex justify-start text-xl font-medium">
        Recently Updated
      </h2>
      <div className="flex gap-4">
        {recentlyData.map((item, index) => (
          <CardRecently
            key={index}
            isLive={item.isLive}
            timeAgo={item.timeAgo}
          />
        ))}
      </div>
    </div>
  );
}
