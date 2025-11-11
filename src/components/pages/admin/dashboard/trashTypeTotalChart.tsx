"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { AdminAnalyticData } from "@/types";

interface Props {
  data: AdminAnalyticData["totalSampah"] | undefined;
}

const COLORS = [
  "#2ECC71", // Green
  "#3498DB", // Blue
  "#F39C12", // Orange
  "#E74C3C", // Red
  "#9B59B6", // Purple
  "#1ABC9C", // Teal
];

export default function TrashTypeTotalChart({ data }: Props) {
  const chartData = data?.map((item) => ({
    name: item.type,
    value: parseFloat(item.total.toFixed(2)),
  }));

  return (
    <Card className="hover:border-primary transition-all duration-300 hover:shadow-[0_0_10px_4px_rgba(166,255,0,0.4)]">
      <CardHeader className="border-b pb-4">
        <CardTitle className="text-lg font-semibold">Trash Type Distribution</CardTitle>
        <CardDescription>
          Total waste distribution by type (in kilograms)
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 pt-6 sm:px-6">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
              dataKey="value"
              stroke="none"
            >
              {chartData?.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--muted)",
                borderRadius: "0.5rem",
              }}
              labelStyle={{ color: "var(--muted-foreground)" }}
              itemStyle={{ color: "var(--foreground)" }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
