export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  industry: string
  technologies: string[]
  image: string
  duration: string
  teamSize: number
  results: {
    metric: string
    value: string
    description: string
  }[]
  clientTestimonial?: {
    quote: string
    author: string
    position: string
    company: string
    avatar?: string
  }
  features: string[]
  challenges: string[]
  solutions: string[]
  demoUrl?: string
  caseStudyUrl?: string
  featured: boolean
  status: "completed" | "in-progress" | "planning"
  startDate: string
  endDate?: string
  budget?: string
  seo: {
    metaDescription: string
    keywords: string[]
  }
}

export const projectsData: Project[] = [
  {
    id: "ai-healthcare-platform",
    title: "AI-Powered Healthcare Platform",
    description:
      "Revolutionary healthcare management system using machine learning for predictive diagnostics and patient care optimization.",
    longDescription:
      "Developed a comprehensive healthcare platform that leverages artificial intelligence to transform patient care delivery. The system integrates predictive analytics, automated diagnostics, and personalized treatment recommendations to improve patient outcomes while reducing operational costs.",
    category: "ai-ml",
    industry: "healthcare",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS", "PostgreSQL"],
    image: "/llp3.jpeg?height=400&width=600",
    duration: "8 months",
    teamSize: 12,
    results: [
      { metric: "Diagnostic Accuracy", value: "94%", description: "Improvement in early diagnosis" },
      { metric: "Cost Reduction", value: "32%", description: "Operational cost savings" },
      { metric: "Patient Satisfaction", value: "89%", description: "Increase in satisfaction scores" },
    ],
    clientTestimonial: {
      quote: "This platform has revolutionized how we deliver patient care. The AI insights have been invaluable.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer",
      company: "Tokyo Medical Center",
      avatar: "/llp3.jpeg?height=60&width=60",
    },
    features: ["Predictive Analytics", "Automated Diagnostics", "Patient Portal", "Real-time Monitoring"],
    challenges: ["Data Privacy Compliance", "Integration with Legacy Systems", "Real-time Processing"],
    solutions: ["HIPAA-compliant Architecture", "Custom API Gateway", "Microservices Design"],
    caseStudyUrl: "/case-studies/ai-healthcare-platform",
    featured: true,
    status: "completed",
    startDate: "2023-01-15",
    endDate: "2023-09-15",
    budget: "$2.5M",
    seo: {
      metaDescription:
        "AI-powered healthcare platform case study - 94% improvement in diagnostic accuracy with machine learning and predictive analytics.",
      keywords: ["AI healthcare", "machine learning", "predictive diagnostics", "healthcare platform", "medical AI"],
    },
  },
  {
    id: "fintech-trading-platform",
    title: "Next-Gen Trading Platform",
    description:
      "High-frequency trading platform with advanced analytics and risk management for institutional investors.",
    longDescription:
      "Built a sophisticated trading platform that handles millions of transactions per day with microsecond latency. Features include real-time market data, algorithmic trading, and comprehensive risk management tools.",
    category: "web-development",
    industry: "finance",
    technologies: ["React", "TypeScript", "Node.js", "Redis", "MongoDB", "WebSocket"],
    image: "/llp4.jpeg?height=400&width=600",
    duration: "12 months",
    teamSize: 15,
    results: [
      { metric: "Trade Execution", value: "5ms", description: "Average execution time" },
      { metric: "Uptime", value: "99.99%", description: "Platform availability" },
      { metric: "Volume Growth", value: "150%", description: "Increase in trading volume" },
    ],
    features: ["Real-time Analytics", "Algorithmic Trading", "Risk Management", "Mobile App"],
    challenges: ["Ultra-low Latency", "High Availability", "Regulatory Compliance"],
    solutions: ["Optimized Data Structures", "Redundant Architecture", "Automated Compliance"],
    demoUrl: "https://demo.trading-platform.com",
    caseStudyUrl: "/case-studies/fintech-trading-platform",
    featured: false,
    status: "completed",
    startDate: "2022-06-01",
    endDate: "2023-06-01",
    budget: "$3.2M",
    seo: {
      metaDescription:
        "High-frequency trading platform with 5ms execution time and 99.99% uptime. Advanced fintech solution for institutional investors.",
      keywords: [
        "trading platform",
        "fintech",
        "high-frequency trading",
        "algorithmic trading",
        "financial technology",
      ],
    },
  },
  {
    id: "ecommerce-mobile-app",
    title: "E-commerce Mobile Ecosystem",
    description:
      "Complete mobile commerce solution with AR try-on, personalized recommendations, and seamless checkout.",
    longDescription:
      "Developed a comprehensive mobile e-commerce ecosystem that includes customer apps, vendor portals, and admin dashboards. Features augmented reality product visualization and AI-powered personalization.",
    category: "mobile-apps",
    industry: "retail",
    technologies: ["React Native", "Python", "FastAPI", "PostgreSQL", "Redis", "ARKit"],
    image: "/llp4.jpeg?height=400&width=600",
    duration: "6 months",
    teamSize: 8,
    results: [
      { metric: "User Engagement", value: "67%", description: "Increase in daily active users" },
      { metric: "Conversion Rate", value: "45%", description: "Improvement in sales conversion" },
      { metric: "App Store Rating", value: "4.8", description: "Average user rating" },
    ],
    features: ["AR Product Try-on", "AI Recommendations", "Social Shopping", "One-click Checkout"],
    challenges: ["Cross-platform Compatibility", "AR Performance", "Payment Integration"],
    solutions: ["React Native Framework", "Optimized AR Rendering", "Multiple Payment Gateways"],
    demoUrl: "https://app.store/ecommerce-demo",
    featured: false,
    status: "completed",
    startDate: "2023-03-01",
    endDate: "2023-09-01",
    budget: "$800K",
    seo: {
      metaDescription:
        "Mobile e-commerce app with AR try-on and AI recommendations. 67% increase in user engagement and 4.8 app store rating.",
      keywords: ["mobile ecommerce", "AR shopping", "mobile app development", "retail technology", "augmented reality"],
    },
  },
  {
    id: "cloud-migration-enterprise",
    title: "Enterprise Cloud Migration",
    description:
      "Complete digital transformation with cloud migration, microservices architecture, and DevOps automation.",
    longDescription:
      "Led the digital transformation of a large manufacturing company, migrating their entire infrastructure to the cloud while implementing modern DevOps practices and microservices architecture.",
    category: "cloud-solutions",
    industry: "manufacturing",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Python", "Go"],
    image: "/llp4.jpeg?height=400&width=600",
    duration: "10 months",
    teamSize: 20,
    results: [
      { metric: "Infrastructure Costs", value: "40%", description: "Reduction in operational costs" },
      { metric: "Deployment Speed", value: "80%", description: "Faster deployment cycles" },
      { metric: "System Reliability", value: "99.9%", description: "Uptime improvement" },
    ],
    clientTestimonial: {
      quote: "The cloud migration transformed our operations. We're now more agile and cost-effective.",
      author: "Hiroshi Tanaka",
      position: "CTO",
      company: "Yamada Manufacturing",
      avatar: "/llp5.jpeg?height=60&width=60",
    },
    features: ["Microservices Architecture", "Auto-scaling", "CI/CD Pipeline", "Monitoring & Alerting"],
    challenges: ["Zero-downtime Migration", "Data Security", "Staff Training"],
    solutions: ["Blue-green Deployment", "Encryption at Rest & Transit", "Comprehensive Training Program"],
    caseStudyUrl: "/case-studies/cloud-migration-enterprise",
    featured: true,
    status: "completed",
    startDate: "2022-08-01",
    endDate: "2023-06-01",
    budget: "$4.1M",
    seo: {
      metaDescription:
        "Enterprise cloud migration case study - 40% cost reduction and 80% faster deployments with AWS and Kubernetes.",
      keywords: ["cloud migration", "digital transformation", "AWS", "Kubernetes", "enterprise cloud"],
    },
  },
  {
    id: "education-learning-platform",
    title: "Interactive Learning Platform",
    description: "AI-enhanced educational platform with personalized learning paths and virtual classrooms.",
    longDescription:
      "Created an innovative educational platform that uses AI to create personalized learning experiences. Includes virtual classrooms, interactive content, and comprehensive analytics for educators.",
    category: "web-development",
    industry: "education",
    technologies: ["Next.js", "Python", "TensorFlow", "WebRTC", "PostgreSQL", "Redis"],
    image: "/llp3.jpeg?height=400&width=600",
    duration: "7 months",
    teamSize: 10,
    results: [
      { metric: "Learning Outcomes", value: "55%", description: "Improvement in test scores" },
      { metric: "Student Engagement", value: "73%", description: "Increase in participation" },
      { metric: "Teacher Satisfaction", value: "91%", description: "Positive feedback rate" },
    ],
    features: ["Personalized Learning", "Virtual Classrooms", "Progress Analytics", "Interactive Content"],
    challenges: ["Scalable Video Streaming", "Personalization Algorithm", "User Experience"],
    solutions: ["WebRTC Infrastructure", "Machine Learning Models", "User-centered Design"],
    demoUrl: "https://demo.learning-platform.edu",
    featured: false,
    status: "completed",
    startDate: "2023-02-01",
    endDate: "2023-09-01",
    budget: "$1.2M",
    seo: {
      metaDescription:
        "AI-enhanced learning platform with 55% improvement in test scores and 73% increase in student engagement.",
      keywords: [
        "education platform",
        "AI learning",
        "virtual classrooms",
        "educational technology",
        "personalized learning",
      ],
    },
  },
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain",
    description: "Transparent supply chain management using blockchain technology for end-to-end traceability.",
    longDescription:
      "Implemented a blockchain-based supply chain solution that provides complete transparency and traceability from raw materials to end consumers. Includes smart contracts for automated compliance.",
    category: "enterprise-software",
    industry: "manufacturing",
    technologies: ["Ethereum", "Solidity", "Node.js", "React", "IPFS", "MongoDB"],
    image: "/llp.jpeg?height=400&width=600",
    duration: "9 months",
    teamSize: 14,
    results: [
      { metric: "Transparency", value: "100%", description: "End-to-end traceability" },
      { metric: "Fraud Reduction", value: "87%", description: "Decrease in counterfeit products" },
      { metric: "Compliance", value: "95%", description: "Automated compliance rate" },
    ],
    features: ["Smart Contracts", "Product Traceability", "Automated Compliance", "Dashboard Analytics"],
    challenges: ["Blockchain Integration", "Scalability", "User Adoption"],
    solutions: ["Hybrid Blockchain Architecture", "Layer 2 Solutions", "User Training Program"],
    caseStudyUrl: "/case-studies/blockchain-supply-chain",
    featured: false,
    status: "completed",
    startDate: "2022-10-01",
    endDate: "2023-07-01",
    budget: "$1.8M",
    seo: {
      metaDescription:
        "Blockchain supply chain solution with 100% traceability and 87% fraud reduction using smart contracts and IPFS.",
      keywords: [
        "blockchain supply chain",
        "smart contracts",
        "product traceability",
        "blockchain technology",
        "supply chain management",
      ],
    },
  },
]

export const projectCategories = [
  "all",
  "ai-ml",
  "web-development",
  "mobile-apps",
  "cloud-solutions",
  "digital-transformation",
  "enterprise-software",
]

export const projectIndustries = [
  "all",
  "finance",
  "healthcare",
  "retail",
  "manufacturing",
  "education",
  "government",
  "startup",
]

export const projectTechnologies = ["all", "react", "python", "nodejs", "aws", "azure", "tensorflow", "blockchain"]

export function getProject(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projectsData
  return projectsData.filter((project) => project.category === category)
}

export function getRelatedProjects(currentProjectId: string, limit = 3): Project[] {
  const currentProject = getProject(currentProjectId)
  if (!currentProject) return []

  return projectsData
    .filter(
      (project) =>
        project.id !== currentProjectId &&
        (project.category === currentProject.category || project.industry === currentProject.industry),
    )
    .slice(0, limit)
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured)
}
