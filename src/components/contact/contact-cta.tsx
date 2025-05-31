import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Lightbulb, Globe } from "lucide-react"

const ctaOptions = [
  {
    icon: Users,
    title: "Join Our Network",
    description: "Become a member and access collaborative innovation opportunities",
    action: "Learn About Membership",
    href: "/members",
    color: "purple"
  },
  {
    icon: Lightbulb,
    title: "Explore Innovations",
    description: "Discover cutting-edge technologies from our member companies",
    action: "View Our Blog",
    href: "/blog",
    color: "pink"
  },
  {
    icon: Globe,
    title: "Career Opportunities",
    description: "Join our team or explore positions at member companies",
    action: "View Open Positions",
    href: "/career",
    color: "purple"
  }
]

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Explore the possibilities of technology partnership and innovation collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      option.color === 'purple' ? 'bg-purple-500/20' : 'bg-pink-500/20'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        option.color === 'purple' ? 'text-purple-300' : 'text-pink-300'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                    <p className="text-purple-100 mb-6 leading-relaxed">{option.description}</p>
                    <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white hover:text-purple-600 group-hover:border-white">
                      <Link href={option.href} className="flex items-center gap-2">
                        {option.action}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Card className="border-0 bg-white/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Build the Future Together
                </h3>
                <p className="text-purple-100 mb-6">
                  Whether you're looking for partnership opportunities, technical collaboration, 
                  or simply want to learn more about our innovative ecosystem, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100">
                    <Link href="#contact-form">
                      Schedule a Meeting
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
                    <Link href="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}