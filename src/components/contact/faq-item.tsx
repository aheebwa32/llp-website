"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <CardContent className="p-0">
        <button
          className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </div>
        </button>

        {isOpen && (
          <div className="px-6 pb-6">
            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
