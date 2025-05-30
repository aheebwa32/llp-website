"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { openPositions } from "@/lib/data/careers"

export function OpenPositions() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
   const [showAllPositions, setShowAllPositions] = useState<boolean>(false);
   
  const toggleCard = (index: number) => {
     setExpandedCards(prev => 
       prev.includes(index) 
         ? prev.filter(i => i !== index) 
         : [...prev, index]
     );
   };
   
   const isExpanded = (index: number) => expandedCards.includes(index);

  // Display only the first 4 positions if showAllPositions is false
  const displayedPositions = showAllPositions 
    ? openPositions 
    : openPositions.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting opportunities across our member companies and find your perfect role
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {displayedPositions.map((position, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-300 border-0 shadow-md ${isExpanded(index) ? 'shadow-xl' : 'hover:shadow-lg'}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1 group-hover:text-blue-600 transition-colors">
                      {position.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {position.company}
                    </CardDescription>
                  </div>
                  <Badge variant={position.type === "Full-time" ? "default" : "secondary"} className="ml-4">
                    {position.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                {!isExpanded(index) ? (
                  // Collapsed view - show minimal info
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">{position.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-gray-900">{position.salary}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        View More
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Expanded view - show full content
                  <div className="animate-fadeIn">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-900">Key Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-gray-900">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-lg font-bold text-gray-900">{position.salary}</div>
                      <div className="flex space-x-3">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          View Less
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </Button>
                        <Button className="group">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {openPositions.length > 4 && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAllPositions(!showAllPositions)}
            >
              {showAllPositions ? "Show Fewer Positions" : `View All Positions (${openPositions.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
