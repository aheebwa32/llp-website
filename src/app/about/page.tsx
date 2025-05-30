import Image from "next/image"
import { Building2, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AboutHero } from "@/components/about/about-hero"
import { PhilosophyValues } from "@/components/about/philosophy-values"
import { TeamLeadership } from "@/components/about/team-leadership"
import { TrustBuilding } from "@/components/about/trust-building"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      

      <PhilosophyValues />
      {/* Our Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work Together</h2>
            <p className="text-xl text-gray-600">Our collaborative structure enables seamless project delivery</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Teams</h3>
              <p className="text-gray-600">
                Cross-functional teams from multiple member companies work together on each project
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shared Resources</h3>
              <p className="text-gray-600">
                Access to combined expertise, tools, and infrastructure across all member companies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality standards maintained through peer review and collective accountability
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamLeadership />
      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Message from Leadership</h2>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <Image
                      src="/CEO.jpeg?height=300&width=250"
                      alt=""
                      width={250}
                      height={300}
                      className="rounded-lg mx-auto"
                    />
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-semibold">Haru Mitoma</h3>
                      <p className="text-gray-600">Managing Partner</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <blockquote className="text-sm text-gray-700 leading-relaxed italic">
                      "In today's rapidly evolving digital landscape, no single company can possess all the expertise
                      needed to deliver comprehensive solutions. Our LLP model allows us to combine the best of each
                      member company's capabilities, creating value that exceeds the sum of our parts.
                      <br />
                      <br />
                      We are committed to building lasting relationships with our clients, based on trust, transparency,
                      and measurable results. Together, we are not just adapting to the future – we are creating it."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TrustBuilding />
      {/* Key Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that demonstrate our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2019</div>
              <div className="text-gray-600">LLP Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Member Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* <OptimizationBenefits /> */}
      {/* <CollaborativeProcess /> */}
      <AboutCTA />
    </div>
  )
}
