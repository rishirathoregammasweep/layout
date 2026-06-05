"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", positive: 180, negative: 40 },
  { month: "February", positive: 240, negative: 60 },
  { month: "March", positive: 220, negative: 75 },
  { month: "April", positive: 300, negative: 55 },
  { month: "May", positive: 360, negative: 80 },
  { month: "June", positive: 320, negative: 70 },
  { month: "July", positive: 280, negative: 95 },
  { month: "August", positive: 390, negative: 65 },
  { month: "September", positive: 310, negative: 120 },
  { month: "October", positive: 340, negative: 90 },
  { month: "November", positive: 260, negative: 110 },
  { month: "December", positive: 370, negative: 85 },
]

const chartConfig = {
  positive: {
    label: "Positive Reviews",
    color: "var(--chart-1)",
  },
  negative: {
    label: "Negative Reviews",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const ChartAreaGradient = () => {
  return (
    <Item variant="muted">
      <ItemContent>
        <div className="p-4 space-y-1">
          <ItemTitle className="font-semibold text-lg">Reviews</ItemTitle>
          <ItemDescription className="text-sm text-muted-foreground ">
            See how your reviews perform across requests, hits, errors, and response times. Switch between daily, weekly, or monthly views to spot trends fast.
          </ItemDescription>
        </div>
      </ItemContent>

      <ChartContainer className="h-[400px] w-full" config={chartConfig}>
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
            tickMargin={12}
            minTickGap={32}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            dataKey="positive"
            type="linear"
            dot={{ r: 4 }}
            fill="var(--color-positive)"
            fillOpacity={0.3}
            stroke="var(--color-positive)"
            strokeWidth={2}
          />

          <Area
            dataKey="negative"
            type='linear'
            dot={{ r: 4 }}
            fill="var(--color-negative)"
            fillOpacity={0.3}
            stroke="var(--color-negative)"
            strokeWidth={2}
          />
          <ChartLegend className="float-right" content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
      <ItemContent>
      </ItemContent>
    </Item>
  )
}

export default ChartAreaGradient