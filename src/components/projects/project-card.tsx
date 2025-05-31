import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, TrendingUp, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  industry: string
  technologies: string[]
  image: string
  duration: string
  teamSize: number
  results: {
    metric: string
    value: string
    description: string
  }[]
  clientTestimonial?: {
    quote: string
    author: string
    position: string
    company: string
  }
  features: string[]
  challenges: string[]
  solutions: string[]
  demoUrl?: string
  caseStudyUrl?: string
  featured: boolean
}

interface EnhancedProjectCardProps {
  project: Project
  variant?: "default" | "featured" | "compact" | "list"
}

export function EnhancedProjectCard({ project, variant = "default" }: EnhancedProjectCardProps) {
  const isFeatured = variant === "featured" || project.featured
  const isCompact = variant === "compact"
  const isList = variant === "list"

  // List view variant
  if (isList) {
    return (
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  {project.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.teamSize} team
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {project.industry}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Results for featured projects */}
                  {project.featured && project.results.length > 0 && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex gap-4">
                        {project.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="text-center">
                            <div className="text-lg font-bold text-green-600">{result.value}</div>
                            <div className="text-xs text-green-700">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.caseStudyUrl && (
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.caseStudyUrl}>
                        View Case Study
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {!project.caseStudyUrl && !project.demoUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/projects/${project.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Compact view variant
  if (isCompact) {
    return (
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
              {project.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Badge>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                <Star className="w-3 h-3 mr-1" />
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
              {project.description}
            </p>

            {/* Quick Stats */}
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.teamSize}
              </span>
            </div>

            {/* Technologies - Limited */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs px-2 py-1">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            {project.caseStudyUrl ? (
              <Button asChild size="sm" className="w-full">
                <Link href={project.caseStudyUrl}>
                  View Case Study
                </Link>
              </Button>
            ) : project.demoUrl ? (
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/projects/${project.id}`}>
                  Learn More
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Featured variant (larger cards)
  if (isFeatured) {
    return (
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {project.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <Star className="w-4 h-4 mr-1" />
              Featured
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-3">
          <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {project.longDescription}
          </p>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Project Details */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {project.teamSize} team members
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {project.industry}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 6} more
                </Badge>
              )}
            </div>
          </div>

          {/* Results */}
          {project.results.length > 0 && (
            <div className="mb-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Key Results</h4>
              <div className="grid grid-cols-2 gap-3">
                {project.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{result.value}</div>
                    <div className="text-sm text-green-700">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Testimonial */}
          {project.clientTestimonial && (
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <blockquote className="text-sm italic text-blue-800 mb-2">
                "{project.clientTestimonial.quote}"
              </blockquote>
              <div className="text-xs text-blue-600">
                — {project.clientTestimonial.author}, {project.clientTestimonial.position} at {project.clientTestimonial.company}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.caseStudyUrl && (
              <Button asChild size="sm" className="flex-1">
                <Link href={project.caseStudyUrl}>
                  View Case Study
                </Link>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {!project.caseStudyUrl && !project.demoUrl && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={`/projects/${project.id}`}>
                  Learn More
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {project.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Project Details */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {project.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {project.teamSize} team members
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {project.industry}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.caseStudyUrl && (
            <Button asChild size="sm" className="flex-1">
              <Link href={project.caseStudyUrl}>
                View Case Study
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {!project.caseStudyUrl && !project.demoUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={`/projects/${project.id}`}>
                Learn More
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
