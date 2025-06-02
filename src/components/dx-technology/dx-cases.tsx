"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye, Code, Zap, Shield, TrendingUp, Filter, Star, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsData, projectCategories } from "@/lib/data/projects"

export function EnhancedDXCases() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projectsData.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory,
  )

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

  const categoryIcons = {
    "ai-ml": Code,
    "web-development": Code,
    "mobile-apps": Zap,
    "cloud-solutions": Shield,
    "digital-transformation": TrendingUp,
    "enterprise-software": Users,
  }

  return (
    <section id="dx-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">
              <Eye className="w-4 h-4 mr-2" />
              Digital Experience Cases
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transformative Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of innovative digital experiences that have transformed businesses and delighted
              users across various industries.
            </p>
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`flex items-center gap-2 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              <Filter className="w-4 h-4" />
              All Projects
              <Badge variant="secondary" className="ml-1 bg-white/20 text-white">
                {projectsData.length}
              </Badge>
            </Button>
            {projectCategories.slice(1).map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code
              const count = projectsData.filter((p) => p.category === category).length
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      : "hover:bg-blue-50 hover:border-blue-300"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  <Badge
                    variant="secondary"
                    className={`ml-1 ${selectedCategory === category ? "bg-white/20 text-white" : "bg-gray-100"}`}
                  >
                    {count}
                  </Badge>
                </Button>
              )
            })}
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-bold">Featured Projects</h3>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Spotlight
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <AnimatePresence>
                  {featuredProjects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      className="group"
                    >
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                        {/* Project Image */}
                        <div className="relative overflow-hidden h-64">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Overlay Information */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: hoveredProject === project.id ? 1 : 0,
                              y: hoveredProject === project.id ? 0 : 20,
                            }}
                            className="absolute bottom-4 left-4 right-4"
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                              <div className="grid grid-cols-3 gap-4 text-center">
                                {project.results.slice(0, 3).map((result, idx) => (
                                  <div key={idx}>
                                    <div className="text-lg font-bold text-gray-900">{result.value}</div>
                                    <div className="text-xs text-gray-600">{result.metric}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                              {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Badge>
                          </div>

                          {/* Featured Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">{project.longDescription}</p>

                          {/* Project Details */}
                          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
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
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 5).map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
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

                          {/* Client Testimonial */}
                          {project.clientTestimonial && (
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                              <blockquote className="text-sm italic text-blue-800 mb-2">
                                "{project.clientTestimonial.quote}"
                              </blockquote>
                              <div className="text-xs text-blue-600 font-medium">
                                — {project.clientTestimonial.author}, {project.clientTestimonial.position}
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            {project.caseStudyUrl && (
                              <Button asChild className="flex-1">
                                <Link href={project.caseStudyUrl}>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Case Study
                                </Link>
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button asChild variant="outline" className="flex-1">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Regular Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                            {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                          {/* Quick Stats */}
                          <div className="flex justify-between text-xs text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {project.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {project.teamSize}
                            </span>
                          </div>

                          {/* Key Result */}
                          {project.results.length > 0 && (
                            <div className="mb-4 p-3 bg-green-50 rounded-lg">
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-600">{project.results[0].value}</div>
                                <div className="text-xs text-green-700">{project.results[0].metric}</div>
                              </div>
                            </div>
                          )}

                          {/* Technologies - Limited */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
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
                              <Link href={project.caseStudyUrl}>View Case Study</Link>
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
                              <Link href={`/projects/${project.id}`}>Learn More</Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Explore Our Complete Portfolio</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover more innovative solutions and success stories in our comprehensive project portfolio. See how
                we can transform your business with cutting-edge technology.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
