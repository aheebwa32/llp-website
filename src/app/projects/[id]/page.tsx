import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectResults } from "@/components/projects/project-results"
import { ClientTestimonial } from "@/components/projects/client-testimonials"
import { TechnologyStack } from "@/components/projects/technology-stack"
import { ProjectStatus } from "@/components/projects/project-status"
import { EnhancedProjectCard } from "@/components/projects/project-card"
import { getProject, getRelatedProjects, projectsData } from "@/lib/data/projects"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | LLP Technology Partners Projects`,
    description: project.seo.metaDescription,
    keywords: project.seo.keywords,
    openGraph: {
      title: project.title,
      description: project.seo.metaDescription,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.seo.metaDescription,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project.id)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.metaDescription,
    image: project.image,
    creator: {
      "@type": "Organization",
      name: "LLP Technology Partners",
    },
    dateCreated: project.startDate,
    dateModified: project.endDate,
    keywords: project.seo.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://llp-tech-partners.com/projects/${project.id}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="hover:bg-blue-50">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                    <ProjectStatus status={project.status} />
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Featured Project
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{project.title}</h1>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>{project.teamSize} team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    {project.budget && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        <span>{project.budget}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <Button asChild size="lg">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.caseStudyUrl && (
                      <Button asChild variant="outline" size="lg">
                        <Link href={project.caseStudyUrl}>Read Case Study</Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Results */}
                  {project.results.length > 0 && (
                    <div>
                      <h2 className="text-3xl font-bold mb-8">Project Results</h2>
                      <ProjectResults results={project.results} variant="detailed" />
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <Card key={index} className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <div className="font-medium">{feature}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Challenges</h3>
                      <div className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <Card key={index} className="border-l-4 border-l-red-500">
                            <CardContent className="p-4">
                              <div className="text-sm text-gray-600">{challenge}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Solutions</h3>
                      <div className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <Card key={index} className="border-l-4 border-l-green-500">
                            <CardContent className="p-4">
                              <div className="text-sm text-gray-600">{solution}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  {project.clientTestimonial && (
                    <div>
                      <h2 className="text-3xl font-bold mb-8">Client Feedback</h2>
                      <ClientTestimonial testimonial={project.clientTestimonial} variant="detailed" />
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Technology Stack */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Technology Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <TechnologyStack technologies={project.technologies} showIcons={true} />
                    </CardContent>
                  </Card>

                  {/* Project Info */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Project Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500">Industry</div>
                        <div className="capitalize">{project.industry.replace("-", " ")}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Duration</div>
                        <div>{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Team Size</div>
                        <div>{project.teamSize} members</div>
                      </div>
                      {project.budget && (
                        <div>
                          <div className="text-sm font-medium text-gray-500">Budget</div>
                          <div>{project.budget}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-500">Status</div>
                        <ProjectStatus status={project.status} className="mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedProjects.map((relatedProject) => (
                    <EnhancedProjectCard key={relatedProject.id} project={relatedProject} variant="compact" />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
