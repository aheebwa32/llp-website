import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, GraduationCap, Home, Shield, Gift, Baby } from "lucide-react"

const benefits = [
  {
    category: "Health & Wellness",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
    items: [
      "Comprehensive health insurance",
      "Mental health support programs",
      "Annual health checkups",
      "Fitness center membership",
    ],
  },
  {
    category: "Professional Development",
    icon: GraduationCap,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    items: [
      "Training budget ¥200,000/year",
      "Conference attendance support",
      "Certification reimbursement",
      "Internal mentorship programs",
    ],
  },
  // {
  //   category: "Work-Life Balance",
  //   icon: Home,
  //   color: "text-green-600",
  //   bgColor: "bg-green-100",
  //   items: ["Flexible working hours", "Remote work options", "Unlimited PTO policy", "Sabbatical leave program"],
  // },
  {
    category: "Financial Benefits",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    items: ["Competitive salary packages", "Performance bonuses", "Stock option programs", "Retirement savings plan"],
  },
  // {
  //   category: "Perks & Lifestyle",
  //   icon: Gift,
  //   color: "text-yellow-600",
  //   bgColor: "bg-yellow-100",
  //   items: ["Free meals and snacks", "Team building events", "Gaming and recreation areas", "Transportation allowance"],
  // },
  // {
  //   category: "Family Support",
  //   icon: Baby,
  //   color: "text-pink-600",
  //   bgColor: "bg-pink-100",
  //   items: ["Parental leave programs", "Childcare support", "Family health coverage", "Education assistance"],
  // },
]

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Benefits Package</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our people with benefits that support your career, health, and personal life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div
                          className={`w-2 h-2 ${benefit.color.replace("text-", "bg-")} rounded-full mr-3 flex-shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
