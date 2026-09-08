import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import arrow from "../../../assets/icons/blue-arrow.svg";

const TeamWorkload = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Team Workload</CardTitle>
        <span className="text-[#2F75F6] hover:text-[#1447E6] flex items-center gap-2 text-sm">
          <span className="border-b border-[#2F75F6] hover:border-[#1447E6] cursor-pointer">
            View all projects
          </span>
          <img src={arrow} alt="view-button" className="w-5 h-5" />
        </span>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default TeamWorkload;
