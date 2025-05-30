import { Badge } from "@/components/ui/badge"

interface NewsTypeBadgeProps {
  type: "press-release" | "company-update" | "partnership" | "achievement" | "event" | "announcement"
  size?: "sm" | "md" | "lg"
}

const typeIcons = {
  "press-release": "📰",
  "company-update": "🏢",
  partnership: "🤝",
  achievement: "🏆",
  event: "📅",
  announcement: "📢",
}

const typeColors = {
  "press-release": "bg-blue-100 text-blue-800",
  "company-update": "bg-green-100 text-green-800",
  partnership: "bg-purple-100 text-purple-800",
  achievement: "bg-yellow-100 text-yellow-800",
  event: "bg-pink-100 text-pink-800",
  announcement: "bg-indigo-100 text-indigo-800",
}

export function NewsTypeBadge({ type, size = "md" }: NewsTypeBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  }

  return (
    <Badge className={`${typeColors[type]} border-0 ${sizeClasses[size]}`}>
      <span className="mr-1">{typeIcons[type]}</span>
      {type.replace("-", " ").toUpperCase()}
    </Badge>
  )
}
