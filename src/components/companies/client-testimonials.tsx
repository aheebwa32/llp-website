"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { Company } from "@/lib/data/companies"

interface ClientTestimonialsProps {
  company: Company
}

export function ClientTestimonials({ company }: ClientTestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % company.testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + company.testimonials.length) % company.testimonials.length)
  }

  const testimonial = company.testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the organizations we've helped transform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6 opacity-50" />

              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                <div className="text-blue-600 font-medium">{testimonial.position}</div>
                <div className="text-gray-600">{testimonial.company}</div>
                {testimonial.project && (
                  <div className="text-sm text-gray-500 mt-2">Project: {testimonial.project}</div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" onClick={prevTestimonial} className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {company.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" onClick={nextTestimonial} className="flex items-center gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {company.testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">
                  "{testimonial.quote.substring(0, 120)}..."
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
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
