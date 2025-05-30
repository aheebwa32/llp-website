import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join 200+ companies that have already experienced the power of our collaborative approach to digital
          transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/members">
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
