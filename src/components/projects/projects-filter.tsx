"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { projectCategories, projectIndustries, projectTechnologies } from "@/lib/data/projects"

interface FilterState {
  category: string
  industry: string
  technology: string
  searchTerm: string
}

interface EnhancedProjectsFilterProps {
  onFilterChange: (filters: FilterState) => void
}

const categoryLabels: Record<string, string> = {
  all: "All Projects",
  "ai-ml": "AI & Machine Learning",
  "web-development": "Web Development",
  "mobile-apps": "Mobile Applications",
  "cloud-solutions": "Cloud Solutions",
  "digital-transformation": "Digital Transformation",
  "enterprise-software": "Enterprise Software",
}

const industryLabels: Record<string, string> = {
  all: "All Industries",
  finance: "Finance & Banking",
  healthcare: "Healthcare",
  retail: "Retail & E-commerce",
  manufacturing: "Manufacturing",
  education: "Education",
  government: "Government",
  startup: "Startups",
}

const technologyLabels: Record<string, string> = {
  all: "All Technologies",
  react: "React/Next.js",
  python: "Python",
  nodejs: "Node.js",
  aws: "AWS",
  azure: "Microsoft Azure",
  tensorflow: "TensorFlow",
  blockchain: "Blockchain",
}

export function EnhancedProjectsFilter({ onFilterChange }: EnhancedProjectsFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    industry: "all",
    technology: "all",
    searchTerm: "",
  })

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const resetFilters = {
      category: "all",
      industry: "all",
      technology: "all",
      searchTerm: "",
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <section className="py-12 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Filter Projects</h3>
              <p className="text-gray-600">Find projects that match your interests and requirements</p>
            </div>
            <Button variant="outline" onClick={clearFilters} className="shrink-0 hover:bg-blue-50">
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Categories */}
          <div className="space-y-6">
            {/* Project Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Project Category</label>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <Badge
                    key={category}
                    variant={filters.category === category ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:scale-105 ${
                      filters.category === category
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                        : "text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-md"
                    }`}
                    onClick={() => handleFilterChange("category", category)}
                  >
                    {categoryLabels[category]}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Industry</label>
              <div className="flex flex-wrap gap-2">
                {projectIndustries.map((industry) => (
                  <Badge
                    key={industry}
                    variant={filters.industry === industry ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:scale-105 ${
                      filters.industry === industry
                        ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
                        : "text-gray-600 hover:text-purple-600 hover:border-purple-600 hover:shadow-md"
                    }`}
                    onClick={() => handleFilterChange("industry", industry)}
                  >
                    {industryLabels[industry]}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Technology Stack</label>
              <div className="flex flex-wrap gap-2">
                {projectTechnologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant={filters.technology === tech ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 transition-all duration-200 hover:scale-105 ${
                      filters.technology === tech
                        ? "bg-green-600 text-white hover:bg-green-700 shadow-lg"
                        : "text-gray-600 hover:text-green-600 hover:border-green-600 hover:shadow-md"
                    }`}
                    onClick={() => handleFilterChange("technology", tech)}
                  >
                    {technologyLabels[tech]}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
