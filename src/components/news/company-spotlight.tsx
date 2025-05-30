import Link from "next/link"
import { Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CompanySpotlightProps {
  companyName: string
}

export function CompanySpotlight({ companyName }: CompanySpotlightProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Company Spotlight</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Building2 className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="font-semibold text-lg mb-2">{companyName}</h4>
          <p className="text-sm text-gray-600 mb-4">Member of LLP Technology Partners</p>
          <Button variant="outline" size="sm" asChild>
            <Link href="/members">Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
