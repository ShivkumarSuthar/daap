import { FaChartBar, FaChessKnight, FaCode, FaPaintBrush, FaPencilAlt, FaSearch } from "react-icons/fa";

export const COMPANY_INFO = {
  name: "DAP Solution",
  logo: "/images/logo.png", // Update with the actual path
  email: "contact@youragency.com",
  phone: "+1 234 567 890",
  address: "1234 IT Street, Tech City, USA",
  socialLinks: {
    facebook: "https://facebook.com/youragency",
    twitter: "https://twitter.com/youragency",
    linkedin: "https://linkedin.com/company/youragency"
  },
  clients: [
    { name: "Client 1", image: "/images/clients/download.jpg" },
    { name: "Client 2", image: "/images/clients/client2.jpg" },
    { name: "Client 3", image: "/images/clients/client2.jpg" },
    { name: "50k+", image: "", isCount: true },
  ],
  graphics: [
    { id: 1, title: "Crafting Brands That Speak Volumes", image: "/images/graphics/card1.jpg" },
    { id: 2, title: "Crafting Brands That Speak Volumes", image: "/images/graphics/card2.jpg" }
  ],
  aboutSection: {
    title: "We Are Pioneers in the World of Digital Transformation.",
    description: [
      "At DAP Solutions, we are a team of innovators, strategists, and tech enthusiasts dedicated to delivering cutting-edge digital solutions. As a top-tier IT agency, we specialize in web development, mobile applications, UI/UX design, and digital transformation.",
      "Our expertise ensures seamless, customer-centric solutions that drive engagement, enhance user experience, and accelerate business growth.",
    ],
    mainImage: {
      src: "/images/banners/about-video.jpg",
      alt: "About DAP Solutions",
      width: 780,
      height: 280,
    },
    smallImage: {
      src: "/images/banners/about-small.jpg",
      alt: "Our Team",
      width: 220,
      height: 150,
    },
  },
  services: [
    {
      id: 1,
      title: "Content Creation and Management",
      description: "Website design and development involves creating and maintaining a website.",
      // icon: <FaPencilAlt className="text-orange-500 text-4xl" />,
      image: '/images/global/service/10793.jpg'
    },
    {
      id: 2,
      title: "UI & UX Design and Branding",
      description: "Website design and development involves creating and maintaining a website.",
      // icon: <FaPaintBrush className="text-orange-500 text-4xl" />,
      image:''
    },
    {
      id: 3,
      title: "Website Design and Development",
      description: "Website design and development involves creating and maintaining a website.",
      // icon: <FaCode className="text-orange-500 text-4xl" />,
      image:''
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      description: "The goal is to increase the quantity and quality of traffic to the website.",
      // icon: <FaSearch className="text-orange-500 text-4xl" />,
      image:''
    },
    {
      id: 5,
      title: "Brand Experience Design",
      description: "Brand experience design is the process of creating meaningful interactions.",
      // icon: <FaChartBar className="text-orange-500 text-4xl" />,
      image:''
    },
    {
      id: 6,
      title: "Brand Strategy & Collateral Design",
      description: "Brand strategy is a long-term plan for the development of a successful brand.",
      // icon: <FaChessKnight className="text-orange-500 text-4xl" />,
      image:''
    },
  ],
  portfolio: [
    { title: "Web Design", image: "/images/portfolio/web-design.jpg" },
    { title: "Content Creation", image: "/images/portfolio/content-creation.jpg" },
    { title: "Brand Experience Design", image: "/images/portfolio/brand-experience.jpg" },
    { title: "Strategic Branding", image: "/images/portfolio/strategic-branding.jpg" },
    { title: "Collateral Design", image: "/images/portfolio/collateral-design.jpg" },
    { title: "Brand Strategy", image: "/images/portfolio/brand-strategy.jpg" },
    { title: "Brand Identity", image: "/images/portfolio/brand-identity.jpg" },
  ],
  blogs: [
    {
      id: 1,
      title: "The Future of Web Development",
      date: "March 10, 2025",
      image: "/images/blogs/web-development.jpg",
      link: "/blog/the-future-of-web-development",
    },
    {
      id: 2,
      title: "UI/UX Trends to Watch in 2025",
      date: "March 5, 2025",
      image: "/images/blogs/uiux-trends.jpg",
      link: "/blog/uiux-trends-2025",
    },
    {
      id: 3,
      title: "Boost Your SEO Rankings in 2025",
      date: "February 28, 2025",
      image: "/images/blogs/seo-rankings.jpg",
      link: "/blog/boost-seo-rankings",
    },
  ],
 topBrands: [
  "Building the Future of Digital Innovation 🚀",
  "Turning Ideas into Reality, One Line of Code at a Time 💡",
  "User-Centered Designs That Drive Engagement 🎯",
  "From Concept to Launch—We Make It Happen ⚡",
],

bottomBrands: [
  "Revolutionizing Brands with Next-Gen Solutions 🌎",
  "Where Creativity Meets Cutting-Edge Technology 🎨",
  "Your Success is Our Mission 🚀",
  "Crafting Experiences, Not Just Websites ✨",
],

  footerLinks: {
    pages: ["Home", "About", "Service", "Pricing", "Contact"],
    utilityPages: ["Password Protected", "404 Not Found", "Style Guide", "Licenses", "Changelog"],
  },
  TECH_CATEGORIES : [
    "Frontend Technologies",
    "Backend Technologies",
    "Mobile Technologies",
    "Platforms",
    "Databases / Data Storage",
    "DevOps Stack",
  ],
  TECH_STACK : {
    "Frontend Technologies": [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Next.js",
      "Nuxt.js",
      "Ember.js",
      "Backbone.js",
    ],
    "Backend Technologies": [
      "Node.js",
      "Express.js",
      "Django",
      "Ruby on Rails",
      "Spring Boot",
      "Flask",
      "FastAPI",
      "FastAPI",
    ],
    "Mobile Technologies": [
      "React Native",
      "Flutter",
      "Swift",
      "Swift",
      "Swift",
      "Kotlin",
      "Xamarin",
      "Xamarin",
    ],
    "Platforms": [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Heroku",
      "Heroku",
      "Heroku",
      "Heroku",
      "Firebase",
    ],
    "Databases / Data Storage": [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Cassandra",
      "Elasticsearch",
    ],
    "DevOps Stack": [
      "Docker",
      "Kubernetes",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
    ],
  },
  TECH_IMAGES : {
    "React": "/images/global/Next.png",
    "Vue": "/images/tech/vue.png",
    "Angular": "/images/tech/Angular.png",
    "Svelte": "/images/tech/svelte.png",
    "Next.js": "/images/tech/Next.png",
    "Nuxt.js": "/images/tech/nuxtjs.png",
    "Ember.js": "/images/tech/ember.png",
    "Backbone.js": "/images/tech/backbone.png",
    "Node.js": "/images/tech/nodejs.png",
    "Express.js": "/images/tech/express.png",
    "Django": "/images/tech/django.png",
    "Ruby on Rails": "/images/tech/rails.png",
    "Spring Boot": "/images/tech/springboot.png",
    "Flask": "/images/tech/flask.png",
    "FastAPI": "/images/tech/fastapi.png",
    "React Native": "/images/tech/reactnative.png",
    "Flutter": "/images/tech/flutter.png",
    "Swift": "/images/tech/swift.png",
    "Kotlin": "/images/tech/kotlin.png",
    "Xamarin": "/images/tech/xamarin.png",
    "AWS": "/images/tech/aws.png",
    "Google Cloud": "/images/tech/gcp.png",
    "Microsoft Azure": "/images/tech/azure.png",
    "Heroku": "/images/tech/heroku.png",
    "Firebase": "/images/tech/firebase.png",
    "MongoDB": "/images/tech/mongodb.png",
    "PostgreSQL": "/images/tech/postgresql.png",
    "MySQL": "/images/tech/mysql.png",
    "Redis": "/images/tech/redis.png",
    "Cassandra": "/images/tech/cassandra.png",

    "Elasticsearch": "/images/tech/elasticsearch.png",
    
    "Docker": "/images/tech/docker.png",
    "Kubernetes": "/images/tech/kubernetes.png",
    "Jenkins": "/images/tech/jenkins.png",
    "GitHub Actions": "/images/tech/githubactions.png",
    "Terraform": "/images/tech/terraform.png",
  },
  contact:{
    primary_key: 'sWy3hqJ6OV6wnaHkN',
    template_id:'template_rghfcrg',
    service_id:'service_tvvj2qk'
  }
};
