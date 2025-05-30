import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, MapPin, Users, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Company } from "@/lib/data/companies"

interface CompanyHeroProps {
  company: Company
}

export function CompanyHero({ company }: CompanyHeroProps) {
  return (
    <>
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" asChild>
          <Link href="/members">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Member Companies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <Image
          src={company.heroImage || "/placeholder.svg"}
          alt={`${company.name} hero`}
          width={1200}
          height={600}
          className="w-full h-64 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                {company.specialty}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">{company.name}</h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-6">{company.tagline}</p>
              <p className="text-lg opacity-80 mb-8 max-w-2xl">{company.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium">Founded</div>
                <div className="text-gray-600">{company.founded}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium">Team Size</div>
                <div className="text-gray-600">{company.employees}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-gray-600">{company.location}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium">Success Rate</div>
                <div className="text-gray-600">{company.successRate}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
