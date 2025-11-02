import Hero from "@/components/hero";
import HeaderOrg from "@/components/header-org";
import Recently from "@/components/recently";
import Event from "@/components/event";
import RecentlyActivity from "@/components/recently-activity";
import TimeLocation from "@/components/time-location";
import CalendarPicker from "@/components/calendar-picker";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />
      <HeaderOrg />
      <div className="flex items-center justify-center mt-16 space-x-5">
        <div className="space-y-8 pl-18">
          <Recently />
          <Event />
        </div>
        <div className="space-y-5 w-[293px]">
          <RecentlyActivity />
          <TimeLocation />
          <CalendarPicker />
        </div>
      </div>
    </section>
  );
}
