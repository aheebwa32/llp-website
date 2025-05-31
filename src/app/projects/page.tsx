"use client"

import { useState } from "react"
import { ProjectsHero } from "@/components/projects/project-hero"
// import { ProjectsStats } from "@/components/projects/project-stats"
import { EnhancedProjectsFilter } from "@/components/projects/projects-filter"
import { EnhancedProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsTestimonials } from "@/components/projects/project-testimonials"
import { ProjectsCTA } from "@/components/projects/project-cta"

interface FilterState {
  category: string
  industry: string
  technology: string
  searchTerm: string
}

export default function ProjectsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    industry: "all",
    technology: "all",
    searchTerm: "",
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LLP Technology Partners Projects",
    description: "Portfolio of technology projects and digital transformations by LLP Technology Partners",
    url: "https://llp-tech-partners.com/projects",
    mainEntity: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      url: "https://llp-tech-partners.com",
      description: "Japan's leading technology partnership delivering innovative solutions",
      foundingDate: "2020",
      numberOfEmployees: "200+",
      industry: "Technology Consulting",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2-1-1 Yurakucho, Chiyoda City",
        addressLocality: "Tokyo",
        postalCode: "100-0006",
        addressCountry: "JP",
      },
    },
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "Enterprise AI Solutions",
        description: "Advanced AI implementations for enterprise clients",
        creator: {
          "@type": "Organization",
          name: "LLP Technology Partners",
        },
      },
      {
        "@type": "CreativeWork",
        name: "Digital Transformation Projects",
        description: "Complete digital transformation initiatives across industries",
        creator: {
          "@type": "Organization",
          name: "LLP Technology Partners",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <ProjectsHero />
        {/* <ProjectsStats /> */}
        <EnhancedProjectsFilter onFilterChange={setFilters} />
        <EnhancedProjectsGrid filters={filters} />
        <ProjectsTestimonials />
        <ProjectsCTA />
      </div>
    </>
  )
}
