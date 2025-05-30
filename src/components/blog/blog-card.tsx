import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AuthorCard } from "./author-card"
import { BlogMeta } from "./blog-meta"
import type { BlogPost } from "@/lib/data/blog"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  showExcerpt?: boolean
}

export function BlogCard({ post, featured = false, showExcerpt = true }: BlogCardProps) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.featuredImage || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={featured ? 400 : 300}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? "h-64" : "h-48"
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-3">
        <BlogMeta publishedAt={post.publishedAt} readTime={post.readTime} className="mb-3" />

        <h3
          className={`font-bold leading-tight group-hover:text-blue-600 transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          <Link href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent>
        {showExcerpt && <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>}

        <div className="flex items-center justify-between mb-4">
          <AuthorCard author={post.author} size="sm" />

          <Button variant="ghost" size="sm" asChild>
            <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 2 && (
            <Badge variant="outline" className="text-xs text-gray-500">
              +{post.tags.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
