import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CareersCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Take the next step in your career and become part of Japan's most innovative technology partnership. Your
          expertise can help shape the future of digital transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#open-positions">
              <span>Browse Open Positions</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Submit Your Resume
          </Button>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Have Questions?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:careers@llp-tech-partners.com" className="hover:text-white transition-colors">
                careers@llp-tech-partners.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+81-3-1234-5678" className="hover:text-white transition-colors">
                +81-3-1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
