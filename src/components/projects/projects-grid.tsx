"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedProjectCard } from "./project-card"
import { projectsData } from "@/lib/data/projects"
import { Grid, List, Filter, X, Search } from "lucide-react"

interface FilterState {
  category: string
  industry: string
  technology: string
  searchTerm: string
}

interface EnhancedProjectsGridProps {
  filters: FilterState
}

export function EnhancedProjectsGrid({ filters }: EnhancedProjectsGridProps) {
  const [showAll, setShowAll] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "alphabetical">("newest")

  const filteredProjects = useMemo(() => {
    let filtered = projectsData.filter((project) => {
      // Category filter
      if (filters.category !== "all" && project.category !== filters.category) {
        return false
      }

      // Industry filter
      if (filters.industry !== "all" && project.industry !== filters.industry) {
        return false
      }

      // Technology filter
      if (filters.technology !== "all") {
        const hasMatchingTech = project.technologies.some((tech) =>
          tech.toLowerCase().includes(filters.technology.toLowerCase()),
        )
        if (!hasMatchingTech) return false
      }

      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        const matchesSearch =
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchLower)) ||
          project.industry.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      return true
    })

    // Apply sorting
    switch (sortBy) {
      case "alphabetical":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "popular":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "newest":
      default:
        // Featured projects first, then by order
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        })
        break
    }

    return filtered
  }, [filters, sortBy])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9)
  const hasMoreProjects = filteredProjects.length > 9
  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)

  const clearFilters = () => {
    // This would need to be passed up to parent component
    console.log("Clear filters")
  }

  const hasActiveFilters = filters.category !== "all" || 
                          filters.industry !== "all" || 
                          filters.technology !== "all" || 
                          filters.searchTerm

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Controls */}
          <div className="mb-12">
            {/* Results Summary and View Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {hasActiveFilters
                    ? `Filtered Results (${filteredProjects.length})`
                    : "Our Project Portfolio"}
                </h2>
                <p className="text-lg text-gray-600">
                  {filteredProjects.length === 0
                    ? "No projects match your current criteria. Try refining your search."
                    : `Discover ${displayedProjects.length} of ${filteredProjects.length} innovative solutions`}
                </p>
              </div>

              {/* View Mode and Sort Controls */}
              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex items-center bg-white rounded-lg border p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="newest">Featured First</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <Card className="mb-8 border-blue-200 bg-blue-50/50">
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Filter className="w-4 h-4" />
                      <span className="font-medium">Active Filters:</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {filters.searchTerm && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                          <Search className="w-3 h-3 mr-1" />
                          "{filters.searchTerm}"
                        </Badge>
                      )}
                      {filters.category !== "all" && (
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                          Category: {filters.category.replace("-", " ")}
                        </Badge>
                      )}
                      {filters.industry !== "all" && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                          Industry: {filters.industry}
                        </Badge>
                      )}
                      {filters.technology !== "all" && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                          Tech: {filters.technology}
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="ml-auto text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Projects Display */}
          {filteredProjects.length > 0 ? (
            <>
              {/* Featured Projects Section */}
              {featuredProjects.length > 0 && !hasActiveFilters && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">Featured Projects</h3>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Spotlight
                    </Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {featuredProjects.slice(0, showAll ? featuredProjects.length : 2).map((project) => (
                      <EnhancedProjectCard
                        key={`featured-${project.id}`}
                        project={project}
                        variant="featured"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Projects Grid */}
              <div className="mb-12">
                {!hasActiveFilters && featuredProjects.length > 0 && (
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h3>
                )}
                
                {viewMode === "grid" ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(hasActiveFilters ? displayedProjects : regularProjects.slice(0, showAll ? regularProjects.length : 8)).map((project, index) => (
                      <div
                        key={project.id}
                        className="animate-in fade-in-0 slide-in-from-bottom-4"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <EnhancedProjectCard
                          project={project}
                          variant="compact"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {(hasActiveFilters ? displayedProjects : regularProjects.slice(0, showAll ? regularProjects.length : 8)).map((project, index) => (
                      <div
                        key={project.id}
                        className="animate-in fade-in-0 slide-in-from-left-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <EnhancedProjectCard
                          project={project}
                          variant="list"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Load More Section */}
              {hasMoreProjects && !showAll && (
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold mb-3">Discover More Projects</h4>
                    <p className="text-gray-600 mb-6">
                      Explore our complete portfolio of {filteredProjects.length - (hasActiveFilters ? 9 : 8)} additional innovative solutions
                    </p>
                    <Button
                      onClick={() => setShowAll(true)}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Show All Projects ({filteredProjects.length - (hasActiveFilters ? 9 : 8)} more)
                    </Button>
                  </div>
                </div>
              )}

              {/* Projects Statistics */}
              {/* {!hasActiveFilters && (
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{filteredProjects.length}+</div>
                      <div className="text-gray-600">Total Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">{featuredProjects.length}</div>
                      <div className="text-gray-600">Featured Solutions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                      <div className="text-gray-600">Industries Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              )} */}
            </>
          ) : (
            /* Empty State */
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">No Projects Found</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We couldn't find any projects matching your current search criteria. 
                    Try adjusting your filters or exploring different categories.
                  </p>
                  <div className="space-y-4">
                    <Button
                      onClick={clearFilters}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Clear All Filters
                    </Button>
                    <div className="text-sm text-gray-500">
                      Or try searching for: "AI", "Web Development", "Mobile Apps"
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
