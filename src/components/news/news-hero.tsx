import { Newspaper, Bell, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function EnhancedNewsHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2">
            <Newspaper className="w-4 h-4 mr-2" />
            Latest Updates & Announcements
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            News & <span className="text-purple-600">Updates</span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Stay informed with the latest news, press releases, and updates from LLP Technology Partners and our member
            companies.
          </p>
        </div>
      </div>
    </section>
  )
}
