export interface Company {
  id: string
  name: string
  tagline: string
  specialty: string
  description: string
  metaDescription: string
  keywords: string[]
  founded: string
  employees: string
  location: string
  website: string
  email: string
  phone: string
  linkedin: string
  logo: string
  heroImage: string
  ogImage: string

  // Trust indicators
  certifications: string[]
  awards: string[]
  partnerships: string[]
  clientCount: string
  projectCount: string
  successRate: string

  // Services
  services: {
    title: string
    description: string
    features: string[]
    technologies: string[]
    pricing?: string
  }[]

  // Case studies
  caseStudies: {
    title: string
    client: string
    industry: string
    challenge: string
    solution: string
    results: string[]
    technologies: string[]
    duration: string
    teamSize: string
    image: string
  }[]

  // Team members
  team: {
    name: string
    role: string
    bio: string
    image: string
    linkedin?: string
    expertise: string[]
  }[]

  // Client testimonials
  testimonials: {
    quote: string
    author: string
    position: string
    company: string
    rating: number
    project?: string
  }[]
}

export const companiesData: Record<string, Company> = {
  "techvision-corporation": {
    id: "techvision-corporation",
    name: "TechVision Corporation",
    tagline: "Pioneering AI Solutions for Tomorrow",
    specialty: "AI & Machine Learning",
    description:
      "Leading provider of enterprise AI solutions, specializing in natural language processing, computer vision, and predictive analytics that transform business operations.",
    metaDescription:
      "TechVision Corporation delivers cutting-edge AI and machine learning solutions for enterprises. Specializing in NLP, computer vision, and predictive analytics with 99% success rate.",
    keywords: [
      "AI solutions",
      "machine learning",
      "natural language processing",
      "computer vision",
      "predictive analytics",
      "enterprise AI",
      "artificial intelligence consulting",
    ],
    founded: "2018",
    employees: "150+",
    location: "Tokyo, Japan",
    website: "https://techvision-corp.com",
    email: "contact@techvision-corp.com",
    phone: "+81-3-1234-5678",
    linkedin: "https://linkedin.com/company/techvision-corp",
    logo: "/placeholder.svg?height=200&width=300",
    heroImage: "/placeholder.svg?height=600&width=1200",
    ogImage: "/placeholder.svg?height=630&width=1200",

    certifications: ["ISO 27001", "SOC 2 Type II", "AI Ethics Certificate", "AWS Advanced Consulting Partner"],
    awards: ["Best AI Innovation 2024", "Enterprise AI Excellence Award", "Tech Innovation of the Year"],
    partnerships: ["Google Cloud Premier Partner", "Microsoft Gold Partner", "NVIDIA Elite Partner"],
    clientCount: "200+",
    projectCount: "500+",
    successRate: "99.2%",

    services: [
      {
        title: "Natural Language Processing",
        description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI",
        features: [
          "Multilingual text processing",
          "Sentiment analysis and emotion detection",
          "Chatbot and virtual assistant development",
          "Document classification and extraction",
          "Real-time language translation",
        ],
        technologies: ["GPT-4", "BERT", "Transformer models", "spaCy", "NLTK", "Hugging Face"],
        pricing: "Starting from ¥500,000/month",
      },
      {
        title: "Computer Vision",
        description: "Cutting-edge computer vision systems for image and video analysis",
        features: [
          "Object detection and recognition",
          "Facial recognition and biometrics",
          "Quality control automation",
          "Medical image analysis",
          "Autonomous vehicle vision systems",
        ],
        technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "ResNet", "CNN architectures"],
        pricing: "Starting from ¥800,000/month",
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven insights and forecasting for strategic business decisions",
        features: [
          "Demand forecasting",
          "Risk assessment models",
          "Customer behavior prediction",
          "Maintenance scheduling",
          "Financial market analysis",
        ],
        technologies: ["Python", "R", "Apache Spark", "TensorFlow", "scikit-learn", "XGBoost"],
        pricing: "Starting from ¥600,000/month",
      },
    ],

    caseStudies: [
      {
        title: "AI-Powered Healthcare Diagnosis System",
        client: "Tokyo Medical Center",
        industry: "Healthcare",
        challenge:
          "Manual diagnosis processes were time-consuming and prone to human error, leading to delayed patient care and increased costs.",
        solution:
          "Developed an AI-powered diagnostic system using computer vision and machine learning to analyze medical images and patient data, providing accurate diagnosis suggestions in real-time.",
        results: [
          "40% improvement in diagnosis accuracy",
          "60% reduction in diagnosis time",
          "95% user satisfaction rate",
          "$2M annual cost savings",
        ],
        technologies: ["TensorFlow", "OpenCV", "Python", "AWS", "Docker"],
        duration: "18 months",
        teamSize: "12 specialists",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Predictive Maintenance for Manufacturing",
        client: "Yamaha Motor Co.",
        industry: "Manufacturing",
        challenge: "Unexpected equipment failures caused significant production downtime and maintenance costs.",
        solution:
          "Implemented IoT sensors and machine learning algorithms to predict equipment failures before they occur, enabling proactive maintenance scheduling.",
        results: [
          "70% reduction in unplanned downtime",
          "50% decrease in maintenance costs",
          "25% increase in overall equipment effectiveness",
          "ROI achieved within 8 months",
        ],
        technologies: ["IoT sensors", "Python", "Apache Kafka", "TensorFlow", "Time series analysis"],
        duration: "12 months",
        teamSize: "8 specialists",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],

    team: [
      {
        name: "Dr. Hiroshi Tanaka",
        role: "Chief Technology Officer",
        bio: "PhD in Machine Learning from Tokyo University with 15+ years in AI research. Former lead scientist at Google AI Japan.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/hiroshi-tanaka",
        expertise: ["Deep Learning", "Computer Vision", "AI Strategy", "Research Leadership"],
      },
      {
        name: "Akiko Yamamoto",
        role: "Head of Data Science",
        bio: "Former Microsoft Research scientist specializing in NLP and conversational AI. Published 50+ research papers.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/akiko-yamamoto",
        expertise: ["Natural Language Processing", "Conversational AI", "Machine Learning", "Research"],
      },
      {
        name: "David Chen",
        role: "AI Solutions Architect",
        bio: "Enterprise AI specialist with experience deploying ML solutions at scale for Fortune 500 companies.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/david-chen-ai",
        expertise: ["Enterprise AI", "MLOps", "Cloud Architecture", "Solution Design"],
      },
    ],

    testimonials: [
      {
        quote:
          "TechVision's AI solution transformed our diagnostic capabilities. The accuracy and speed improvements have been remarkable, and patient outcomes have significantly improved.",
        author: "Dr. Kenji Nakamura",
        position: "Chief Medical Officer",
        company: "Tokyo Medical Center",
        rating: 5,
        project: "AI-Powered Healthcare Diagnosis System",
      },
      {
        quote:
          "The predictive maintenance system has revolutionized our operations. We've virtually eliminated unexpected downtime and our maintenance costs have dropped dramatically.",
        author: "Satoshi Suzuki",
        position: "Plant Manager",
        company: "Yamaha Motor Co.",
        rating: 5,
        project: "Predictive Maintenance for Manufacturing",
      },
      {
        quote:
          "Working with TechVision has been exceptional. Their team's expertise and professionalism are unmatched in the AI industry.",
        author: "Maria Rodriguez",
        position: "CTO",
        company: "Global Retail Chain",
        rating: 5,
      },
    ],
  },

  "dataflow-systems": {
    id: "dataflow-systems",
    name: "DataFlow Systems",
    tagline: "Transforming Data into Strategic Advantage",
    specialty: "Big Data & Analytics",
    description:
      "Specialized in big data processing, business intelligence platforms, and real-time analytics that enable data-driven decision making across organizations.",
    metaDescription:
      "DataFlow Systems provides enterprise big data and analytics solutions. Real-time processing, business intelligence, and data visualization with 99.9% uptime guarantee.",
    keywords: [
      "big data",
      "analytics",
      "business intelligence",
      "data processing",
      "real-time analytics",
      "data visualization",
      "data warehouse",
    ],
    founded: "2020",
    employees: "80+",
    location: "Osaka, Japan",
    website: "https://dataflow-systems.com",
    email: "info@dataflow-systems.com",
    phone: "+81-6-2345-6789",
    linkedin: "https://linkedin.com/company/dataflow-systems",
    logo: "/placeholder.svg?height=200&width=300",
    heroImage: "/placeholder.svg?height=600&width=1200",
    ogImage: "/placeholder.svg?height=630&width=1200",

    certifications: [
      "Google Cloud Professional Data Engineer",
      "AWS Big Data Specialty",
      "Snowflake SnowPro Core",
      "Tableau Desktop Specialist",
    ],
    awards: ["Data Innovation Award 2024", "Best Analytics Platform", "Cloud Excellence Award"],
    partnerships: ["Snowflake Elite Partner", "Tableau Gold Partner", "Google Cloud Premier Partner"],
    clientCount: "150+",
    projectCount: "300+",
    successRate: "98.8%",

    services: [
      {
        title: "Real-time Data Processing",
        description: "High-performance streaming analytics for immediate insights and decision making",
        features: [
          "Stream processing with Apache Kafka",
          "Real-time dashboards and alerts",
          "Event-driven architecture",
          "Low-latency data pipelines",
          "Scalable microservices",
        ],
        technologies: ["Apache Kafka", "Apache Spark", "Apache Flink", "Redis", "Elasticsearch"],
        pricing: "Starting from ¥400,000/month",
      },
      {
        title: "Business Intelligence Platform",
        description: "Comprehensive BI solutions for data visualization and business insights",
        features: [
          "Interactive dashboards",
          "Self-service analytics",
          "Automated reporting",
          "Mobile BI applications",
          "Advanced data modeling",
        ],
        technologies: ["Tableau", "Power BI", "Looker", "QlikView", "D3.js"],
        pricing: "Starting from ¥300,000/month",
      },
      {
        title: "Data Warehouse & Lake",
        description: "Modern data architecture for storing and analyzing massive datasets",
        features: [
          "Cloud-native data warehouses",
          "Data lake implementation",
          "ETL/ELT pipelines",
          "Data governance",
          "Metadata management",
        ],
        technologies: ["Snowflake", "Amazon Redshift", "Google BigQuery", "Apache Airflow", "dbt"],
        pricing: "Starting from ¥700,000/month",
      },
    ],

    caseStudies: [
      {
        title: "Real-time E-commerce Analytics Platform",
        client: "Rakuten Group",
        industry: "E-commerce",
        challenge:
          "Processing millions of transactions daily while providing real-time insights for business optimization.",
        solution:
          "Built a scalable real-time analytics platform using Apache Kafka and Spark to process transaction data and provide instant business insights.",
        results: [
          "Processing 10M+ events per day",
          "Sub-second query response times",
          "30% increase in conversion rates",
          "50% reduction in infrastructure costs",
        ],
        technologies: ["Apache Kafka", "Apache Spark", "Elasticsearch", "Kibana", "AWS"],
        duration: "15 months",
        teamSize: "10 specialists",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Financial Risk Analytics System",
        client: "Mizuho Bank",
        industry: "Financial Services",
        challenge:
          "Need for real-time risk assessment and regulatory compliance reporting across multiple business units.",
        solution:
          "Developed a comprehensive risk analytics platform with real-time monitoring and automated compliance reporting.",
        results: [
          "99.9% system uptime",
          "Real-time risk monitoring",
          "Automated regulatory reporting",
          "60% reduction in compliance costs",
        ],
        technologies: ["Snowflake", "Tableau", "Python", "Apache Airflow", "Docker"],
        duration: "20 months",
        teamSize: "15 specialists",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],

    team: [
      {
        name: "Yuki Sato",
        role: "Chief Data Officer",
        bio: "Former Netflix data architect with expertise in large-scale data systems. Led data initiatives for 100M+ users.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/yuki-sato-data",
        expertise: ["Big Data Architecture", "Stream Processing", "Data Strategy", "Team Leadership"],
      },
      {
        name: "Michael Thompson",
        role: "Head of Analytics",
        bio: "Business intelligence expert with 12+ years at McKinsey & Company. Specializes in data-driven strategy.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/michael-thompson-analytics",
        expertise: ["Business Intelligence", "Data Visualization", "Strategic Analytics", "Consulting"],
      },
      {
        name: "Priya Sharma",
        role: "Senior Data Engineer",
        bio: "Cloud data platform specialist with experience at Google and Amazon. Expert in scalable data architectures.",
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://linkedin.com/in/priya-sharma-data",
        expertise: ["Data Engineering", "Cloud Platforms", "ETL/ELT", "Data Pipelines"],
      },
    ],

    testimonials: [
      {
        quote:
          "DataFlow's real-time analytics platform has transformed how we understand our customers. The insights we get are invaluable for our business decisions.",
        author: "Takeshi Yamada",
        position: "VP of Data",
        company: "Rakuten Group",
        rating: 5,
        project: "Real-time E-commerce Analytics Platform",
      },
      {
        quote:
          "The risk analytics system has significantly improved our compliance posture while reducing operational costs. Exceptional work by the DataFlow team.",
        author: "Hiroko Tanaka",
        position: "Chief Risk Officer",
        company: "Mizuho Bank",
        rating: 5,
        project: "Financial Risk Analytics System",
      },
      {
        quote:
          "DataFlow's expertise in modern data architecture is unmatched. They delivered a solution that exceeded our expectations.",
        author: "James Wilson",
        position: "CTO",
        company: "Global Manufacturing Corp",
        rating: 5,
      },
    ],
  },
}
