import { Mail, Phone, MapPin, Clock, Globe, Users } from "lucide-react"
import { ContactMethodCard } from "./contact-method-card"
import { InfoCard } from "./info-card"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+81-3-6273-4000", "+81-3-6273-4001 (International)"],
    description: "Available 24/7 for urgent inquiries",
    action: "Call Now",
    href: "tel:+81362734000",
    color: "purple" as const,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@llp-tech-partners.com", "partnerships@llp-tech-partners.com"],
    description: "We respond within 4 hours during business days",
    action: "Send Email",
    href: "mailto:info@llp-tech-partners.com",
    color: "pink" as const,
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["2-1-1 Yurakucho, Chiyoda City", "Tokyo 100-0006, Japan"],
    description: "5 minutes from JR Yurakucho Station",
    action: "Get Directions",
    href: "https://maps.google.com/search/2-1-1+Yurakucho+Chiyoda+Tokyo",
    color: "blue" as const,
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM JST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM JST" },
  { day: "Sunday", hours: "Closed" },
  { day: "Holidays", hours: "Closed (Japanese National Holidays)" },
]

const departments = [
  {
    name: "General Inquiries",
    email: "info@llp-tech-partners.com",
    description: "For general questions and information",
  },
  {
    name: "Partnership Development",
    email: "partnerships@llp-tech-partners.com",
    description: "For business partnerships and collaborations",
  },
  {
    name: "Media Relations",
    email: "media@llp-tech-partners.com",
    description: "For press inquiries and media relations",
  },
  {
    name: "Technical Support",
    email: "support@llp-tech-partners.com",
    description: "For technical assistance and support",
  },
  {
    name: "Human Resources",
    email: "careers@llp-tech-partners.com",
    description: "For career opportunities and recruitment",
  },
]

export function EnhancedContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-8">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <ContactMethodCard key={method.title} {...method} />
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <InfoCard icon={Clock} title="Business Hours">
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Department Contacts */}
          <InfoCard icon={Users} title="Department Contacts">
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                  <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                  >
                    {dept.email}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">{dept.description}</p>
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Additional Info */}
          <InfoCard icon={Globe} title="Global Reach" className="bg-gradient-to-r from-purple-50 to-pink-50">
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                While our headquarters is in Tokyo, we work with partners and clients globally. We support multiple
                languages and time zones for international collaborations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                  🇯🇵 Japanese
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                  🇺🇸 English
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                  🇨🇳 Chinese
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                  🇰🇷 Korean
                </span>
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
