import { Building2, Users, Zap } from "lucide-react"
// import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hero } from "@/components/home/hero-section"
// import { StatsSection } from "@/components/home/stats-section"
import { MemberCompaniesPreview } from "@/components/home/member-companies-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CallToAction } from "@/components/home/call-to-action"
import { ValueItem } from "@/components/ui/value-item"

import { values } from "@/lib/data/values"

export default function HomePagePage() {
  return (
      
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

    

      {/* Member Companies Preview */}
      <MemberCompaniesPreview />

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our LLP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine the expertise of multiple specialized companies to deliver comprehensive solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueItem key={index} icon={value.icon} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CallToAction />
      
      {/* footer */}
     
      </div>
      
    
  )
  
}
