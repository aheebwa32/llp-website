import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Company {
  id: string
  name: string
  specialty: string
  logo: string
  description: string
  founded: string
  employees: string
  location: string
  website: string
  featured: boolean
}

interface CompanyGridProps {
  companies: Company[]
}

export function CompanyGrid({ companies }: CompanyGridProps) {
  const featuredCompanies = companies.filter((company) => company.featured)
  const otherCompanies = companies.filter((company) => !company.featured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats Section */}
      <section className="py-16 bg-white rounded-2xl mb-16 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{companies.length}</div>
              <div className="text-gray-600 font-medium">Member Companies</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">600+</div>
              <div className="text-gray-600 font-medium">Combined Employees</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600 font-medium">Specialization Areas</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Cities Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Partners</h2>
          <p className="text-xl text-gray-600">Our core member companies driving innovation</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={80}
                    className="rounded-lg"
                  />
                  <Badge variant="secondary" className="text-xs">
                    {company.specialty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{company.name}</CardTitle>
                <CardDescription className="text-sm line-clamp-3">{company.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>Founded {company.founded}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{company.employees} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>{company.location}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/companies/${getCompanySlug(company.id)}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Companies Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">All Member Companies</h2>
          <p className="text-xl text-gray-600">Complete overview of our partnership network</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={80}
                    className="mx-auto rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{company.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {company.specialty}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{company.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{company.employees}</span>
                    <span>{company.location.split(", ")[0]}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={`/companies/${getCompanySlug(company.id)}`}>Details</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

// Helper function to map company IDs to slugs
function getCompanySlug(companyId: string | number): string {
  const slugMap: Record<string, string> = {
    "1": "techvision-corporation",
    "2": "dataflow-systems",
    "3": "cloudfirst-technologies",
    "4": "securenet-solutions",
    "techvision-corporation": "techvision-corporation",
    "dataflow-systems": "dataflow-systems",
    "cloudfirst-technologies": "cloudfirst-technologies",
    "securenet-solutions": "securenet-solutions",
  }

  return slugMap[companyId.toString()] || companyId.toString()
}
