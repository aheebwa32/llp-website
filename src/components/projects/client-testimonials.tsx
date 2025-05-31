import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface ClientTestimonialProps {
  testimonial: {
    quote: string
    author: string
    position: string
    company: string
    avatar?: string
  }
  variant?: "compact" | "detailed"
}

export function ClientTestimonial({ testimonial, variant = "compact" }: ClientTestimonialProps) {
  if (variant === "compact") {
    return (
      <div className="p-4 bg-blue-50 rounded-lg">
        <blockquote className="text-sm italic text-blue-800 mb-3">
          <Quote className="w-4 h-4 inline mr-1" />"{testimonial.quote}"
        </blockquote>
        <div className="text-xs text-blue-600">
          — {testimonial.author}, {testimonial.position} at {testimonial.company}
        </div>
      </div>
    )
  }

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
      <CardContent className="p-8">
        <Quote className="w-12 h-12 text-blue-400 mb-4" />
        <blockquote className="text-lg italic text-gray-800 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
        <div className="flex items-center gap-4">
          <Image
            src={testimonial.avatar || "/placeholder.svg?height=60&width=60"}
            alt={testimonial.author}
            width={60}
            height={60}
            className="w-15 h-15 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900">{testimonial.author}</div>
            <div className="text-blue-600">{testimonial.position}</div>
            <div className="text-gray-600">{testimonial.company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
