import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import arrow from "../../../assets/icons/blue-arrow.svg";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import { chartConfig, chartData, chartTotal } from "../constants";

const TaskOverview = () => {
  return (
    <Card>
      <CardHeader className="flex items-center flex-row justify-between">
        <CardTitle className="text-lg">My Tasks Overview</CardTitle>
        <span className="text-[#2F75F6] hover:text-[#1447E6] flex items-center gap-2 text-sm">
          <span className="border-b border-[#2F75F6] hover:border-[#1447E6] cursor-pointer">
            View all projects
          </span>
          <img src={arrow} alt="view-button" className="w-5 h-5" />
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-3 flex-1 max-w-xs">
            {chartTotal.map((item, index) => (
              <div
                className="flex items-center justify-between gap-3"
                key={index}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-sm"
                    style={{ backgroundColor: item.fill }}
                  />
                  <p>{item.statusName}</p>
                </div>
                <span className="font-bold">{item.statusVal}</span>
              </div>
            ))}
          </div>

          <ChartContainer
            config={chartConfig}
            className="aspect-square max-h-50 flex-1 self-start"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie data={chartData} dataKey="statusVal" nameKey="statusName" />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskOverview;
