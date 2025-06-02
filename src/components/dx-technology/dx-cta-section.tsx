"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MessageCircle, Phone, Mail, CheckCircle, Zap, Shield, Award } from "lucide-react"
import Link from "next/link"

export function DXCTASection() {
  const benefits = [
    { icon: Zap, text: "Free technical consultation" },
    { icon: Shield, text: "No-risk project assessment" },
    { icon: Award, text: "Guaranteed project delivery" },
    { icon: CheckCircle, text: "24/7 ongoing support" },
  ]

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      action: "Schedule Now",
      href: "/contact?type=consultation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Start a Chat",
      description: "Get instant answers to your questions",
      action: "Chat Now",
      href: "/contact?type=chat",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Tell us about your project requirements",
      action: "Send Message",
      href: "/contact?type=message",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-500/20 to-transparent rounded-full"
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </Badge>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Extraordinary
              </span>{" "}
              Together
            </h2>

            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Join 150+ successful companies that have transformed their business with our cutting-edge technology
              solutions. Start your digital transformation journey today.
            </p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                >
                  <benefit.icon className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>

                    <p className="text-blue-200 mb-6">{method.description}</p>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${method.color} hover:scale-105 transition-transform duration-200`}
                    >
                      <Link href={method.href}>
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Need Urgent Technical Support?</h3>
                </div>

                <p className="text-blue-200 mb-6">
                  Our technical team is available 24/7 for emergency support and critical issues.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    <a href="tel:+81-3-1234-5678">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: +81-3-1234-5678
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                  >
                    <a href="mailto:emergency@llp-tech-partners.com">
                      <Mail className="w-4 h-4 mr-2" />
                      emergency@llp-tech-partners.com
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
