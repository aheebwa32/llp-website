import { Calendar, Users, Clock, DollarSign } from "lucide-react"

interface ProjectMetaProps {
  duration: string
  teamSize: number
  startDate: string
  endDate?: string
  budget?: string
  className?: string
}

export function ProjectMeta({ duration, teamSize, startDate, endDate, budget, className = "" }: ProjectMetaProps) {
  return (
    <div className={`flex flex-wrap gap-4 text-sm text-gray-600 ${className}`}>
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4" />
        <span>{teamSize} team members</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{new Date(startDate).toLocaleDateString()}</span>
      </div>
      {budget && (
        <div className="flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          <span>{budget}</span>
        </div>
      )}
    </div>
  )
}
