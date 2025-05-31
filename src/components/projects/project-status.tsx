import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar } from "lucide-react"

interface ProjectStatusProps {
  status: "completed" | "in-progress" | "planning"
  className?: string
}

export function ProjectStatus({ status, className = "" }: ProjectStatusProps) {
  const statusConfig = {
    completed: {
      label: "Completed",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200",
    },
    "in-progress": {
      label: "In Progress",
      icon: Clock,
      className: "bg-blue-100 text-blue-800 border-blue-200",
    },
    planning: {
      label: "Planning",
      icon: Calendar,
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
  }

  const config = statusConfig[status]
  const IconComponent = config.icon

  return (
    <Badge variant="outline" className={`${config.className} ${className}`}>
      <IconComponent className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  )
}
