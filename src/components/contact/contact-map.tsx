"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Train, Car } from "lucide-react"

const transportationInfo = [
  {
    icon: Train,
    method: "Train",
    details: [
      "JR Yurakucho Station - 5 min walk",
      "Tokyo Metro Ginza Station - 8 min walk",
      "Tokyo Metro Hibiya Station - 6 min walk"
    ]
  },
  {
    icon: Car,
    method: "Car",
    details: [
      "Parking available in nearby buildings",
      "Tokyo Station - 10 min drive",
      "Haneda Airport - 30 min drive"
    ]
  }
]

export function ContactMap() {
  const [activeTransport, setActiveTransport] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Tokyo's business district, our office is easily accessible 
              by multiple transportation methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                {/* Placeholder for interactive map */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">LLP Technology Partners</h3>
                    <p className="text-gray-600 mb-4">2-1-1 Yurakucho, Chiyoda City<br />Tokyo 100-0006, Japan</p>
                    <Button asChild>
                      <a 
                        href="https://maps.google.com/search/2-1-1+Yurakucho+Chiyoda+Tokyo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </Card>

            {/* Transportation Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">How to Reach Us</h3>
                  
                  <div className="space-y-4">
                    {transportationInfo.map((transport, index) => {
                      const IconComponent = transport.icon
                      return (
                        <div 
                          key={index}
                          className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            activeTransport === index 
                              ? 'border-purple-500 bg-purple-50' 
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                          onClick={() => setActiveTransport(index)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              activeTransport === index ? 'bg-purple-600' : 'bg-gray-100'
                            }`}>
                              <IconComponent className={`w-5 h-5 ${
                                activeTransport === index ? 'text-white' : 'text-gray-600'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{transport.method}</h4>
                              <ul className="space-y-1">
                                {transport.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Office Building Information</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Building:</strong> Yurakucho Business Tower</p>
                    <p><strong>Floor:</strong> 15F</p>
                    <p><strong>Reception:</strong> Available Mon-Fri 9:00-18:00</p>
                    <p><strong>Parking:</strong> Available (reservation required)</p>
                    <p><strong>Accessibility:</strong> Wheelchair accessible</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <p className="text-sm text-purple-700 font-medium">
                      💡 Pro tip: Register as a visitor in advance for faster check-in process.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}