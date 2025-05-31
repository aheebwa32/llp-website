import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MessageCircle, FileText, Zap } from "lucide-react"
import Link from "next/link"

export function ProjectsCTA() {
  const ctaOptions = [
    {
      icon: MessageCircle,
      title: "Discuss Your Project",
      description: "Schedule a free consultation to explore how we can help transform your business",
      action: "Book Consultation",
      href: "/contact",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Get Project Proposal",
      description: "Receive a detailed proposal and timeline for your specific requirements",
      action: "Request Proposal",
      href: "/contact?type=proposal",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "See our solutions in action with a personalized demo session",
      action: "Book Demo",
      href: "/contact?type=demo",
      color: "green"
    }
  ]

  const benefits = [
    "Free initial consultation",
    "Custom solution design",
    "Transparent pricing",
    "Dedicated project manager",
    "24/7 support included",
    "Proven track record"
  ]

  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700", 
    green: "bg-green-600 hover:bg-green-700"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              <Zap className="w-4 h-4 mr-2" />
              Ready to Start?
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge technology solutions. 
              Our expert team is ready to bring your vision to life with proven methodologies and innovative approaches.
            </p>
          </div>

          {/* CTA Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${
                      option.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      option.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <Button 
                      asChild 
                      size="lg" 
                      className={`w-full ${colorClasses[option.color as keyof typeof colorClasses]} transition-all duration-300`}
                    >
                      <Link href={option.href}>
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Benefits & Process */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Benefits */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose LLP Technology Partners?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Our Simple Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Discovery & Planning</h4>
                      <p className="text-gray-600 text-sm">We understand your needs and create a detailed project roadmap</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Design & Development</h4>
                      <p className="text-gray-600 text-sm">Our expert team builds your solution using best practices</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Launch & Support</h4>
                      <p className="text-gray-600 text-sm">We deploy your solution and provide ongoing support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Urgent Technical Support?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our emergency response team is available 24/7 for critical issues. 
              Get immediate assistance from our expert technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact?type=emergency">
                  Emergency Support
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a href="tel:+81-3-6273-4000">
                  Call Now: +81-3-6273-4000
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-2">
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM JST
            </p>
            <p className="mb-2">
              <strong>Email:</strong> <a href="mailto:projects@llp-tech-partners.com" className="text-blue-600 hover:underline">projects@llp-tech-partners.com</a>
            </p>
            <p>
              <strong>Location:</strong> 2-1-1 Yurakucho, Chiyoda City, Tokyo 100-0006, Japan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}