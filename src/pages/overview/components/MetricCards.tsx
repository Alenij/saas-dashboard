import { Card, CardContent } from "../../../components/ui/card";

type MetricCard = { id: number; name: string; color: string; value: number };

const CARD_DETAILS: MetricCard[] = [
  { id: 1, name: "Active Projects", color: "#1447E6", value: 5 },
  { id: 2, name: "Completed Tasks", color: "#01BC6E", value: 24 },
  { id: 3, name: "Pending Tasks", color: "#E5B633", value: 12 },
  { id: 4, name: "Overdue Tasks", color: "#F25C5C", value: 0 },
];

export const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CARD_DETAILS.map((card) => (
        <Card
          key={card.id}
          className="border-0"
          style={{ backgroundColor: card.color }}
        >
          <CardContent className="flex flex-col items-center justify-center py-3">
            <span className="text-3xl font-bold text-white">{card.value}</span>
            <span className="text-sm text-white">{card.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
