import React from "react";
import EventItem from "./event-item";

interface EventProps {
  status: string;
  eventType: string[];
  time: string;
}

interface EventSectionProps {
  date: string;
  day: string;
  events: EventProps[];
}

const EventSection: React.FC<EventSectionProps> = ({ date, day, events }) => {
  return (
    <div className="flex space-x-5">
      <div className="min-w-[103px]">
        <h3 className="font-medium text-[16px]">{date}</h3>
        <span className="text-[14px] font-normal opacity-75">{day}</span>
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
