import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Smartphone } from "lucide-react"

interface TechnologyStackProps {
  technologies: string[]
  limit?: number
  showIcons?: boolean
}

const techIcons: Record<string, any> = {
  React: Code,
  "Next.js": Code,
  Python: Code,
  "Node.js": Code,
  PostgreSQL: Database,
  MongoDB: Database,
  AWS: Cloud,
  Azure: Cloud,
  "React Native": Smartphone,
}

export function TechnologyStack({ technologies, limit, showIcons = false }: TechnologyStackProps) {
  const displayedTechs = limit ? technologies.slice(0, limit) : technologies
  const remainingCount = limit ? technologies.length - limit : 0

  return (
    <div className="flex flex-wrap gap-2">
      {displayedTechs.map((tech, index) => {
        const IconComponent = showIcons ? techIcons[tech] : null
        return (
          <Badge key={index} variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
            {IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
            {tech}
          </Badge>
        )
      })}
      {remainingCount > 0 && (
        <Badge variant="outline" className="text-xs text-gray-500">
          +{remainingCount} more
        </Badge>
      )}
    </div>
  )
}
