import type { Metadata } from "next"
import { EnhancedBlogHero } from "@/components/blog/blog-hero"
import { EnhancedBlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/newsletter"

export const metadata: Metadata = {
  title: "Blog & Insights | LLP Technology Partners - Expert Analysis on Digital Transformation",
  description:
    "Stay updated with the latest insights on AI, cloud infrastructure, cybersecurity, and data analytics from Japan's leading technology partnership.",
  keywords: [
    "technology blog",
    "digital transformation",
    "AI insights",
    "cloud computing",
    "cybersecurity trends",
    "data analytics",
    "enterprise technology",
    "Japan tech industry",
  ],
  openGraph: {
    title: "Blog & Insights | LLP Technology Partners",
    description: "Expert analysis and insights on digital transformation from Japan's leading technology partnership.",
    type: "website",
    images: [
      {
        url: "/llp.jpg",
        width: 1200,
        height: 630,
        alt: "LLP Technology Partners Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | LLP Technology Partners",
    description: "Expert analysis and insights on digital transformation from Japan's leading technology partnership.",
    images: ["/og-blog.jpg"],
  },
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "LLP Technology Partners Blog",
    description: "Expert insights on digital transformation, AI, cloud computing, and cybersecurity",
    url: "https://llp-tech-partners.com/blog",
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
      "@id": "https://llp-tech-partners.com/blog",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <EnhancedBlogHero />
        <EnhancedBlogGrid />
        <BlogNewsletter />
      </div>
    </>
  )
}
