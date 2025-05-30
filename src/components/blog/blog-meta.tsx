import { CalendarDays, Clock } from "lucide-react"

interface BlogMetaProps {
  publishedAt: string
  readTime: string
  className?: string
}

export function BlogMeta({ publishedAt, readTime, className = "" }: BlogMetaProps) {
  return (
    <div className={`flex items-center gap-4 text-sm text-gray-500 ${className}`}>
      <div className="flex items-center gap-1">
        <CalendarDays className="h-4 w-4" />
        <span>{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>{readTime}</span>
      </div>
    </div>
  )
}
