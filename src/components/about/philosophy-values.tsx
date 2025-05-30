import { Target, Handshake, Globe, Lightbulb, Shield, Users } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Mission-Driven Excellence",
    description: "To accelerate digital transformation through collaborative innovation and trusted partnerships",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Handshake,
    title: "Trust & Transparency",
    description: "Building long-term relationships based on honesty, reliability, and mutual respect",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating solutions that make a positive difference in communities worldwide",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Maintaining the highest standards of data protection and regulatory compliance",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  
]

export function PhilosophyValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Philosophy & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in the power of collaboration, innovation, and trust to create lasting value for our clients and
            society
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
