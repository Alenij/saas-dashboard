import dropIcon from "../../assets/icons/drop-down.svg";
import lang from "../../assets/icons/Lang.svg";
import { AnalyticsCard } from "./components/AnalyticsCard";
import { MetricCards } from "./components/MetricCards";

const Overview = () => {
  const now = new Date();

  const date = now.toLocaleDateString("en", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col w-full pl-6">
      <div className="flex justify-between w-full items-start mb-5">
        <div className="mt-10">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <p className="text-sm text-[#373F50]">
            An overview of what's happening around.
          </p>
        </div>

        <div className="text-[#373F50] text-[10px] flex items-center gap-1 justify-start mt-1">
          <span>India - IST 7:56AM</span>
          <span>•</span>
          <span>{date}</span>
          <div className="mx-2 w-20 h-4 rounded border border-[#B5C5E5] flex items-center justify-start gap-1 text-[10px]">
            <img src={lang} alt={lang} className="w-4 h-4 pl-1" /> English
            <img src={dropIcon} alt={dropIcon} className="w-1 h-1 flex-1" />
          </div>
        </div>
      </div>
      <MetricCards />

      <AnalyticsCard />
    </div>
  );
};

export default Overview;
