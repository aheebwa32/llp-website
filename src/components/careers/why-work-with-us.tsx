import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, Award, Globe, Lightbulb, Heart } from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "Work with the latest AI, cloud, and emerging technologies that shape the future of business.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Join cross-functional teams from multiple companies, expanding your network and expertise.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Access to training, certifications, and mentorship programs to accelerate your career.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  // {
  //   icon: Globe,
  //   title: "Global Impact",
  //   description: "Work on projects that transform industries and make a positive difference worldwide.",
  //   color: "text-red-600",
  //   bgColor: "bg-red-100",
  // },
  // {
  //   icon: Lightbulb,
  //   title: "Innovation Culture",
  //   description: "Encouraged to experiment, innovate, and contribute to breakthrough solutions.",
  //   color: "text-yellow-600",
  //   bgColor: "bg-yellow-100",
  // },
  // {
  //   icon: Heart,
  //   title: "Work-Life Balance",
  //   description: "Flexible working arrangements and comprehensive wellness programs for your well-being.",
  //   color: "text-pink-600",
  //   bgColor: "bg-pink-100",
  // },
]

export function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Partnership?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the unique advantages of working within Japan's most innovative technology partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${reason.color}`} />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
