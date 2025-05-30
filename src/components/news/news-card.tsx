import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NewsTypeBadge } from "./news-type-badge"
import { NewsMeta } from "./news-meta"
import type { NewsItem } from "@/lib/data/news"

interface NewsCardProps {
  item: NewsItem
  featured?: boolean
  compact?: boolean
  showExcerpt?: boolean
  index?: number // Add index prop for alternating layout
}

export function NewsCard({ 
  item, 
  featured = false, 
  compact = false, 
  showExcerpt = true, 
  index = 0 
}: NewsCardProps) {
  
  // For featured cards, create alternating layout
  if (featured) {
    const isEven = index % 2 === 0
    
    return (
      <div className="max-w-6xl mx-auto mb-16">
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
          <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
            {/* Image Section */}
            <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <Image
                src={item.featuredImage || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <NewsTypeBadge type={item.type} size="md" />
                {item.priority === "high" && (
                  <Badge className="bg-red-500 text-white border-0 text-xs px-2 py-1">FEATURED</Badge>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className={`p-8 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="space-y-4">
                <NewsMeta 
                  publishedAt={item.publishedAt} 
                  company={item.company} 
                  size="sm" 
                  className="text-gray-500"
                />
                
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-purple-600 transition-colors">
                  <Link href={`/news/${item.id}`} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>

                {showExcerpt && (
                  <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button size="lg" asChild className="w-fit bg-purple-600 hover:bg-purple-700">
                  <Link href={`/news/${item.id}`} className="flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Compact card for regular news (unchanged)
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden bg-white h-full">
      <div className="relative overflow-hidden">
        <Image
          src={item.featuredImage || "/placeholder.svg"}
          alt={item.title}
          width={400}
          height={200}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <NewsTypeBadge type={item.type} size="sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4 flex flex-col h-[calc(100%-9rem)]">
        <div className="flex-1">
          <NewsMeta publishedAt={item.publishedAt} company={item.company} size="sm" className="mb-2" />
          
          <h3 className="text-sm font-semibold leading-tight mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
            <Link href={`/news/${item.id}`} className="hover:underline">
              {item.title}
            </Link>
          </h3>

          {showExcerpt && compact && (
            <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>
          )}
        </div>

        <div className="space-y-2 mt-auto">
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5">
                {tag}
              </Badge>
            ))}
            {item.tags.length > 2 && (
              <Badge variant="outline" className="text-xs px-1.5 py-0.5 text-gray-500">
                +{item.tags.length - 2}
              </Badge>
            )}
          </div>

          <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-xs justify-start">
            <Link href={`/news/${item.id}`} className="flex items-center gap-1 text-purple-600 hover:text-purple-700">
              Read More
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
