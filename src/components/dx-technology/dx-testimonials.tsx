"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight, Users, Building, Award } from "lucide-react"
import Image from "next/image"

export function DXTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote:
        "LLP Technology Partners transformed our entire digital infrastructure. Their AI-powered healthcare platform increased our diagnostic accuracy by 99.2% and reduced processing time by 60%. The team's expertise and dedication exceeded all our expectations.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer",
      company: "Tokyo Medical Center",
      industry: "Healthcare",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectValue: "$2.5M",
      results: ["99.2% accuracy", "60% faster processing", "40% cost reduction"],
    },
    {
      id: 2,
      quote:
        "The mobile banking application they developed has been a game-changer for our business. With over 500,000 active users and $2.5B in transaction volume, the platform has exceeded all performance expectations. Their security implementation is world-class.",
      author: "Hiroshi Tanaka",
      position: "Digital Innovation Director",
      company: "Japan Digital Bank",
      industry: "Financial Services",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectValue: "$3.2M",
      results: ["500K+ users", "$2.5B transactions", "4.8/5 rating"],
    },
    {
      id: 3,
      quote:
        "Their cloud migration strategy saved us 45% in infrastructure costs while improving our system uptime to 99.9%. The DevOps implementation has made our deployment process 10x faster. Truly exceptional technical expertise.",
      author: "Maria Rodriguez",
      position: "CTO",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectValue: "$1.8M",
      results: ["45% cost savings", "99.9% uptime", "10x faster deployment"],
    },
    {
      id: 4,
      quote:
        "The e-commerce platform they built increased our revenue by 250% in the first year. The AI-powered recommendations and advanced analytics have transformed how we understand our customers. Outstanding work!",
      author: "James Chen",
      position: "CEO",
      company: "TechRetail Solutions",
      industry: "E-commerce",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectValue: "$2.1M",
      results: ["250% revenue increase", "8.5% conversion rate", "2.1s load time"],
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with LLP Technology
              Partners.
            </p>
          </motion.div>

          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-3 gap-8 items-center"
                  >
                    {/* Quote Section */}
                    <div className="lg:col-span-2">
                      <Quote className="w-12 h-12 text-blue-400 mb-6" />
                      <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                        "{currentData.quote}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-6">
                        {[...Array(currentData.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-blue-200 ml-2">({currentData.rating}/5)</span>
                      </div>

                      {/* Results */}
                      <div className="flex flex-wrap gap-3">
                        {currentData.results.map((result, index) => (
                          <Badge key={index} className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Author Section */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block mb-4">
                        <Image
                          src={currentData.image || "/placeholder.svg"}
                          alt={currentData.author}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-1">{currentData.author}</h4>
                      <p className="text-blue-300 mb-2">{currentData.position}</p>
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-200 mb-4">
                        <Building className="w-4 h-4" />
                        <span>{currentData.company}</span>
                      </div>

                      <Badge variant="outline" className="border-white/30 text-white">
                        {currentData.industry}
                      </Badge>

                      <div className="mt-4 p-3 bg-white/5 rounded-lg">
                        <p className="text-sm text-blue-200">Project Value</p>
                        <p className="text-lg font-bold text-white">{currentData.projectValue}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["Tokyo Medical Center", "Japan Digital Bank", "Global Manufacturing Corp", "TechRetail Solutions"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-white/60 font-medium text-center hover:text-white/80 transition-colors duration-200"
                  >
                    {company}
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
