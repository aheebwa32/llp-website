"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Rocket,
  Star,
  TrendingUp,
  Shield,
  Users
} from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Projects Delivered", value: "500+", icon: CheckCircle },
  { label: "Client Satisfaction", value: "99%", icon: Star },
  { label: "Years Experience", value: "10+", icon: TrendingUp },
  { label: "Team Members", value: "50+", icon: Users },
]

const certifications = [
  { name: "AWS Advanced Partner", icon: "🏆" },
  { name: "Microsoft Gold Partner", icon: "🥇" },
  { name: "Google Cloud Partner", icon: "⭐" },
  { name: "ISO 27001 Certified", icon: "🛡️" },
]

const techHighlights = ["AI & Machine Learning", "Cloud Architecture", "Mobile Development", "Web Applications"]

export function EnhancedDXHero() {
  const [currentTech, setCurrentTech] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techHighlights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Digital Experience & Technology Excellence
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </h1>
                
                {/* Dynamic Tech Highlight */}
                <div className="h-8 flex items-center">
                  <span className="text-xl text-gray-600 mr-3">with cutting-edge</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      {techHighlights[currentTech]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                We create exceptional digital experiences that drive business growth, enhance user 
                engagement, and establish your competitive advantage in the digital landscape.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="#tech-stack">
                    Explore Our Technology
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-blue-200 hover:bg-blue-50 px-8 py-4 rounded-xl"
                >
                  <Link href="#dx-cases">
                    <Play className="mr-2 w-5 h-5" />
                    View Case Studies
                  </Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
                    >
                      <div className="flex justify-center mb-2">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl shadow-lg"
                >
                  <Rocket className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg"
                >
                  <Zap className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl shadow-lg"
                >
                  <Shield className="w-5 h-5" />
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Industry-Leading Expertise
                    </h3>
                    <p className="text-gray-600">
                      Certified partners with the world's leading technology providers
                    </p>
                  </div>

                  {/* Certifications Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-gradient-to-r from-white to-blue-50 rounded-xl border border-blue-100 text-center hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{cert.icon}</div>
                        <div className="text-sm font-medium text-gray-800">{cert.name}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Azure", "AI/ML"].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.5 + index * 0.05 }}
                        >
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl" />
              <div className="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
