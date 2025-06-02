import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface TechBadgeProps {
  name: string
  icon?: LucideIcon
  color?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "gradient"
}

export function TechBadge({
  name,
  icon: Icon,
  color = "from-blue-500 to-purple-500",
  size = "md",
  variant = "default",
}: TechBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  }

  if (variant === "gradient") {
    return (
      <div
        className={`inline-flex items-center gap-2 bg-gradient-to-r ${color} text-white rounded-lg font-medium ${sizeClasses[size]}`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {name}
      </div>
    )
  }

  return (
    <Badge variant={variant} className={`${sizeClasses[size]} ${Icon ? "flex items-center gap-1" : ""}`}>
      {Icon && <Icon className="w-3 h-3" />}
      {name}
    </Badge>
  )
}
