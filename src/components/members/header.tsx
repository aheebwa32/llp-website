import { Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MemberCompaniesHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
          <Building2 className="w-4 h-4 mr-2" />
          Specialized Technology Companies
        </Badge>

        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Our Member Companies</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Four industry-leading technology companies united under one partnership, each bringing deep specialization and
          proven expertise to deliver comprehensive digital solutions.
        </p>
      </div>
    </div>
  )
}
