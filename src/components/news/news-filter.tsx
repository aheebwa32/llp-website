"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { newsTypes } from "@/lib/data/news"

interface EnhancedNewsFilterProps {
  onFilterChange: (type: string, query: string) => void
  defaultType?: string
}

export function EnhancedNewsFilter({ onFilterChange, defaultType = "all" }: EnhancedNewsFilterProps) {
  const [selectedType, setSelectedType] = useState(defaultType)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    onFilterChange(selectedType, searchQuery)
  }, [selectedType, searchQuery, onFilterChange])

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search news and updates..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {newsTypes.map((type) => (
              <Badge
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap hover:scale-105 ${
                  selectedType === type.value
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-sm"
                }`}
                onClick={() => handleTypeChange(type.value)}
              >
                {type.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
