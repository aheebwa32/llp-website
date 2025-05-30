import type { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ValueItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ValueItem({ icon: Icon, title, description }: ValueItemProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <Icon className="h-12 w-12 text-blue-600 mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
