import type { Metadata } from "next"
import { EnhancedNewsHero } from "@/components/news/news-hero"
import { EnhancedNewsGrid } from "@/components/news/news-grid"
import { NewsletterSignup } from "@/components/news/newsletter-signup"

export const metadata: Metadata = {
  title: "Latest News & Updates | LLP Technology Partners - Technology Innovation News",
  description:
    "Stay informed with the latest news, press releases, and updates from LLP Technology Partners and our member companies. Technology innovation and partnership news.",
  keywords: [
    "technology news",
    "LLP news",
    "press releases",
    "company updates",
    "partnership announcements",
    "technology innovation",
    "enterprise technology news",
    "Japan tech news",
  ],
  openGraph: {
    title: "Latest News & Updates | LLP Technology Partners",
    description:
      "Stay informed with the latest technology innovation news and updates from Japan's leading technology partnership.",
    type: "website",
    images: [
      {
        url: "/og-news.jpg",
        width: 1200,
        height: 630,
        alt: "LLP Technology Partners News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News & Updates | LLP Technology Partners",
    description:
      "Stay informed with the latest technology innovation news and updates from Japan's leading technology partnership.",
    images: ["/og-news.jpg"],
  },
}

export default function NewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "LLP Technology Partners News",
    description: "Latest news and updates from LLP Technology Partners and member companies",
    url: "https://llp-tech-partners.com/news",
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
      "@id": "https://llp-tech-partners.com/news",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <EnhancedNewsHero />
        <EnhancedNewsGrid />
        <NewsletterSignup />
      </div>
    </>
  )
}
