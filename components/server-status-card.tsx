import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServerStatusCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
  trend: "up" | "down" | "neutral"
  trendValue: string
}

export default function ServerStatusCard({
  title,
  value,
  icon,
  description,
  trend,
  trendValue,
}: ServerStatusCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
            <div>
              <p className="text-sm font-medium leading-none">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{description}</p>
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <ArrowUp className="h-3 w-3 text-red-500" />
            ) : trend === "down" ? (
              <ArrowDown className="h-3 w-3 text-green-500" />
            ) : null}
            <span className={cn("text-xs font-medium", trend === "up" ? "text-red-500" : "text-green-500")}>
              {trendValue}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
