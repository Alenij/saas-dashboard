import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import arrow from "../../../assets/icons/blue-arrow.svg";
import { Progress } from "@/components/ui/progress";

const PROGRESS_DATA = [
  { id: 1, name: "Project Management Portal", value: 25 },
  { id: 2, name: "Paly - Payment App", value: 10 },
  { id: 3, name: "VIP Cars", value: 43 },
  { id: 2, name: "Sona - Crypto Website", value: 78 },
];

const ProjectsOverview = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Projects Overview</CardTitle>
        <span className="text-[#2F75F6] hover:text-[#1447E6] flex items-center gap-2 text-sm">
          <span className="border-b border-[#2F75F6] hover:border-[#1447E6] cursor-pointer cursor-pointer">
            View all projects
          </span>
          <img src={arrow} alt="view-button" className="w-5 h-5" />
        </span>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {PROGRESS_DATA.map((item) => (
          <div key={item.id}>
            <p className="text-base font-semibold mb-1">{item.name}</p>
            <p className="text-xs">
              <span className="font-extrabold">{item.value}%</span> completed
            </p>
            <Progress value={item.value} className="mt-1" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsOverview;
