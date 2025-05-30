"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { NewsCard } from "./news-card"
import { EnhancedNewsFilter } from "./news-filter"
import { getNewsByType, newsItems } from "@/lib/data/news"

export function EnhancedNewsGrid() {
  const [filteredItems, setFilteredItems] = useState(newsItems)
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeFilter, setActiveFilter] = useState({ type: "all", query: "" })

  const handleFilterChange = useCallback((type: string, query: string) => {
    setActiveFilter({ type, query })

    let items = getNewsByType(type)

    if (query) {
      const searchTerms = query.toLowerCase().split(" ")
      items = items.filter((item) => {
        const searchText = `${item.title} ${item.excerpt} ${item.tags.join(" ")} ${item.company || ""}`.toLowerCase()
        return searchTerms.every((term) => searchText.includes(term))
      })
    }

    setFilteredItems(items)
    setVisibleCount(9)
  }, [])

  const featuredNews = filteredItems.filter((item) => item.priority === "high").slice(0, 3) // Show up to 3 featured
  const regularNews = filteredItems.filter((item) => item.priority !== "high")

  const visibleRegularNews = regularNews.slice(0, visibleCount - featuredNews.length)
  const hasMore = filteredItems.length > visibleCount

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9)
  }

  return (
    <>
      <EnhancedNewsFilter onFilterChange={handleFilterChange} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">No news found</h3>
              <p className="text-gray-500 mb-6 text-sm">
                No news items match your current filter criteria. Try adjusting your search or filter.
              </p>
              <Button variant="outline" size="sm" onClick={() => handleFilterChange("all", "")}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              {/* Featured News - Alternating Layout */}
              {featuredNews.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured News</h2>
                  <div className="space-y-8">
                    {featuredNews.map((item, index) => (
                      <NewsCard 
                        key={item.id} 
                        item={item} 
                        featured={true} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular News Grid - Compact Cards */}
              {visibleRegularNews.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Latest Updates</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {visibleRegularNews.map((item, index) => (
                      <NewsCard 
                        key={item.id} 
                        item={item} 
                        compact={true} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}

              {hasMore && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    className="px-6 py-2 text-sm hover:bg-purple-50 hover:border-purple-300 transition-colors"
                  >
                    Load More News
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
