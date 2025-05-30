import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AuthorCard } from "@/components/blog/author-card"
import { BlogMeta } from "@/components/blog/blog-meta"
import { ShareButton } from "@/components/blog/share-button"
import { RelatedPosts } from "@/components/blog/related-posts"
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/data/blog"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | LLP Technology Partners Blog`,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.seo.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seo.metaDescription,
      images: [post.featuredImage],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.metaDescription,
    image: post.featuredImage,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: post.author.company,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LLP Technology Partners",
      logo: {
        "@type": "ImageObject",
        url: "https://llp-tech-partners.com/logo.png",
      },
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://llp-tech-partners.com/blog/${post.id}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="hover:bg-blue-50">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                {post.category}
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <AuthorCard author={post.author} size="md" />
                <BlogMeta publishedAt={post.publishedAt} readTime={post.readTime} />
                <ShareButton title={post.title} />
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <div
                    className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2 prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="hover:bg-blue-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <AuthorCard author={post.author} size="lg" showBio={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  )
}
