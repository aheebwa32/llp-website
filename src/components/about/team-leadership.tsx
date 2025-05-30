import Image from "next/image"
import { Mail, Linkedin, Award, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const leadership = [
  {
    name: "Dr. Tanaka Hiroshi",
    role: "Managing Partner & CEO",
    company: "LLP Technology Partners",
    image: "/emp3.jpeg",
    bio: "Visionary leader with 20+ years in technology partnerships and digital transformation. Former executive at leading Japanese tech companies.",
    expertise: ["Strategic Partnerships", "Digital Transformation", "Business Development"],
    achievements: ["Led 200+ successful partnerships", "Recognized as Tech Leader of the Year 2023"],
    email: "matsuzaki@llp-tech-partners.com",
    linkedin: "#",
  },
  {
    name: "Naruto Kamada",
    role: "Chief Technology Officer",
    company: "TechVision Corporation",
    image: "/emp2.png",
    bio: "PhD in Machine Learning from Tokyo University with 15+ years in AI research and enterprise implementations.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Research & Development"],
    achievements: ["Published 50+ research papers", "AI Innovation Award Winner 2024"],
    email: "tanaka@techvision-corp.com",
    linkedin: "#",
  },
  {
    name: "Yamamoto Akiko",
    role: "Head of Data Science",
    company: "DataFlow Systems",
    image: "/emp4.jpeg",
    bio: "Former Google AI researcher with expertise in big data analytics and real-time processing systems.",
    expertise: ["Big Data Analytics", "Real-time Processing", "Business Intelligence"],
    achievements: ["Led analytics for 100+ enterprise clients", "Data Science Excellence Award"],
    email: "yamamoto@dataflow-systems.com",
    linkedin: "#",
  },
  {
    name: "Sato Kenji",
    role: "Cloud Architecture Director",
    company: "CloudFirst Technologies",
    image: "/emp5.jpeg",
    bio: "Cloud infrastructure expert with extensive experience in multi-cloud architectures and DevOps practices.",
    expertise: ["Cloud Architecture", "DevOps", "Infrastructure Automation"],
    achievements: ["500+ successful cloud migrations", "AWS Community Hero"],
    email: "sato@cloudfirst-tech.com",
    linkedin: "#",
  },
]

const organizationalStats = [
  { label: "Combined Experience", value: "80+ Years", icon: Calendar },
  { label: "Team Members", value: "440+ Experts", icon: Users },
  { label: "Industry Awards", value: "50+ Awards", icon: Award },
]

export function TeamLeadership() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation and excellence across our partnership
          </p>
        </div>

        {/* Organizational Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {organizationalStats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow">
              <CardContent className="p-4">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Leadership Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {leadership.map((leader, index) => (
            <Card key={index} className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={leader.image || "/CEO.jpeg"}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-gray-900 mb-0">{leader.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-0">{leader.role}</p>
                    <p className="text-gray-500 text-xs">{leader.company}</p>
                  </div>

                  <p className="text-gray-600 text-xs mb-2 leading-tight">{leader.bio}</p>

                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-1.5 py-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Achievements</h4>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center">
                          <Award className="w-3 h-3 text-blue-600 mr-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Button size="sm" variant="outline" className="text-xs py-0.5 h-7 px-2" asChild>
                      <Link href={`mailto:${leader.email}`}>
                        <Mail className="w-3 h-3 mr-1" />
                        Contact
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs py-0.5 h-7 px-2" asChild>
                      <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


