import { MemberCompaniesHeader } from "@/components/members/header"
import { CompanyGrid } from "@/components/members/company-grid"
import { CollaborationBenefits } from "@/components/members/collaboration-benefit"

const memberCompanies = [
  {
    id: "techcorp-solutions",
    name: "TechCorp Solutions",
    specialty: "AI & Machine Learning",
    logo: "/images/companies/ai.jpeg",
    description: "Leading provider of artificial intelligence and machine learning solutions for enterprise clients.",
    founded: "2015",
    employees: "150+",
    location: "Tokyo, Japan",
    website: "https://techcorp-solutions.com",
    featured: true,
  },
  {
    id: "digital-dynamics",
    name: "Digital Dynamics",
    specialty: "Web Development",
    logo: "/images/companies/images30.jpeg",
    description: "Full-stack web development company specializing in modern frameworks and user experience design.",
    founded: "2017",
    employees: "80+",
    location: "Osaka, Japan",
    website: "https://digital-dynamics.com",
    featured: true,
  },
  {
    id: "innovation-labs",
    name: "Innovation Labs",
    specialty: "R&D Services",
    logo: "/images/companies/images31.jpeg",
    description: "Research and development firm focused on emerging technologies and prototype development.",
    founded: "2016",
    employees: "60+",
    location: "Kyoto, Japan",
    website: "https://innovation-labs.com",
    featured: false,
  },
  {
    id: "cloudtech-systems",
    name: "CloudTech Systems",
    specialty: "Cloud Infrastructure",
    logo: "/images/companies/cloud.jpeg",
    description: "Cloud infrastructure specialists providing scalable solutions for modern applications.",
    founded: "2018",
    employees: "120+",
    location: "Tokyo, Japan",
    website: "https://cloudtech-systems.com",
    featured: true,
  },
  {
    id: "dataflow-analytics",
    name: "DataFlow Analytics",
    specialty: "Data Science",
    logo: "/images/companies/images32.jpeg",
    description: "Data science and analytics company helping businesses make data-driven decisions.",
    founded: "2019",
    employees: "90+",
    location: "Yokohama, Japan",
    website: "https://dataflow-analytics.com",
    featured: false,
  },
  {
    id: "securenet-solutions",
    name: "SecureNet Solutions",
    specialty: "Cybersecurity",
    logo: "/images/companies/images33",
    description: "Cybersecurity experts providing comprehensive protection for digital assets and infrastructure.",
    founded: "2014",
    employees: "110+",
    location: "Tokyo, Japan",
    website: "https://securenet-solutions.com",
    featured: true,
  },
]

export default function MembersPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <MemberCompaniesHeader />
      <CompanyGrid companies={memberCompanies} />
      <CollaborationBenefits />
    </div>
  )
}
