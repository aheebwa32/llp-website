import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

interface ProjectResult {
  metric: string
  value: string
  description: string
}

interface ProjectResultsProps {
  results: ProjectResult[]
  variant?: "compact" | "detailed"
}

export function ProjectResults({ results, variant = "compact" }: ProjectResultsProps) {
  if (results.length === 0) return null

  if (variant === "compact") {
    return (
      <div className="p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Key Results
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {results.slice(0, 2).map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-green-600">{result.value}</div>
              <div className="text-sm text-green-700">{result.metric}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {results.map((result, index) => (
        <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{result.value}</div>
            <div className="text-lg font-semibold text-gray-800 mb-1">{result.metric}</div>
            <div className="text-sm text-gray-600">{result.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
