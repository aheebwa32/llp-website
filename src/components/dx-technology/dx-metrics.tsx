"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, Clock, Shield, Users, Zap, Award, Target, BarChart3, CheckCircle } from "lucide-react"
import { MetricCard } from "./metrics-card"
import { AnimatedCounter } from "./animated-counter"

export function EnhancedDXMetrics() {
  const metricsData = [
    {
      icon: TrendingUp,
      title: "Performance Improvement",
      value: 94,
      suffix: "%",
      description: "Average performance boost across all projects",
      color: "from-green-500 to-emerald-500",
      details: "Page load times, API response rates, and system throughput optimization",
    },
    {
      icon: Clock,
      title: "Time to Market",
      value: 60,
      suffix: "%",
      description: "Faster delivery with our agile methodology",
      color: "from-blue-500 to-cyan-500",
      details: "Reduced development cycles through DevOps and automation practices",
    },
    {
      icon: Shield,
      title: "Security Score",
      value: 99,
      suffix: "%",
      description: "Enterprise-grade security implementation",
      color: "from-purple-500 to-pink-500",
      details: "Zero-trust architecture, end-to-end encryption, and compliance standards",
    },
    {
      icon: Users,
      title: "User Satisfaction",
      value: 96,
      suffix: "%",
      description: "Client satisfaction across all projects",
      color: "from-orange-500 to-red-500",
      details: "Based on post-project surveys and long-term partnership renewals",
    },
    {
      icon: Zap,
      title: "System Uptime",
      value: 99.9,
      suffix: "%",
      description: "Guaranteed availability for mission-critical systems",
      color: "from-yellow-500 to-orange-500",
      details: "SLA-backed uptime with 24/7 monitoring and automated failover",
      decimals: 1,
    },
    {
      icon: Award,
      title: "Project Success Rate",
      value: 98,
      suffix: "%",
      description: "Projects delivered on time and within budget",
      color: "from-indigo-500 to-purple-500",
      details: "Comprehensive project management and quality assurance processes",
    },
  ]

  const achievements = [
    { label: "Projects Completed", value: 150, suffix: "+", icon: Target },
    { label: "Years of Experience", value: 10, suffix: "+", icon: Award },
    { label: "Team Members", value: 50, suffix: "+", icon: Users },
    { label: "Countries Served", value: 8, suffix: "", icon: TrendingUp },
  ]

  const qualityMetrics = [
    { name: "Code Coverage", value: 95, color: "from-green-500 to-emerald-500" },
    { name: "Automated Testing", value: 100, color: "from-blue-500 to-cyan-500" },
    { name: "Performance Optimization", value: 98, color: "from-purple-500 to-pink-500" },
    { name: "Security Compliance", value: 99, color: "from-red-500 to-orange-500" },
  ]

  const securityStandards = [
    "OWASP Security Standards",
    "GDPR Compliance",
    "SOC 2 Type II Certified",
    "ISO 27001 Implementation",
    "End-to-End Encryption",
    "Regular Security Audits",
    "Penetration Testing",
    "Vulnerability Assessments",
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
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 px-4 py-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Performance Metrics
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Proven Results & Technical Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to technical excellence is reflected in measurable results. Here's how we consistently
              deliver value to our clients.
            </p>
          </motion.div>

          {/* Main Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {metricsData.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MetricCard {...metric} />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Our Track Record</h3>
                    <p className="text-blue-200">Numbers that speak to our commitment and expertise</p>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center group"
                      >
                        <div className="flex justify-center mb-3">
                          <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                            <achievement.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          <AnimatedCounter end={achievement.value} suffix={achievement.suffix} duration={2} />
                        </div>
                        <div className="text-blue-200 text-sm">{achievement.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Quality & Security Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Quality Assurance</h3>
                  </div>
                  <div className="space-y-6">
                    {qualityMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 font-medium">{metric.name}</span>
                          <span className="font-semibold text-lg">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-3 bg-gradient-to-r ${metric.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.value}%` }}
                            transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security & Compliance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Security & Compliance</h3>
                  </div>
                  <div className="space-y-4">
                    {securityStandards.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                          {item}
                        </span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
