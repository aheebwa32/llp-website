"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Brain, Layers, Settings, Zap } from "lucide-react"
import { LucideIcon } from "lucide-react"

// Define types for better type safety
interface Technology {
  name: string
  level: number
  description: string
  trend: string
}

interface TechCategory {
  icon: LucideIcon
  title: string
  description: string
  color: string
  technologies: Technology[]
}

type TechCategoryKey = 'frontend' | 'backend' | 'cloud' | 'database' | 'ai' | 'mobile'

interface Certification {
  name: string
  color: string
  icon: string
}

export function EnhancedTechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategoryKey>("frontend")

  const techCategories: Record<TechCategoryKey, TechCategory> = {
    frontend: {
      icon: Code,
      title: "Frontend & UI/UX",
      description: "Cutting-edge frontend technologies for exceptional user experiences",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", level: 98, description: "Advanced component architecture", trend: "+5%" },
        { name: "Next.js", level: 95, description: "Full-stack React framework", trend: "+8%" },
        { name: "TypeScript", level: 92, description: "Type-safe development", trend: "+12%" },
        { name: "Tailwind CSS", level: 96, description: "Utility-first styling", trend: "+15%" },
        { name: "Framer Motion", level: 88, description: "Advanced animations", trend: "+20%" },
        { name: "Three.js", level: 85, description: "3D graphics and WebGL", trend: "+25%" },
      ],
    },
    backend: {
      icon: Settings,
      title: "Backend & APIs",
      description: "Scalable server-side solutions and microservices architecture",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: 96, description: "Server-side JavaScript", trend: "+3%" },
        { name: "Python", level: 94, description: "AI/ML and web development", trend: "+7%" },
        { name: "Go", level: 89, description: "High-performance services", trend: "+18%" },
        { name: "GraphQL", level: 91, description: "Modern API design", trend: "+22%" },
        { name: "REST APIs", level: 98, description: "Traditional web services", trend: "Stable" },
        { name: "Microservices", level: 93, description: "Distributed architecture", trend: "+10%" },
      ],
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automation",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "AWS", level: 97, description: "Advanced cloud solutions", trend: "+4%" },
        { name: "Azure", level: 90, description: "Microsoft cloud platform", trend: "+12%" },
        { name: "Kubernetes", level: 92, description: "Container orchestration", trend: "+15%" },
        { name: "Docker", level: 95, description: "Containerization", trend: "+8%" },
        { name: "Terraform", level: 88, description: "Infrastructure as code", trend: "+20%" },
        { name: "CI/CD", level: 94, description: "Automated deployment", trend: "+6%" },
      ],
    },
    database: {
      icon: Database,
      title: "Database & Storage",
      description: "Modern data solutions for performance and scalability",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "PostgreSQL", level: 94, description: "Advanced relational DB", trend: "+5%" },
        { name: "MongoDB", level: 91, description: "Document database", trend: "+8%" },
        { name: "Redis", level: 89, description: "In-memory caching", trend: "+12%" },
        { name: "ElasticSearch", level: 85, description: "Search and analytics", trend: "+18%" },
        { name: "InfluxDB", level: 82, description: "Time-series data", trend: "+25%" },
        { name: "Neo4j", level: 78, description: "Graph database", trend: "+30%" },
      ],
    },
    ai: {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Artificial intelligence and machine learning solutions",
      color: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "TensorFlow", level: 92, description: "Deep learning framework", trend: "+10%" },
        { name: "PyTorch", level: 88, description: "Neural networks", trend: "+15%" },
        { name: "OpenAI APIs", level: 94, description: "Large language models", trend: "+40%" },
        { name: "Scikit-learn", level: 90, description: "Machine learning library", trend: "+8%" },
        { name: "Computer Vision", level: 85, description: "Image processing", trend: "+20%" },
        { name: "NLP", level: 89, description: "Natural language processing", trend: "+25%" },
      ],
    },
    mobile: {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform and native mobile applications",
      color: "from-teal-500 to-cyan-500",
      technologies: [
        { name: "React Native", level: 93, description: "Cross-platform development", trend: "+12%" },
        { name: "Flutter", level: 87, description: "Google's UI toolkit", trend: "+25%" },
        { name: "Swift", level: 85, description: "Native iOS development", trend: "+5%" },
        { name: "Kotlin", level: 83, description: "Native Android development", trend: "+8%" },
        { name: "Expo", level: 90, description: "React Native platform", trend: "+15%" },
        { name: "Progressive Web Apps", level: 91, description: "Web-based mobile apps", trend: "+18%" },
      ],
    },
  }

  const categories: TechCategoryKey[] = Object.keys(techCategories) as TechCategoryKey[]
  const currentCategory = techCategories[activeCategory]

  const certifications: Certification[] = [
    { name: "AWS Advanced Consulting Partner", color: "from-orange-500 to-yellow-500", icon: "🏆" },
    { name: "Microsoft Gold Partner", color: "from-blue-500 to-cyan-500", icon: "🥇" },
    { name: "Google Cloud Partner", color: "from-green-500 to-emerald-500", icon: "⭐" },
    { name: "ISO 27001 Certified", color: "from-purple-500 to-pink-500", icon: "🛡️" },
    { name: "SOC 2 Type II", color: "from-red-500 to-orange-500", icon: "🔒" },
    { name: "PCI DSS Compliant", color: "from-indigo-500 to-purple-500", icon: "💳" },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              <Layers className="w-4 h-4 mr-2" />
              Technology Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and frameworks to build scalable, secure, and
              high-performance solutions that drive business transformation and deliver exceptional results.
            </p>
          </motion.div>

          {/* Enhanced Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const categoryData = techCategories[category]
              const IconComponent = categoryData.icon
              const isActive = activeCategory === category

              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg scale-105`
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md border border-gray-200"
                  }`}
                  whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{categoryData.title}</span>
                  <span className="sm:hidden capitalize">{category}</span>
                  {isActive && <Zap className="w-4 h-4" />}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Enhanced Technology Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${currentCategory.color} text-white p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                      <currentCategory.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{currentCategory.title}</h3>
                      <p className="text-white/90 text-lg">{currentCategory.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCategory.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {tech.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-blue-600">{tech.level}%</span>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                tech.trend.includes('+')
                                  ? 'text-green-600 border-green-200'
                                  : 'text-blue-600 border-blue-200'
                              }`}
                            >
                              {tech.trend}
                            </Badge>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                          <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${currentCategory.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technology Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-8 pt-8 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {currentCategory.technologies.length}
                        </div>
                        <div className="text-sm text-blue-700">Technologies</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {Math.round(currentCategory.technologies.reduce((acc, tech) => acc + tech.level, 0) / currentCategory.technologies.length)}%
                        </div>
                        <div className="text-sm text-green-700">Avg Expertise</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {currentCategory.technologies.filter(tech => tech.level >= 90).length}
                        </div>
                        <div className="text-sm text-purple-700">Expert Level</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {currentCategory.technologies.filter(tech => tech.trend.includes('+')).length}
                        </div>
                        <div className="text-sm text-orange-700">Growing</div>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Certifications & Partnerships
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our expertise is validated by industry-leading certifications and strategic partnerships
                with major technology providers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`p-4 bg-gradient-to-r ${cert.color} text-white rounded-xl font-medium shadow-lg text-center group cursor-pointer`}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {cert.icon}
                  </div>
                  <div className="text-sm leading-tight">{cert.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Evolution Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Continuous Technology Evolution
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                We continuously evaluate and adopt emerging technologies to ensure our solutions
                remain at the forefront of innovation. Our team dedicates 20% of their time to
                research and development of new technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "WebAssembly", "Edge Computing", "Quantum Computing", "AR/VR",
                  "Blockchain", "IoT", "5G", "Serverless", "JAMstack", "Web3"
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
