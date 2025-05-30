"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

interface CategoryFilterProps {
  categories: string[]
  onCategoryChange?: (category: string) => void
  defaultCategory?: string
}

export function CategoryFilter({ categories, onCategoryChange, defaultCategory = "All" }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                  : "text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-md"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
