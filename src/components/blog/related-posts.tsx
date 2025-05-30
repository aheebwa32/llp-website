import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/lib/data/blog"

interface RelatedPostsProps {
  posts: BlogPost[]
  title?: string
}

export function RelatedPosts({ posts, title = "Related Articles" }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} showExcerpt={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
