import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AuthorCardProps {
  author: {
    name: string
    role: string
    company: string
    image: string
  }
  size?: "sm" | "md" | "lg"
  showBio?: boolean
}

export function AuthorCard({ author, size = "md", showBio = false }: AuthorCardProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  if (size === "sm") {
    return (
      <div className="flex items-center gap-3">
        <Image
          src={author.image || "/placeholder.svg"}
          alt={author.name}
          width={32}
          height={32}
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />
        <div>
          <div className="text-sm font-medium text-gray-900">{author.name}</div>
          <div className="text-xs text-gray-500">{author.company}</div>
        </div>
      </div>
    )
  }

  if (size === "lg") {
    return (
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={64}
              height={64}
              className={`${sizeClasses[size]} rounded-full object-cover`}
            />
            <div>
              <div className="font-medium text-lg">{author.name}</div>
              <div className="text-sm text-blue-600 font-medium">{author.role}</div>
              <div className="text-sm text-gray-500">{author.company}</div>
            </div>
          </div>
          {showBio && (
            <p className="text-sm text-gray-600 leading-relaxed">
              Expert in digital transformation with over 10 years of experience helping enterprises leverage
              cutting-edge technology solutions.
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={author.image || "/placeholder.svg"}
        alt={author.name}
        width={48}
        height={48}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
      <div>
        <div className="font-medium text-gray-900">{author.name}</div>
        <div className="text-sm text-blue-600">{author.role}</div>
        <div className="text-sm text-gray-500">{author.company}</div>
      </div>
    </div>
  )
}
