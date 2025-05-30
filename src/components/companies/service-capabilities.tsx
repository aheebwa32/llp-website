import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import type { Company } from "@/lib/data/companies"

interface ServiceCapabilitiesProps {
  company: Company
}

export function ServiceCapabilities({ company }: ServiceCapabilitiesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Service Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your specific business needs and drive measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {company.services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="lg:flex">
                <div className="lg:w-2/3 p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>

                <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.pricing || "Custom Quote"}</div>
                    <div className="text-gray-600 mb-6">Starting price</div>
                    <Button variant="outline" className="w-full">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
