import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import type { Company } from "@/lib/data/companies"

interface CaseStudiesProps {
  company: Company
}

export function CaseStudies({ company }: CaseStudiesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped organizations achieve their goals.
          </p>
        </div>

        <div className="space-y-16">
          {company.caseStudies.map((study, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden">
              <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-3">
                      {study.industry}
                    </Badge>
                    <CardTitle className="text-2xl lg:text-3xl mb-3">{study.title}</CardTitle>
                    <p className="text-blue-600 font-medium">Client: {study.client}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Results:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="group">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
