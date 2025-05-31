import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { EnhancedContactForm } from "@/components/contact/contact-form"
import { EnhancedContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { EnhancedFAQSection } from "@/components/contact/faq-section"
import { ContactCTA } from "@/components/contact/contact-cta"

export const metadata: Metadata = {
  title: "Contact Us | LLP Technology Partners - Get in Touch with Japan's Leading Tech Partnership",
  description:
    "Contact LLP Technology Partners for partnership inquiries, business collaboration, or general information. Multiple ways to reach our team in Tokyo, Japan.",
  keywords: [
    "contact LLP Technology Partners",
    "business inquiry",
    "partnership contact",
    "technology partnership Japan",
    "Tokyo tech companies",
    "collaboration inquiry",
    "enterprise solutions contact",
    "Japan technology consulting",
  ],
  openGraph: {
    title: "Contact Us | LLP Technology Partners",
    description:
      "Get in touch with Japan's leading technology partnership for business collaboration and innovative solutions.",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact LLP Technology Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | LLP Technology Partners",
    description:
      "Get in touch with Japan's leading technology partnership for business collaboration and innovative solutions.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact LLP Technology Partners",
    description: "Contact information and inquiry form for LLP Technology Partners",
    url: "https://llp-tech-partners.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2-1-1 Yurakucho, Chiyoda City",
        addressLocality: "Tokyo",
        postalCode: "100-0006",
        addressCountry: "JP",
      },
      telephone: "+81-3-6273-4000",
      email: "info@llp-tech-partners.com",
      url: "https://llp-tech-partners.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+81-3-6273-4000",
          contactType: "customer service",
          availableLanguage: ["English", "Japanese"],
        },
        {
          "@type": "ContactPoint",
          email: "partnerships@llp-tech-partners.com",
          contactType: "business partnerships",
        },
        {
          "@type": "ContactPoint",
          email: "media@llp-tech-partners.com",
          contactType: "media inquiries",
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <EnhancedContactForm />
          <EnhancedContactInfo />
        </div>
        <ContactMap />
        <EnhancedFAQSection />
        <ContactCTA />
      </div>
    </>
  )
}
