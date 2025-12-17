"use client"

import { useState, useMemo } from "react"
import { Search, Flame, Star, Monitor, Zap, Wrench, FlaskConical, BarChart3, Globe } from "lucide-react"
import { CourseCard } from "@/components/course-card"

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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Web Development",
      rating: 4.9,
      reviews: 3897,
      description:
        "Web Development focuses on designing and building websites using modern technologies. Learn to create responsive, user-...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      rating: 4.7,
      reviews: 4143,
      description:
        "Artificial Intelligence focuses on creating smart systems that mimic human intelligence. Dive into neural networks, deep...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Python with Data Science",
      rating: 4.5,
      reviews: 2465,
      description:
        "Data Science blends programming with analytical skills to extract insights from data. Learn to manipulate, visualize, and...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Cyber Security",
      rating: 4.8,
      reviews: 1675,
      description:
        "Cyber Security focuses on protecting systems from digital threats. Gain expertise in encryption, network security, and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Cloud Computing (Azure, AWS)",
      rating: 4.8,
      reviews: 922,
      description:
        "Cloud Computing leverages remote servers to store, manage, and process data. Master Azure and AWS platforms...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Digital Marketing",
      rating: 4.6,
      reviews: 1199,
      description:
        "Digital Marketing builds brands online. Learn SEO, social media, and analytics to create impactful campaigns and drive business...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Python with Machine Learning",
      rating: 4.4,
      reviews: 2376,
      description:
        "Machine Learning combines programming and AI to develop intelligent systems. Master Python libraries and algorithms to...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Python with Data Science",
      rating: 4.5,
      reviews: 2465,
      description:
        "Data Science blends programming with analytical skills to extract insights from data. Learn to manipulate, visualize, and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      rating: 4.7,
      reviews: 4143,
      description:
        "Artificial Intelligence focuses on creating smart systems that mimic human intelligence. Dive into neural networks, deep...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Cyber Security",
      rating: 4.8,
      reviews: 1675,
      description:
        "Cyber Security focuses on protecting systems from digital threats. Gain expertise in encryption, network security, and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Cloud Computing (Azure, AWS)",
      rating: 4.8,
      reviews: 922,
      description:
        "Cloud Computing leverages remote servers to store, manage, and process data. Master Azure and AWS platforms...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "App Development",
      rating: 4.3,
      reviews: 874,
      description:
        "App Development focuses on creating mobile applications for Android devices. Learn to design, develop, and deploy...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Hybrid Electric Vehicle",
      rating: 4.2,
      reviews: 851,
      description:
        "Hybrid Electric Vehicles focus on eco-friendly automotive technology. Learn about electric motors, batteries, and energy...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Internet of Things",
      rating: 4.7,
      reviews: 969,
      description:
        "Internet of Things connects devices to create smarter systems. Learn to develop IoT solutions that enhance connectivity...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Robotics",
      rating: 4.8,
      reviews: 1010,
      description:
        "Robotics involves designing machines to automate tasks. Explore mechanical systems, programming, and AI to build and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "IoT & Robotics",
      rating: 4.7,
      reviews: 969,
      description:
        "Explore the intersection of IoT and Robotics—develop smart, connected systems that automate tasks and enhance...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "VLSI",
      rating: 4.9,
      reviews: 1073,
      description:
        "Very Large Scale Integration (VLSI) focuses on chip design for electronics. Master circuit design techniques for...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "IoT & Robotics",
      rating: 4.7,
      reviews: 969,
      description:
        "Explore the intersection of IoT and Robotics—develop smart, connected systems that automate tasks and enhance...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "VLSI",
      rating: 4.9,
      reviews: 1073,
      description:
        "Very Large Scale Integration (VLSI) focuses on chip design for electronics. Master circuit design techniques for...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Car Design",
      rating: 4.7,
      reviews: 1107,
      description:
        "Car Design blends creativity and engineering to create futuristic vehicles. Learn the art of automotive design and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "AutoCAD",
      rating: 4.2,
      reviews: 1127,
      description:
        "AutoCAD is a key tool for drafting and designing. Master its functionalities to create detailed technical drawings...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Construction Planning & Structural Analysis",
      rating: 4.6,
      reviews: 824,
      description:
        "Construction Planning focuses on efficient project execution. Learn to manage timelines, resources, and structural...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Genetic Engineering",
      rating: 4.5,
      reviews: 843,
      description:
        "Genetic Engineering modifies DNA for better outcomes. Learn the science behind CRISPR, gene therapy, and bio...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Molecular Biology",
      rating: 4.2,
      reviews: 1080,
      description:
        "Molecular Biology studies the building blocks of life. Explore DNA, RNA, and proteins to understand cellular processes...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Microbiology",
      rating: 4.3,
      reviews: 1138,
      description:
        "Microbiology examines microorganisms that impact life. Learn about bacteria, viruses, and fungi in health and...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Bioinformatics",
      rating: 4.4,
      reviews: 996,
      description:
        "Bioinformatics merges biology with technology. Learn to analyze genetic data and develop tools for biological research...",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Digital Marketing",
      rating: 4.6,
      reviews: 1199,
      description:
        "Digital Marketing builds brands online. Learn SEO, social media, and analytics to create impactful campaigns and drive business...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Human Resource",
      rating: 4.7,
      reviews: 1543,
      description:
        "Human Resource focuses on managing workplace talent. Learn recruitment, employee engagement, and organizational behavior...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Stock Market",
      rating: 4.3,
      reviews: 997,
      description:
        "The Stock Market focuses on trading and investments. Learn market analysis, portfolio management, and strategies for long...",
      image: "/placeholder.svg?height=200&width=300",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-12">Courses Available</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl border transition-all ${
              category.highlight
                ? "bg-[#e85a4f]/10 text-[#e85a4f] border-[#e85a4f]/30 hover:bg-[#e85a4f] hover:text-white"
                : activeCategory === category.key
                  ? "bg-[#e85a4f] text-white border-[#e85a4f]"
                  : "border-gray-200 text-[#1a1a2e] hover:border-[#e85a4f]"
            }`}
          >
            <category.icon className={`h-5 w-5 ${activeCategory === category.key ? "text-white" : category.color}`} />
            <span className="font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="🔍 Search courses, topics, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e85a4f] text-gray-600"
        />
      </div>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCourses.map((course, index) => (
          <CourseCard key={`${course.id}-${index}`} course={course} />
        ))}
      </div>
    </section>
  )
}
