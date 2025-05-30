"use client"
import { useState } from "react"
import { Shield, CheckCircle, Award, Lock, Users, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const trustStrategies = [
  {
    icon: Shield,
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest progress reporting throughout every project",
    metrics: "Weekly status reports, 24/7 client portal access",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "200+ successful projects with documented case studies and measurable business outcomes",
    metrics: "99.9% project success rate, 95% on-time delivery",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Industry-leading security practices and compliance with international standards",
    metrics: "ISO 27001, SOC 2 Type II, GDPR compliant",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Assigned project managers and 24/7 technical support for all enterprise clients",
    metrics: "< 2 hour response time, 99.5% satisfaction",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Consistent on-time delivery with quality assurance and post-launch support",
    metrics: "95% on-time delivery, 6-month warranty",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Multi-stage review process with peer validation across member companies",
    metrics: "Zero critical bugs in production, 99.99% uptime",
  },
]

export function TrustBuilding() {
  const [showAll, setShowAll] = useState(false)
  
  const visibleStrategies = showAll ? trustStrategies : trustStrategies.slice(0, 3)
  
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Building Trust Through Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to transparency, security, and reliability has earned the trust of 200+ enterprise clients
            worldwide
          </p>
        </div>

        {/* Trust Strategies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {visibleStrategies.map((strategy, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <strategy.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{strategy.title}</CardTitle>
                <CardDescription className="text-gray-600">{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-800">{strategy.metrics}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* View More/Less Button */}
        <div className="text-center mb-16">
          <Button 
            onClick={toggleShowAll}
            variant="outline"
            className="bg-white border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                View Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                View More
              </>
            )}
          </Button>
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <blockquote className="text-xl lg:text-2xl font-medium italic mb-6">
            "The level of transparency and professionalism demonstrated by this LLP partnership is unmatched. They've
            become an integral part of our technology strategy."
          </blockquote>
          <div className="font-semibold">Hiroshi Tanaka</div>
          <div className="opacity-90">CTO, Global Manufacturing Corp</div>
        </div>
      </div>
    </section>
  )
}

