"use client"

import { useState, useMemo } from "react"
import { Search, Flame, Star, Monitor, Zap, Wrench, FlaskConical, BarChart3, Globe } from "lucide-react"
import { CourseCard } from "@/components/mentorship/course-card"

const categories = [
  { icon: Flame, label: "Trending Courses", color: "text-orange-500", key: "trending" },
  { icon: Star, label: "Popular Courses", color: "text-yellow-500", key: "popular" },
  { icon: Monitor, label: "Computer Science", color: "text-blue-500", key: "cs" },
  { icon: Zap, label: "Electrical and Electronics", color: "text-yellow-400", key: "ee" },
  { icon: Wrench, label: "Mechanical / Civil", color: "text-gray-500", key: "mech" },
  { icon: FlaskConical, label: "Biotechnology", color: "text-pink-500", key: "bio" },
  { icon: BarChart3, label: "Management", color: "text-purple-500", key: "mgmt" },
  { icon: Globe, label: "View all", color: "text-white", highlight: true, key: "all" },
]

const allCourses = {
  trending: [
    {
      id: 1,
      title: "AI Automation",
      rating: 4.6,
      reviews: 1897,
      description:
        "Whether you want to streamline workflows, build call agents, or launch your own automation-based startup, this course gives...",
      image: "/ai-automation-futuristic-blue-technology-interface.jpg",
    },
    {
      id: 2,
      title: "Web Development",
      rating: 4.9,
      reviews: 3897,
      description:
        "Web Development focuses on designing and building websites using modern technologies. Learn to create responsive, user-...",
      image: "/mobile-app-development-smartphone-interface.jpg",
    },
    {
      id: 3,
      title: "Python with Machine Learning",
      rating: 4.4,
      reviews: 2376,
      description:
        "Machine Learning combines programming and AI to develop intelligent systems. Master Python libraries and algorithms to...",
      image: "/python-programming-code-on-laptop-screen.jpg",
    },
    {
      id: 4,
      title: "Python with Data Science",
      rating: 4.5,
      reviews: 2465,
      description:
        "Data Science blends programming with analytical skills to extract insights from data. Learn to manipulate, visualize, and...",
      image: "/data-science-analytics-charts-graphs-visualization.jpg",
    },
  ],
  popular: [
    {
      id: 1,
      title: "AI Automation",
      rating: 4.6,
      reviews: 1897,
      description:
        "Whether you want to streamline workflows, build call agents, or launch your own automation-based startup, this course gives...",
      image: "/ai-automation-futuristic-blue-technology-interface.jpg",
    },
    {
      id: 2,
      title: "Cyber Security",
      rating: 4.8,
      reviews: 1675,
      description:
        "Cyber Security focuses on protecting systems from digital threats. Gain expertise in encryption, network security, and...",
      image: "/cyber-security-lock.jpg",
    },
    {
      id: 3,
      title: "Cloud Computing (Azure, AWS)",
      rating: 4.8,
      reviews: 922,
      description:
        "Cloud Computing leverages remote servers to store, manage, and process data. Master Azure and AWS platforms...",
      image: "/cloud-computing-azure-aws.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing",
      rating: 4.6,
      reviews: 1199,
      description:
        "Digital Marketing builds brands online. Learn SEO, social media, and analytics to create impactful campaigns and drive business...",
      image: "/digital-marketing-strategy.png",
    },
  ],
  cs: [
    {
      id: 1,
      title: "Web Development",
      rating: 4.9,
      reviews: 3897,
      description:
        "Web Development focuses on designing and building websites using modern technologies. Learn to create responsive, user-...",
      image: "/web-development-coding.png",
    },
    {
      id: 2,
      title: "Python with Machine Learning",
      rating: 4.4,
      reviews: 2376,
      description:
        "Machine Learning combines programming and AI to develop intelligent systems. Master Python libraries and algorithms to...",
      image: "/python-machine-learning.jpg",
    },
    {
      id: 3,
      title: "Python with Data Science",
      rating: 4.5,
      reviews: 2465,
      description:
        "Data Science blends programming with analytical skills to extract insights from data. Learn to manipulate, visualize, and...",
      image: "/data-science-analytics.jpg",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      rating: 4.7,
      reviews: 4143,
      description:
        "Artificial Intelligence focuses on creating smart systems that mimic human intelligence. Dive into neural networks, deep...",
      image: "/artificial-intelligence-brain.jpg",
    },
    {
      id: 5,
      title: "Cyber Security",
      rating: 4.8,
      reviews: 1675,
      description:
        "Cyber Security focuses on protecting systems from digital threats. Gain expertise in encryption, network security, and...",
      image: "/cyber-security-lock.jpg",
    },
    {
      id: 6,
      title: "Cloud Computing (Azure, AWS)",
      rating: 4.8,
      reviews: 922,
      description:
        "Cloud Computing leverages remote servers to store, manage, and process data. Master Azure and AWS platforms...",
      image: "/cloud-computing-azure-aws.jpg",
    },
    {
      id: 7,
      title: "App Development",
      rating: 4.3,
      reviews: 874,
      description:
        "App Development focuses on creating mobile applications for Android devices. Learn to design, develop, and deploy...",
      image: "/mobile-app-development-smartphone-interface.jpg",
    },
  ],
  ee: [
    {
      id: 1,
      title: "Embedded Systems",
      rating: 4.4,
      reviews: 900,
      description:
        "Embedded Systems combine software and hardware for specialized applications. Gain expertise in microcontrollers and...",
      image: "/embedded-systems-circuit.jpg",
    },
    {
      id: 2,
      title: "Hybrid Electric Vehicle",
      rating: 4.2,
      reviews: 851,
      description:
        "Hybrid Electric Vehicles focus on eco-friendly automotive technology. Learn about electric motors, batteries, and energy...",
      image: "/futuristic-electric-vehicle.png",
    },
    {
      id: 3,
      title: "Internet of Things",
      rating: 4.7,
      reviews: 969,
      description:
        "Internet of Things connects devices to create smarter systems. Learn to develop IoT solutions that enhance connectivity...",
      image: "/internet-of-things-sensors.jpg",
    },
    {
      id: 4,
      title: "Robotics",
      rating: 4.8,
      reviews: 1010,
      description:
        "Robotics involves designing machines to automate tasks. Explore mechanical systems, programming, and AI to build and...",
      image: "/iot-robotics.jpg",
    },
    {
      id: 5,
      title: "IoT & Robotics",
      rating: 4.7,
      reviews: 969,
      description:
        "Explore the intersection of IoT and Robotics—develop smart, connected systems that automate tasks and enhance...",
      image: "/iot-robotics.jpg",
    },
    {
      id: 6,
      title: "VLSI",
      rating: 4.9,
      reviews: 1073,
      description:
        "Very Large Scale Integration (VLSI) focuses on chip design for electronics. Master circuit design techniques for...",
      image: "/vlsi-chip-design.jpg",
    },
  ],
  mech: [
    {
      id: 1,
      title: "Hybrid Electric Vehicle",
      rating: 4.2,
      reviews: 851,
      description:
        "Hybrid Electric Vehicles focus on eco-friendly automotive technology. Learn about electric motors, batteries, and energy...",
      image: "/futuristic-electric-vehicle.png",
    },
    {
      id: 2,
      title: "IoT & Robotics",
      rating: 4.7,
      reviews: 969,
      description:
        "Explore the intersection of IoT and Robotics—develop smart, connected systems that automate tasks and enhance...",
      image: "/iot-robotics.jpg",
    },
    {
      id: 3,
      title: "VLSI",
      rating: 4.9,
      reviews: 1073,
      description:
        "Very Large Scale Integration (VLSI) focuses on chip design for electronics. Master circuit design techniques for...",
      image: "/vlsi-chip-design.jpg",
    },
    {
      id: 4,
      title: "Car Design",
      rating: 4.7,
      reviews: 1107,
      description:
        "Car Design blends creativity and engineering to create futuristic vehicles. Learn the art of automotive design and...",
      image: "/car-design-automotive.jpg",
    },
    {
      id: 5,
      title: "AutoCAD",
      rating: 4.2,
      reviews: 1127,
      description:
        "AutoCAD is a key tool for drafting and designing. Master its functionalities to create detailed technical drawings...",
      image: "/autocad-design.jpg",
    },
    {
      id: 6,
      title: "Construction Planning & Structural Analysis",
      rating: 4.6,
      reviews: 824,
      description:
        "Construction Planning focuses on efficient project execution. Learn to manage timelines, resources, and structural...",
      image: "/construction-planning.png",
    },
  ],
  bio: [
    {
      id: 1,
      title: "Nano Technology",
      rating: 4.6,
      reviews: 853,
      description:
        "Nano Technology explores materials at the molecular level. Learn to innovate in medicine, electronics, and materials...",
      image: "/nano-technology.jpg",
    },
    {
      id: 2,
      title: "Genetic Engineering",
      rating: 4.5,
      reviews: 843,
      description:
        "Genetic Engineering modifies DNA for better outcomes. Learn the science behind CRISPR, gene therapy, and bio...",
      image: "/genetic-engineering-dna.jpg",
    },
    {
      id: 3,
      title: "Molecular Biology",
      rating: 4.2,
      reviews: 1080,
      description:
        "Molecular Biology studies the building blocks of life. Explore DNA, RNA, and proteins to understand cellular processes...",
      image: "/molecular-biology.jpg",
    },
    {
      id: 4,
      title: "Microbiology",
      rating: 4.3,
      reviews: 1138,
      description:
        "Microbiology examines microorganisms that impact life. Learn about bacteria, viruses, and fungi in health and...",
      image: "/microbiology-lab.jpg",
    },
    {
      id: 5,
      title: "Bioinformatics",
      rating: 4.4,
      reviews: 996,
      description:
        "Bioinformatics merges biology with technology. Learn to analyze genetic data and develop tools for biological research...",
      image: "/bioinformatics-dna-code.jpg",
    },
  ],
  mgmt: [
    {
      id: 1,
      title: "Finance",
      rating: 4.3,
      reviews: 1675,
      description:
        "Finance focuses on managing money and investments. Learn the principles of budgeting, risk assessment, and financial...",
      image: "/finance-money.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing",
      rating: 4.6,
      reviews: 1199,
      description:
        "Digital Marketing builds brands online. Learn SEO, social media, and analytics to create impactful campaigns and drive business...",
      image: "/digital-marketing-strategy.png",
    },
    {
      id: 3,
      title: "Human Resource",
      rating: 4.7,
      reviews: 1543,
      description:
        "Human Resource focuses on managing workplace talent. Learn recruitment, employee engagement, and organizational behavior...",
      image: "/human-resource-management.jpg",
    },
    {
      id: 4,
      title: "Stock Market",
      rating: 4.3,
      reviews: 997,
      description:
        "The Stock Market focuses on trading and investments. Learn market analysis, portfolio management, and strategies for long...",
      image: "/stock-market-trading.jpg",
    },
  ],
}

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("trending")
  const [searchQuery, setSearchQuery] = useState("")

  const displayedCourses = useMemo(() => {
    let courses =
      activeCategory === "all"
        ? Object.values(allCourses).flat()
        : allCourses[activeCategory as keyof typeof allCourses] || allCourses.trending

    if (searchQuery.trim()) {
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return courses
  }, [activeCategory, searchQuery])

  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1a1a2e] mb-6 sm:mb-8 lg:mb-10">Courses Available</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all ${
                category.highlight
                  ? "bg-[#FF6B4A]/10 text-[#FF6B4A] hover:bg-[#FF6B4A]/20"
                  : activeCategory === category.key
                    ? "bg-[#FF6B4A] text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <category.icon className={`h-5 w-5 ${activeCategory === category.key ? "text-white" : category.color}`} />
              <span className="text-sm lg:text-base font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="🔍 Search courses, topics, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]/20 focus:border-[#FF6B4A] text-gray-700 text-sm transition-all"
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {displayedCourses.map((course, index) => (
            <CourseCard key={`${course.id}-${index}`} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

