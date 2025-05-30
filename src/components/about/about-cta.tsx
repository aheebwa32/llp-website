import Link from "next/link"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience the Partnership Advantage?</h2>
          <p className="text-xl opacity-90 mb-12">
            Join 200+ companies that have transformed their business through our collaborative approach to digital
            innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3">Schedule a Consultation</h3>
                <p className="text-white/80 mb-6">
                  Meet with our leadership team to discuss your digital transformation goals
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Book Meeting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-3">Start a Conversation</h3>
                <p className="text-white/80 mb-6">
                  Get in touch to learn more about our member companies and capabilities
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/members">
                <span>Explore Our Companies</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
