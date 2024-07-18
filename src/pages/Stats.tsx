"use client"

import { Activity, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"



const chartConfig = {
  data1: {
    label: "data1",
    color: "hsl(var(--chart-1))",
    icon: Activity
  },
  data2: {
    label: "data2",
    color: "hsl(var(--chart-3))",
    icon: Activity
  },
} satisfies ChartConfig

export function Component() {
  
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    (async() => {
      
        setChartData([{ month: "January", data1: 186, data2: 120 },
          { month: "February", data1: 305,  data2: 110},
          { month: "March", data1: 237,  data2: 230},
          { month: "April", data1: 73, data2: 100 },
          { month: "May", data1: 209, data2: 190},
          { month: "June", data1: 214, data2: 90 }] as any);
    })()
  }, [])

  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="data1"
              type="natural"
              fill="var(--color-data1)"
              fillOpacity={0.4}
              stroke="var(--color-data1)"
            />
            <Area
              dataKey="data2"
              type="natural"
              fill="var(--color-data2)"
              fillOpacity={0.4}
              stroke="var(--color-data2)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
