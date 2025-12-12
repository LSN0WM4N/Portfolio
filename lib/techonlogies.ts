interface TechnologyInfo {
  id: string;
  title: string;
  description: string;
  usedInProjects: string[];
}

export function getTechnologyInfo(technologyName: string): TechnologyInfo {
  const normalizedName = technologyName.toLowerCase().trim();
  
  if (technologiesDatabase[normalizedName])
    return { ...technologiesDatabase[normalizedName] };

  
  const variations: Record<string, string> = {
    'js': 'javascript',
    'ts': 'typescript',
    'py': 'python',
    'c++': 'cpp',
    'golang': 'go',
    'html5': 'html',
    'css3': 'css',
    'next': 'nextjs',
    'expressjs': 'express',
    'node': 'nodejs',
    'reactjs': 'react',
    'tailwindcss': 'tailwind',
    'mongo': 'mongodb',
    'postgres': 'postgresql',
    'k8s': 'kubernetes',
    'aws cloud': 'aws',
    'fb': 'firebase',
    'gql': 'graphql',
    'github actions': 'github',
    'vitejs': 'vite',
    '3js': 'threejs',
    'socket': 'socketio',
    'nest': 'nestjs',
    'django framework': 'django',
    'tf': 'tensorflow',
    'torch': 'pytorch'
  };
  
  if (variations[normalizedName]) {
    return { ...technologiesDatabase[variations[normalizedName]] };
  }
  
  for (const [_, tech] of Object.entries(technologiesDatabase)) {
    if (tech.title.toLowerCase().includes(normalizedName) || 
        normalizedName.includes(tech.title.toLowerCase())) {
      return { ...tech };
    }
  }
  
  return {
		title: technologyName,
		description: "No description",
		id: technologyName,
		usedInProjects: [],
	};
}

const technologiesDatabase: Record<string, TechnologyInfo> = {
  javascript: {
    id: "javascript",
    title: "JavaScript",
    description: "Versatile programming language for web development, both frontend and backend. Enables creating interactive browser experiences.",
    usedInProjects: []
  },
  typescript: {
    id: "typescript",
    title: "TypeScript",
    description: "JavaScript superset that adds static typing, improving code maintainability, scalability, and developer experience with intelligent autocompletion.",
    usedInProjects: []
  },
  react: {
    id: "react",
    title: "React",
    description: "JavaScript library for building interactive user interfaces based on reusable components and declarative state management.",
    usedInProjects: []
  },
  nextjs: {
    id: "nextjs",
    title: "Next.js",
    description: "React framework with server-side rendering (SSR), static site generation (SSG), and file-based routing for production-ready applications.",
    usedInProjects: []
  },
  nodejs: {
    id: "nodejs",
    title: "Node.js",
    description: "JavaScript runtime environment for server-side development, ideal for building scalable backend applications and real-time systems.",
    usedInProjects: []
  },
  express: {
    id: "express",
    title: "Express.js",
    description: "Minimalist and flexible web framework for Node.js that simplifies RESTful API development and web applications.",
    usedInProjects: []
  },
  python: {
    id: "python",
    title: "Python",
    description: "High-level interpreted programming language known for its clean syntax and versatility in data science, AI, and backend development.",
    usedInProjects: []
  },
  c: {
    id: "c",
    title: "C",
    description: "General-purpose programming language designed to be simple, portable and efficient.",
    usedInProjects: []
  },
  cpp: {
    id: "cpp",
    title: "C++",
    description: "General-purpose compiled programming language, efficient in performance and widely used in systems, games, and high-performance applications.",
    usedInProjects: []
  },
  go: {
    id: "go",
    title: "Go",
    description: "Statically typed compiled language developed by Google, known for its simplicity, concurrency support, and efficient performance.",
    usedInProjects: []
  },
  html: {
    id: "html",
    title: "HTML",
    description: "Markup language for creating and structuring web pages, defining the content and basic layout of websites.",
    usedInProjects: []
  },
  css: {
    id: "css",
    title: "CSS",
    description: "Style sheet language used to describe the presentation and visual design of web pages written in HTML.",
    usedInProjects: []
  },
  tailwind: {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    usedInProjects: []
  },
  mongodb: {
    id: "mongodb",
    title: "MongoDB",
    description: "NoSQL document-oriented database that stores data in flexible JSON-like documents, ideal for scalable applications.",
    usedInProjects: []
  },
	sql: {
		id: "sql",
		title: "SQL",
		description: "Relational database language that allows to extract from data tables a series of records with selection, sorting and computation criteria, or to update, delete or add records.",
		usedInProjects: []
	},
  postgresql: {
    id: "postgresql",
    title: "PostgreSQL",
    description: "Advanced open-source relational database with strong emphasis on extensibility and SQL compliance.",
    usedInProjects: []
  },
  docker: {
    id: "docker",
    title: "Docker",
    description: "Platform for developing, shipping, and running applications in containers, ensuring consistency across environments.",
    usedInProjects: []
  },
  kubernetes: {
    id: "kubernetes",
    title: "Kubernetes",
    description: "Container orchestration system for automating deployment, scaling, and management of containerized applications.",
    usedInProjects: []
  },
  aws: {
    id: "aws",
    title: "AWS",
    description: "Amazon Web Services cloud platform offering over 200 services including computing, storage, and databases.",
    usedInProjects: []
  },
  firebase: {
    id: "firebase",
    title: "Firebase",
    description: "Google's mobile and web application development platform with real-time database, authentication, and hosting services.",
    usedInProjects: []
  },
  graphql: {
    id: "graphql",
    title: "GraphQL",
    description: "Query language for APIs that enables clients to request exactly the data they need, reducing over-fetching.",
    usedInProjects: []
  },
  redis: {
    id: "redis",
    title: "Redis",
    description: "In-memory data structure store used as a database, cache, and message broker with exceptional performance.",
    usedInProjects: []
  },
  git: {
    id: "git",
    title: "Git",
    description: "Distributed version control system for tracking changes in source code during software development.",
    usedInProjects: []
  },
  github: {
    id: "github",
    title: "GitHub",
    description: "Web-based platform for version control and collaboration using Git, offering code hosting and CI/CD features.",
    usedInProjects: []
  },
  jest: {
    id: "jest",
    title: "Jest",
    description: "JavaScript testing framework with a focus on simplicity, supporting unit, integration, and snapshot testing.",
    usedInProjects: []
  },
  webpack: {
    id: "webpack",
    title: "Webpack",
    description: "Static module bundler for modern JavaScript applications that transforms and bundles assets.",
    usedInProjects: []
  },
  vite: {
    id: "vite",
    title: "Vite",
    description: "Next-generation frontend tooling that provides faster development server start and hot module replacement.",
    usedInProjects: []
  },
  redux: {
    id: "redux",
    title: "Redux",
    description: "Predictable state container for JavaScript applications, helping manage global application state.",
    usedInProjects: []
  },
  threejs: {
    id: "threejs",
    title: "Three.js",
    description: "Cross-browser JavaScript library used to create and display animated 3D computer graphics in a web browser.",
    usedInProjects: []
  },
  socketio: {
    id: "socketio",
    title: "Socket.IO",
    description: "JavaScript library for real-time, bidirectional communication between web clients and servers.",
    usedInProjects: []
  },
  nestjs: {
    id: "nestjs",
    title: "NestJS",
    description: "Progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    usedInProjects: []
  },
  swift: {
    id: "swift",
    title: "Swift",
    description: "Powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development.",
    usedInProjects: []
  },
  kotlin: {
    id: "kotlin",
    title: "Kotlin",
    description: "Modern programming language that makes developers happier, fully interoperable with Java for Android development.",
    usedInProjects: []
  },
  rust: {
    id: "rust",
    title: "Rust",
    description: "Systems programming language focused on safety, speed, and concurrency, preventing segfaults and guaranteeing thread safety.",
    usedInProjects: []
  },
  django: {
    id: "django",
    title: "Django",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    usedInProjects: []
  },
  flask: {
    id: "flask",
    title: "Flask",
    description: "Lightweight WSGI web application framework in Python, easy to get started and extendable.",
    usedInProjects: []
  },
  springboot: {
    id: "springboot",
    title: "Spring Boot",
    description: "Java-based framework used to create stand-alone, production-grade Spring based applications with minimal configuration.",
    usedInProjects: []
  },
  tensorflow: {
    id: "tensorflow",
    title: "TensorFlow",
    description: "Open-source platform for machine learning and artificial intelligence, developed by Google.",
    usedInProjects: []
  },
  pytorch: {
    id: "pytorch",
    title: "PyTorch",
    description: "Open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing.",
    usedInProjects: []
  }
};
