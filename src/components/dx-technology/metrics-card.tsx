import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

interface MetricCardProps {
  icon: LucideIcon
  title: string
  value: number
  suffix?: string
  prefix?: string
  description: string
  color: string
  details?: string
  decimals?: number
}

export function MetricCard({
  icon: Icon,
  title,
  value,
  suffix = "",
  prefix = "",
  description,
  color,
  details,
  decimals = 0,
}: MetricCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${color}`} />
      <CardContent className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-lg bg-gradient-to-r ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
            <div className="text-3xl font-bold">
              <AnimatedCounter end={value} suffix={suffix} prefix={prefix} duration={2.5} decimals={decimals} />
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {details && <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">{details}</div>}
      </CardContent>
    </Card>
  )
}
