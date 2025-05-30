"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
              <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].position}</div>
              <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
