import type React from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
  className?: string
}

export function InfoCard({ icon: Icon, title, children, className = "" }: InfoCardProps) {
  return (
    <Card className={`border-0 shadow-md ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-purple-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
