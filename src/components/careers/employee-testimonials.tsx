"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { employeeTestimonials } from "@/lib/data/careers"

export function EmployeeTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % employeeTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Team Says</h2>
          <p className="text-xl text-gray-600">Hear from the people who make our partnership extraordinary</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-50" />

              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium italic leading-relaxed mb-6">
                  "{employeeTestimonials[currentTestimonial].quote}"
                </blockquote>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900 text-lg">{employeeTestimonials[currentTestimonial].name}</div>
                <div className="text-blue-600 font-medium">{employeeTestimonials[currentTestimonial].position}</div>
                <div className="text-gray-600">
                  {employeeTestimonials[currentTestimonial].company} • {employeeTestimonials[currentTestimonial].tenure}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {employeeTestimonials.map((_, index) => (
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

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {employeeTestimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{testimonial.shortQuote}"</p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
