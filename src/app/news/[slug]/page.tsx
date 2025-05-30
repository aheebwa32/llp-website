import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NewsTypeBadge } from "@/components/news/news-type-badge"
import { NewsMeta } from "@/components/news/news-meta"
import { ShareButton } from "@/components/news/share-button"
import { RelatedNews } from "@/components/news/related-news"
import { CompanySpotlight } from "@/components/news/company-spotlight"
import { getNewsItem, getRecentNews, newsItems } from "@/lib/data/news"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const newsItem = getNewsItem(slug)

  if (!newsItem) {
    return {
      title: "News Article Not Found",
    }
  }

  return {
    title: `${newsItem.title} | LLP Technology Partners News`,
    description: newsItem.seo.metaDescription,
    keywords: newsItem.seo.keywords,
    openGraph: {
      title: newsItem.title,
      description: newsItem.seo.metaDescription,
      type: "article",
      publishedTime: newsItem.publishedAt,
      images: [
        {
          url: newsItem.featuredImage,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: newsItem.title,
      description: newsItem.seo.metaDescription,
      images: [newsItem.featuredImage],
    },
  }
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.id,
  }))
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const newsItem = getNewsItem(slug)

  if (!newsItem) {
    notFound()
  }

  const recentNews = getRecentNews(4)
    .filter((item) => item.id !== newsItem.id)
    .slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: newsItem.title,
    description: newsItem.seo.metaDescription,
    image: newsItem.featuredImage,
    datePublished: newsItem.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      logo: {
        "@type": "ImageObject",
        url: "https://llp-tech-partners.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://llp-tech-partners.com/news/${newsItem.id}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="hover:bg-blue-50">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <NewsTypeBadge type={newsItem.type} size="lg" />
                {newsItem.priority === "high" && <Badge className="bg-red-100 text-red-800 border-0">FEATURED</Badge>}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{newsItem.title}</h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <NewsMeta publishedAt={newsItem.publishedAt} company={newsItem.company} size="lg" />
                <ShareButton title={newsItem.title} />
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">{newsItem.excerpt}</p>

              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={newsItem.featuredImage || "/placeholder.svg"}
                  alt={newsItem.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                  />

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {newsItem.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-sm hover:bg-blue-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-6">
                    {newsItem.company && <CompanySpotlight companyName={newsItem.company} />}

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                      <h4 className="font-semibold text-lg mb-3">Subscribe to Updates</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Get the latest news and updates delivered to your inbox.
                      </p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <RelatedNews items={recentNews} />
      </div>
    </>
  )
}
