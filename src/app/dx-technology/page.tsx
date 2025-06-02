import type { Metadata } from "next"
import { EnhancedDXHero } from "@/components/dx-technology/dx-hero"
import { EnhancedTechStack } from "@/components/dx-technology/tech-stack"
import { EnhancedDXMetrics } from "@/components/dx-technology/dx-metrics"
import { EnhancedDXCases } from "@/components/dx-technology/dx-cases"
import { DXTimeline } from "@/components/dx-technology/dx-timeline"
import { DXTestimonials } from "@/components/dx-technology/dx-testimonials"
import { DXCTASection } from "@/components/dx-technology/dx-cta-section"

export const metadata: Metadata = {
  title: "Technology & Digital Experience | LLP Technology Partners - Technical Excellence",
  description:
    "Discover our technical expertise and digital experience capabilities. From AI/ML to cloud solutions, see how LLP Technology Partners delivers cutting-edge technology solutions with proven results.",
  keywords: [
    "technology expertise",
    "digital experience",
    "technical trust",
    "software development",
    "AI machine learning",
    "cloud solutions",
    "enterprise software",
    "digital transformation",
    "technology consulting Japan",
    "LLP Technology Partners",
  ],
  openGraph: {
    title: "Technology & Digital Experience | LLP Technology Partners",
    description:
      "Cutting-edge technology solutions and digital experiences. Proven expertise in AI, cloud, and enterprise software development.",
    type: "website",
    images: [
      {
        url: "/og-technology-dx.jpg",
        width: 1200,
        height: 630,
        alt: "LLP Technology Partners - Technology & Digital Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Digital Experience | LLP Technology Partners",
    description:
      "Cutting-edge technology solutions and digital experiences. Proven expertise in AI, cloud, and enterprise software.",
    images: ["/og-technology-dx.jpg"],
  },
}

export default function TechnologyDXPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Technology & Digital Experience Solutions",
    description: "Comprehensive technology expertise and digital experience capabilities from LLP Technology Partners",
    url: "https://llp-tech-partners.com/technology-dx",
    author: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      url: "https://llp-tech-partners.com",
    },
    publisher: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      logo: {
        "@type": "ImageObject",
        url: "https://llp-tech-partners.com/logo.png",
      },
    },
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      description: "Leading technology consulting firm specializing in AI, cloud, and digital transformation",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Advanced Consulting Partner",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Microsoft Gold Partner",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "ISO 27001 Certified",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
        "Digital Transformation",
        "Enterprise Software Development",
        "Mobile Application Development",
        "Blockchain Technology",
        "DevOps and Infrastructure",
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <EnhancedDXHero />
        <EnhancedTechStack />
        <EnhancedDXMetrics />
        <EnhancedDXCases />
        <DXTimeline />
        <DXTestimonials />
        <DXCTASection />
      </div>
    </>
  )
}
