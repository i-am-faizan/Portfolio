export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  image: string;
  secondaryImage: string;
  description: string;
  detailedDescription: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  features: string[];
  stack: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };
  role: string;
  year: string;
  client?: string;
  status?: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "nobroker",
    index: "001",
    name: "NoBroker — Property Ecosystem",
    category: "Real Estate & PropTech",
    image: "/images/projects/nobroker.png",
    secondaryImage: "/images/projects/nobroker-secondary.png",
    description: "Disruptive real estate platform utilizing a broker-free model with smart matching.",
    detailedDescription:
      "Enhanced real estate search relevance with polygon-based map selection logic, direct buyer-seller chat connections, and zero-brokerage property management features serving millions of users.",
    metrics: [
      { label: "Active Users", value: "10M+" },
      { label: "Lighthouse Score", value: "91%" },
      { label: "Brokerage Saved", value: "$100M+" },
      { label: "Platform Growth", value: "+50%" },
    ],
    highlights: [
      "Integrated map polygon spatial querying for instant neighbourhood rental lookups",
      "Engineered peer-to-peer chat notification pipeline connecting tenants and owners",
      "Optimized front-end rendering for property media galleries and virtual home tours",
    ],
    features: [
      "Zero-brokerage rental and buying property search engine",
      "Polygon interactive map drawing search filters",
      "Automated rental agreement generator and online deposit payment",
    ],
    stack: ["React", "Bootstrap", "Big Data", "JavaScript", "REST APIs"],
    architecture: {
      frontend: "React, Bootstrap, HTML5/CSS3, Mapbox GL",
      backend: "Node.js REST Services, Express microservices",
      database: "PostgreSQL & ElasticSearch for geo-spatial indexing",
      infrastructure: "AWS Elastic Container Service, Cloudflare CDN",
    },
    role: "Full Stack Engineer",
    year: "2023",
    client: "NoBroker Technologies",
    status: "Live Production",
    githubUrl: "https://github.com/i-am-faizan",
    liveUrl: "https://www.nobroker.in/",
  },
  {
    id: "soch",
    index: "002",
    name: "Soch — Ethnic Fashion",
    category: "Fashion & E-Commerce Marketplace",
    image: "/images/projects/soch.png",
    secondaryImage: "/images/projects/soch-secondary.png",
    description: "High-scale ethnic wear marketplace with advanced filtering and dynamic collections.",
    detailedDescription:
      "Redesigned digital storefront for leading fashion brand with 1M+ active users, supporting dynamic category listing, multi-layered filtration, and fast order checkout.",
    metrics: [
      { label: "Active Users", value: "1.2M" },
      { label: "Lighthouse Score", value: "94%" },
      { label: "Yearly Growth", value: "+12%" },
      { label: "Conversion Rate", value: "+3.8%" },
    ],
    highlights: [
      "Engineered scalable marketplace architecture supporting high-traffic flash sales",
      "Designed complex product filtering for sizes, colors, fabrics, and occasions",
      "Optimized page load speed and mobile checkout flows across pan-India orders",
    ],
    features: [
      "Dynamic collection showcases and curated lookbooks",
      "Multi-currency payment integration and location-based pricing",
      "Real-time order tracking and inventory sync across retail locations",
    ],
    stack: ["E-commerce", "Magento", "PHP", "JavaScript", "Tailwind CSS"],
    architecture: {
      frontend: "React & PWA Storefront, HTML5/CSS3",
      backend: "PHP, Magento E-Commerce Engine, REST APIs",
      database: "MySQL with read-replica caching",
      infrastructure: "AWS Cloud, Cloudflare CDN",
    },
    role: "Full Stack Developer",
    year: "2023",
    client: "Soch Clothing",
    status: "Live Production",
    githubUrl: "https://github.com/i-am-faizan",
    liveUrl: "https://www.soch.com/in/",
  },
  {
    id: "flink",
    index: "003",
    name: "Flink — Ultra-Fast Grocery",
    category: "Logistics & Rapid Delivery",
    image: "/images/projects/flink.png",
    secondaryImage: "/images/projects/flink-secondary.png",
    description: "Real-time delivery system optimized for local logistics and inventory management.",
    detailedDescription:
      "Optimized front-end for 10-minute grocery delivery with edge-cached assets, live rider GPS tracking, and micro-fulfillment inventory synchronization.",
    metrics: [
      { label: "App Users", value: "3M+" },
      { label: "Performance Rating", value: "97%" },
      { label: "Order Growth", value: "+80%" },
      { label: "Avg Delivery", value: "10 Mins" },
    ],
    highlights: [
      "Built mobile-first web app handling high-frequency instant order placements",
      "Implemented real-time WebSockets status updates from dark-stores to customers",
      "Engineered edge-cached catalog serving sub-100ms item queries",
    ],
    features: [
      "Instant cart building and automated micro-warehouse routing",
      "Live delivery status progress bar with WebSockets push updates",
      "Location-based product stock availability check",
    ],
    stack: ["React", "Node.js", "Delivery Platform", "WebSockets", "Express"],
    architecture: {
      frontend: "React, Mobile-First PWA, Tailwind CSS",
      backend: "Node.js, Express microservices",
      database: "MongoDB & Redis distributed locks",
      infrastructure: "AWS Elastic Container Service (ECS), Cloudflare",
    },
    role: "Senior Full Stack Engineer",
    year: "2023",
    client: "Flink SE",
    status: "Live Production",
    githubUrl: "https://github.com/i-am-faizan",
    liveUrl: "https://www.goflink.com/en",
  },
  {
    id: "tinypod",
    index: "004",
    name: "The TinyPod — Hardware Showcase",
    category: "Product Design & Hardware",
    image: "/images/projects/tinypod.png",
    secondaryImage: "/images/projects/tinypod-secondary.png",
    description: "A minimalist product landing page featuring high-fidelity animations and 3D interactions.",
    detailedDescription:
      "Crafted a cinematic product experience with custom WebGL, motion kinetics, and smooth scroll-triggered 3D model reveals.",
    metrics: [
      { label: "Performance Score", value: "99%" },
      { label: "Active Users", value: "50K+" },
      { label: "Social Reach", value: "Viral" },
      { label: "FPS Rate", value: "60 FPS" },
    ],
    highlights: [
      "Developed 3D interactive hardware wheel controller rendering in WebGL",
      "Engineered frame-accurate scroll kinetics and parallax camera transitions",
      "Optimized asset loading pipeline for sub-second initial LCP render",
    ],
    features: [
      "Cinematic product reveal animation with WebGL integration",
      "Interactive 3D model rotator and color selector",
      "Responsive dark-mode aesthetic layout with fluid typography",
    ],
    stack: ["React", "Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    architecture: {
      frontend: "Next.js App Router, React, Three.js, Framer Motion",
      backend: "Node.js REST Services for pre-order queues",
      database: "PostgreSQL & Redis for reservation locks",
      infrastructure: "Vercel Edge Network, AWS S3",
    },
    role: "Frontend & Creative Technologist",
    year: "2024",
    client: "tinyPod Inc.",
    status: "Live Production",
    githubUrl: "https://github.com/i-am-faizan",
    liveUrl: "https://thetinypod.com/",
  },
  {
    id: "vortexcubes",
    index: "005",
    name: "Vortexcubes — Systems Engine",
    category: "Enterprise Software & Cloud SaaS",
    image: "/images/projects/vortexcubes.png",
    secondaryImage: "/images/projects/vortexcubes-secondary.png",
    description: "Core corporate infrastructure for delivering custom software and AI solutions.",
    detailedDescription:
      "Architected enterprise web platform showcasing custom software solutions, high-throughput microservices, and AI-driven cloud automation services.",
    metrics: [
      { label: "Platform Traffic", value: "1M+" },
      { label: "System Speed", value: "99%" },
      { label: "Architecture", value: "Microservices" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    highlights: [
      "Developed high-performance corporate platform with modular section architecture",
      "Integrated interactive service inquiry flows and automated lead capture pipelines",
      "Optimized SEO and dynamic metadata rendering for global search indexing",
    ],
    features: [
      "Custom software solution catalog and interactive tech stack showcase",
      "Client project portal integration with security compliance gating",
      "Ultra-fast responsive layout with glassmorphic aesthetic tokens",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Cloud Infrastructure"],
    architecture: {
      frontend: "Next.js App Router, React, Tailwind CSS, Framer Motion",
      backend: "Node.js REST API & GraphQL microservices",
      database: "PostgreSQL & Redis distributed caching",
      infrastructure: "AWS Cloud, Docker, Cloudflare Security",
    },
    role: "Assistant Manager & Full Stack Developer",
    year: "2024",
    client: "Vortexcubes Technologies",
    status: "Live Production",
    githubUrl: "https://github.com/i-am-faizan",
    liveUrl: "https://www.vortexcubes.com/",
  },
];
