import React from "react";
import EventAction from "./event-action";
import EventSection from "./event-section";

export default function Event() {
  const data = [
    {
      date: "Today",
      day: "Wed, 7 May",
      events: [
        {
          status: "live",
          eventType: ["inPerson", "virtual"],
          time: "11:00 AM - 12:30 PM",
        },
        {
          status: "",
          eventType: ["virtual"],
          time: "14:00 PM - 15:00 PM",
        },
      ],
    },
    {
      date: "8 May 2024",
      day: "Thusday",
      events: [
        {
          status: "",
          eventType: ["virtual"],
          time: "4:00 PM - 5:00 PM",
        },
        {
          status: "",
          eventType: ["virtual"],
          time: "5:00 PM",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Events</h2>
        <EventAction />
      </div>
      <div className="space-y-6">
        {data.map((item) => (
          <EventSection key={item.date} {...item} />
        ))}
      </div>
    </div>
  );
}
