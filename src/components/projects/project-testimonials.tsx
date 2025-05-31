import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  company: string
  avatar: string
  rating: number
  project: string
  results: string
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "LLP Technology Partners transformed our entire business operations. Their AI-powered healthcare platform increased our diagnostic accuracy by 94% and reduced operational costs significantly.",
    author: "Dr. Sarah Johnson",
    position: "Chief Medical Officer",
    company: "Tokyo Medical Center",
    avatar: "/testimonials/sarah-johnson.jpg",
    rating: 5,
    project: "AI Healthcare Platform",
    results: "94% diagnostic accuracy improvement"
  },
  {
    id: "2", 
    quote: "The cloud migration project was executed flawlessly. Zero downtime during transition and 40% reduction in infrastructure costs. Exceptional team and expertise.",
    author: "Hiroshi Tanaka",
    position: "CTO",
    company: "Yamada Manufacturing",
    avatar: "/testimonials/hiroshi-tanaka.jpg",
    rating: 5,
    project: "Cloud Migration",
    results: "40% cost reduction, 99.9% uptime"
  },
  {
    id: "3",
    quote: "Their trading platform handles millions of transactions with microsecond latency. The system reliability and performance exceeded all our expectations.",
    author: "Michael Chen",
    position: "Head of Technology",
    company: "Global Finance Solutions",
    avatar: "/testimonials/michael-chen.jpg",
    rating: 5,
    project: "Trading Platform",
    results: "5ms execution time, 99.99% uptime"
  },
//   {
//     id: "4",
//     quote: "The e-commerce mobile app boosted our conversion rates by 45%. The AR features and personalized recommendations created an amazing user experience.",
//     author: "Lisa Wong",
//     position: "VP of Digital",
//     company: "Retail Innovation Co.",
//     avatar: "/testimonials/lisa-wong.jpg",
//     rating: 5,
//     project: "E-commerce Mobile App",
//     results: "45% conversion improvement"
//   },
//   {
//     id: "5",
//     quote: "Outstanding educational platform that improved student engagement by 73%. The AI-powered personalization is game-changing for online learning.",
//     author: "Professor David Kim",
//     position: "Dean of Technology",
//     company: "Future Learning Institute",
//     avatar: "/testimonials/david-kim.jpg",
//     rating: 5,
//     project: "Learning Platform",
//     results: "73% engagement increase"
//   },
//   {
//     id: "6",
//     quote: "The blockchain supply chain solution provided 100% transparency and reduced fraud by 87%. Perfect execution from start to finish.",
//     author: "Maria Rodriguez",
//     position: "Supply Chain Director",
//     company: "Global Manufacturing Ltd.",
//     avatar: "/testimonials/maria-rodriguez.jpg",
//     rating: 5,
//     project: "Blockchain Supply Chain",
//     results: "87% fraud reduction"
//   }
]

export function ProjectsTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from clients who have experienced the transformative power of our technology solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Project & Results */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      Project: {testimonial.project}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Result: {testimonial.results}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          
          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Trusted by leading companies across Japan and beyond</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos would go here */}
              <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-medium">
                Tokyo Medical
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-medium">
                Yamada Mfg
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-medium">
                Global Finance
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-medium">
                Retail Innovation
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-medium">
                Future Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}