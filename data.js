const portfolioData = {
  personal: {
    name: "Pawan V",
    title: "Full-Stack Developer",
    tagline: "Building scalable solutions with modern cloud architecture",
    location: "Bangalore, India",
    email: "pawan.vijayaraghavan98@gmail.com",
    phone: "+91-9739285834",
    linkedin: "https://www.linkedin.com/in/pawanvijay98/",
    github: "https://github.com/Pawan2804",
    portfolio: "https://pawan-portfolio.com",
    resumeUrl: "https://drive.google.com/file/d/1XFMt0q6JR6HCqQbVW_rYtP7fb6cHLXl4/view?usp=drive_link",
    profileImage: "about.jpg"
  },
  
  about: {
    description: "Full-stack developer with 3+ years of experience building enterprise-scale full stack applications . Currently working at DRDO on multi-sensor operations systems using Qt/C++. Previously contributed to India's national digital health platform at Dell Technologies. Passionate about clean architecture, performance optimization, and modern web technologies.",
    highlights: [
      "Qt/C++ engineer at DRDO for multi-sensor operations app",
      "Led SpringDoc migration and increased test coverage to 80%+ at Dell",
      "Built serverless AWS architectures with real-time data streaming",
      "Published IEEE paper on cybersecurity techniques"
    ]
  },
  
  experience: [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "DRDO",
      location: "Bangalore",
      period: "Feb 2025 - Present",
      type: "current",
      description: "Qt/C++ engineer owning full SDLC (dev → QA → deploy) for a multi-sensor operations app ingesting EOIR, AIS, and Radar streams.",
      achievements: [
        "Implemented Factory, Singleton, and Command patterns to standardize component creation and optimize performance",
        "Designed state-driven interaction layer for map tooling with scroll/pan/click/double-click handling",
        "Delivered sensor controls with smooth UX and deterministic behaviour"
      ],
      technologies: ["Qt", "C++", "Design Patterns", "Sensor Integrations"]
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Dell Technologies",
      location: "Bangalore",
      period: "Aug 2022 - Aug 2023",
      type: "past",
      description: "Contributed to India's national-scale digital health platform for primary care and NCD management.",
      achievements: [
        "Led migration from Springfox to SpringDoc/OpenAPI across services; standardized schemas",
        "Increased automated test coverage to 80%+ by adding unit tests and fixing defects",
        "Supported open-sourcing by moving services from OpenForge to GitHub with secure CI workflows",
        "Deployed and operated backend services on AWS with CI/CD pipelines and CloudWatch monitoring"
      ],
      technologies: ["Spring Boot", "Jenkins", "OpenAPI", "JUnit", "CI/CD", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Associate Consultant",
      company: "Entune IT Consulting",
      location: "Remote",
      period: "Jun 2020 - Nov 2021",
      type: "past",
      description: "BASIS administration and ABAP development for PLM systems.",
      achievements: [
        "System performance tuning, transports, user/role administration across client environments",
        "Developed interactive ALV reports with optimized selection logic",
        "Data hygiene (cleanup, backup/restore) and test planning (unit/UAT)"
      ],
      technologies: ["SAP BASIS", "ABAP", "PLM", "ALV"]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Remote Patient Monitoring (RPM)",
      category: "Cloud Architecture",
      description: "Built live vitals dashboard with sub-second updates and rules-driven alerting/escalation using serverless AWS architecture.",
      features: [
        "Real-time vitals dashboard with GraphQL subscriptions",
        "Serverless ingest pipeline (API Gateway → Lambda)",
        "DynamoDB single-table design with TTL",
        "RBAC with Cognito and least-privilege IAM"
      ],
      technologies: ["React", "TypeScript", "AppSync", "GraphQL", "Lambda", "DynamoDB", "Step Functions", "Cognito", "CloudWatch"],
      github: "https://github.com/Pawan2804/Remote-Patient-Monitoring",
      demo: "https://rpm-demo.example.com",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "EventEcho",
      category: "Media Platform",
      description: "Media ingestion & moderation platform enabling guest uploads with automated content moderation using AWS Rekognition.",
      features: [
        "Guest uploads via S3 presigned URLs with CloudFront delivery",
        "Automated moderation pipeline (S3 → Lambda → Rekognition)",
        "Admin dashboard for content review (approve/flag/hide)",
        "Thumbnail generation and metadata extraction"
      ],
      technologies: ["React", "TypeScript", "S3", "CloudFront", "Lambda", "Rekognition", "DynamoDB", "EventBridge", "WAF"],
      github: "https://github.com/Pawan2804/CrowdLens-Backend",
      demo: "https://eventecho-demo.example.com",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Smart Contact Manager",
      category: "Full-Stack Web App",
      description: "Secure contact management system with JWT/session auth, role-based access, and rich-text editing capabilities.",
      features: [
        "JWT/session authentication with Spring Security",
        "Profile picture uploads (AWS S3/Local)",
        "Rich-text notes with TinyMCE editor",
        "Advanced search with paginated/sortable lists"
      ],
      technologies: ["Spring Boot", "MySQL", "Thymeleaf", "Bootstrap", "TinyMCE", "AWS S3"],
      github: "https://github.com/Pawan2804/Smart-Contact-Manager",
      demo: "https://contact-manager-demo.example.com",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop"
    }
  ],
  
  skills: {
    languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
    frontend: ["React", "Angular", "HTML", "CSS", "Bootstrap", "Thymeleaf"],
    backend: ["Spring Boot", "Node.js", "REST API", "GraphQL", "Microservices"],
    cloud: ["AWS Lambda", "S3", "CloudFront", "DynamoDB", "API Gateway", "AppSync", "Cognito", "Step Functions"],
    databases: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"],
    tools: ["Git", "GitHub", "JIRA", "Postman", "SonarQube", "JUnit", "Linux"]
  },
  
  education: [
    {
      id: 1,
      degree: "ME/M.Tech",
      institution: "RVCE",
      year: "2023",
      courses: ["Machine Learning", "Data Engineering", "DSA", "Cyber Security"],
      highlights: [
        "Student Placement Coordinator",
        "Published IEEE Paper on keyloggers and their avoidance techniques"
      ]
    },
    {
      id: 2,
      degree: "BE/B.Tech",
      institution: "CMR Institute of Technology",
      year: "2020",
      courses: ["OS", "Networking", "DBMS", "Web Development"]
    }
  ],
  
  publications: [
    {
      id: 1,
      title: "Keyloggers and Their Avoidance Techniques",
      publisher: "IEEE",
      year: "2023",
      type: "Research Paper",
      description: "Published research on cybersecurity techniques for detecting and preventing keylogger attacks."
    }
  ]
};
