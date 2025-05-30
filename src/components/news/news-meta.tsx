import { CalendarDays, Building2 } from "lucide-react"

interface NewsMetaProps {
  publishedAt: string
  company?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function NewsMeta({ publishedAt, company, className = "", size = "md" }: NewsMetaProps) {
  const sizeClasses = {
    sm: "text-xs gap-2",
    md: "text-sm gap-3",
    lg: "text-base gap-4",
  }

  const iconSize = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]} text-gray-500 ${className}`}>
      <div className="flex items-center gap-1">
        <CalendarDays className={iconSize[size]} />
        <span>
          {size === "lg"
            ? new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : new Date(publishedAt).toLocaleDateString()}
        </span>
      </div>

      {company && (
        <div className="flex items-center gap-1">
          <Building2 className={iconSize[size]} />
          <span className={size === "sm" ? "truncate max-w-[100px]" : ""}>{company}</span>
        </div>
      )}
    </div>
  )
}
