
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Ready to transform your business with cutting-edge technology solutions? Connect with Japan's most 
            innovative technology partnership for consultation, collaboration, or partnership opportunities.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Call Us</div>
              <div className="text-gray-600 text-sm">+81-3-6273-4000</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                <Mail className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Email Us</div>
              <div className="text-gray-600 text-sm">info@llp-tech-partners.com</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Visit Us</div>
              <div className="text-gray-600 text-sm">Tokyo, Japan</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Business Hours</div>
              <div className="text-gray-600 text-sm">Mon-Fri 9AM-6PM JST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}