import Image from "next/image"
import { Building2, Users, Target, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              About Our Organization
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Building Trust Through <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our Limited Liability Partnership represents a unique collaboration of industry-leading companies, united
              by a shared vision of technological excellence and digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is a Limited Liability Partnership?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Limited Liability Partnership (LLP) is a business structure that combines the flexibility of a
                  partnership with the limited liability protection of a corporation. In our case, it allows multiple
                  specialized companies to collaborate while maintaining their individual identities and expertise.
                </p>
                <p>
                  This structure enables us to offer comprehensive solutions by leveraging the unique strengths of each
                  member company, creating synergies that benefit our clients and drive innovation across industries.
                </p>
                
                <p>
                  <strong>Learn more:</strong> For detailed information about LLP structures in Japan, visit the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    METI official website
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/llp.jpeg?height=300&width=400"
                alt="LLP Structure Diagram"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
                <div className="text-gray-600">Member Companies</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">440+</div>
                <div className="text-gray-600">Expert Professionals</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Successful Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
