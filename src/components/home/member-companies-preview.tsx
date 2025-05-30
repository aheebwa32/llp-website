import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { memberCompanies } from "@/lib/data/member-companies"

export function MemberCompaniesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Member Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized technology companies working together to deliver comprehensive digital transformation
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberCompanies.map((company) => (
            <Link
              key={company.id}
              href="/members"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer block"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${company.gradientFrom} ${company.gradientTo} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-bold text-2xl">{company.logo}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{company.shortName}</h3>
              <p className="text-blue-600 font-medium mb-3">{company.specialty}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{company.description}</p>

              <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
            <Link href="/members">View All Companies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
