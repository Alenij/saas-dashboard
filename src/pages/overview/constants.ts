import type { ChartConfig } from "@/components/ui/chart";

export const chartData = [
  { statusName: "To-Do", statusVal: 2, fill: "#2F75F6" },
  { statusName: "In Progress", statusVal: 3, fill: "#E5B633" },
  { statusName: "Completed", statusVal: 4, fill: "#01BC6E" },
  { statusName: "Overdue", statusVal: 1, fill: "#F25C5C" },
];
export const chartTotal = [
  { statusName: "Total Taks Assigned", statusVal: 10, fill: "#414141" },
  { statusName: "To-Do", statusVal: 2, fill: "#2F75F6" },
  { statusName: "In Progress", statusVal: 3, fill: "#E5B633" },
  { statusName: "Completed", statusVal: 4, fill: "#01BC6E" },
  { statusName: "Overdue", statusVal: 1, fill: "#F25C5C" },
];

export const chartConfig = {
  toal: {
    label: "Total Taks Assigned",
  },
  todo: {
    label: "To-Do",
    color: "#2F75F6",
  },
  progress: {
    label: "In Progress",
    color: "#E5B633",
  },
  completed: {
    label: "Completed",
    color: "#01BC6E",
  },
  overdue: {
    label: "Overdue",
    color: "#F25C5C",
  },
} satisfies ChartConfig;
