"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogCard } from "./blog-card"
import { CategoryFilter } from "./category-filter"
import { blogCategories, getBlogPostsByCategory } from "@/lib/data/blog"

export function EnhancedBlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(6)

  const filteredPosts = getBlogPostsByCategory(selectedCategory)
  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisiblePosts(6) // Reset visible posts when category changes
  }

  return (
    <>
      <CategoryFilter categories={blogCategories} onCategoryChange={handleCategoryChange} defaultCategory="All" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0 && selectedCategory === "All"} />
            ))}
          </div>

          {hasMorePosts && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={handleLoadMore}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                Load More Articles
              </Button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
