"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function CareersHero() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-8 bg-blue-100 text-blue-800 border-blue-200">
            <Users className="w-4 h-4 mr-2" />
            Join Our Growing Team of 440+ Professionals
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Shape the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join Japan's most innovative technology partnership where your expertise drives transformation across
            industries. Work with cutting-edge technologies alongside world-class professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
                // Smooth scroll to the open positions section
                document.querySelector('#open-positions')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              onClick={() => router.push('/about')}
            >
              <Building2 className="w-5 h-5 mr-2" />
              <span>Learn About Our Culture</span>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">440+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Member Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Open Positions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
