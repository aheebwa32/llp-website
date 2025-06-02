"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Rocket, Target, Users, Zap, ArrowRight, Calendar } from "lucide-react"

export function DXTimeline() {
  const timelineSteps = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      activities: [
        "Stakeholder interviews and requirements gathering",
        "Technical architecture assessment",
        "User experience research and analysis",
        "Project roadmap and timeline definition",
      ],
      deliverables: ["Technical Specification", "Project Roadmap", "Resource Plan"],
    },
    {
      phase: "Design & Prototyping",
      duration: "2-3 weeks",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      activities: [
        "UI/UX design and wireframing",
        "Interactive prototype development",
        "Design system creation",
        "User testing and feedback integration",
      ],
      deliverables: ["Design System", "Interactive Prototype", "User Testing Report"],
    },
    {
      phase: "Development & Integration",
      duration: "8-12 weeks",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      activities: [
        "Agile development with 2-week sprints",
        "Continuous integration and deployment",
        "API development and third-party integrations",
        "Quality assurance and testing",
      ],
      deliverables: ["MVP Release", "API Documentation", "Test Reports"],
    },
    {
      phase: "Testing & Optimization",
      duration: "2-3 weeks",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
      activities: [
        "Comprehensive testing across all platforms",
        "Performance optimization and security audits",
        "User acceptance testing",
        "Bug fixes and final adjustments",
      ],
      deliverables: ["Test Results", "Performance Report", "Security Audit"],
    },
    {
      phase: "Launch & Support",
      duration: "Ongoing",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      activities: [
        "Production deployment and monitoring",
        "User training and documentation",
        "24/7 technical support",
        "Continuous improvement and updates",
      ],
      deliverables: ["Live Application", "User Documentation", "Support Plan"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Development Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Proven Development Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we follow a structured approach that ensures quality, efficiency, and successful
              project delivery every time.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full hidden lg:block" />

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start gap-8">
                    {/* Timeline Icon */}
                    <div className="relative z-10 hidden lg:block">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6 lg:hidden">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}
                            >
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{step.phase}</h3>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{step.duration}</span>
                              </div>
                            </div>
                          </div>

                          <div className="hidden lg:block mb-6">
                            <h3 className="text-2xl font-bold mb-2">{step.phase}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">{step.duration}</span>
                            </div>
                          </div>

                          <div className="grid lg:grid-cols-2 gap-6">
                            {/* Activities */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                              <ul className="space-y-2">
                                {step.activities.map((activity, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-2 text-gray-600"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{activity}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                              <div className="space-y-2">
                                {step.deliverables.map((deliverable, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                  >
                                    <Badge
                                      variant="outline"
                                      className={`bg-gradient-to-r ${step.color} text-white border-0 hover:scale-105 transition-transform duration-200`}
                                    >
                                      {deliverable}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Why Our Process Works</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Predictable Delivery", description: "Clear milestones and timelines", icon: "🎯" },
                    { title: "Quality Assurance", description: "Testing at every stage", icon: "✅" },
                    { title: "Client Collaboration", description: "Regular updates and feedback", icon: "🤝" },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl mb-3">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-blue-200">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
