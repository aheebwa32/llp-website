import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CompanyHero } from "@/components/companies/hero"
import { TrustIndicators } from "@/components/companies/trust-indicators"
import { ServiceCapabilities } from "@/components/companies/service-capabilities"
import { CaseStudies } from "@/components/companies/case-studies"
// import { TeamMembers } from "@/components/companies/team-members"
import { ClientTestimonials } from "@/components/companies/client-testimonials"
import { CompanyContact } from "@/components/companies/contact"
import { companiesData } from "@/lib/data/companies"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const company = companiesData[slug as keyof typeof companiesData]

  if (!company) {
    return {
      title: "Company Not Found",
    }
  }

  return {
    title: `${company.name} - ${company.tagline} | LLP Technology Partners`,
    description: company.metaDescription,
    keywords: company.keywords,
    openGraph: {
      title: `${company.name} - ${company.tagline}`,
      description: company.metaDescription,
      type: "website",
      images: [
        {
          url: company.ogImage,
          width: 1200,
          height: 630,
          alt: `${company.name} - ${company.specialty}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${company.name} - ${company.tagline}`,
      description: company.metaDescription,
      images: [company.ogImage],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(companiesData).map((slug) => ({
    slug,
  }))
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const company = companiesData[slug as keyof typeof companiesData]

  if (!company) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    url: `https://llp-tech-partners.com/companies/${slug}`,
    logo: company.logo,
    foundingDate: company.founded,
    numberOfEmployees: company.employees,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.location.split(", ")[0],
      addressCountry: company.location.split(", ")[1],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "customer service",
    },
    sameAs: [company.website, company.linkedin],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <CompanyHero company={company} />
        <TrustIndicators company={company} />
        <ServiceCapabilities company={company} />
        <CaseStudies company={company} />
        {/* <TeamMembers company={company} /> */}
        <ClientTestimonials company={company} />
        <CompanyContact company={company} />
      </div>
    </>
  )
}
