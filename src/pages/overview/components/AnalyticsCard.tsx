import ProgressChart from "./ProgressChart";
import ProjectsOverview from "./ProjectsOverview";
import TaskOverview from "./TaskOverview";
import TeamWorkload from "./TeamWorkload";

export const AnalyticsCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <ProjectsOverview />
        <TaskOverview />
        <TeamWorkload />
        <ProgressChart />
      </div>
    </>
  );
};
