import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ContactMethodCardProps {
  icon: LucideIcon
  title: string
  details: string[]
  description: string
  action: string
  href: string
  color?: "purple" | "pink" | "blue"
}

export function ContactMethodCard({
  icon: Icon,
  title,
  details,
  description,
  action,
  href,
  color = "purple",
}: ContactMethodCardProps) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  }

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${colorClasses[color]}`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <div className="space-y-1 mb-2">
              {details.map((detail, index) => (
                <p key={index} className="text-gray-700 font-medium">
                  {detail}
                </p>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-3">{description}</p>
            <Button variant="outline" size="sm" asChild className="group-hover:border-purple-300 transition-colors">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {action}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
