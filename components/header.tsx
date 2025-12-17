"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

// Helper function to convert course name to URL
const getCourseUrl = (courseName: string) => {
  const urlMap: { [key: string]: string } = {
    "AI Automation": "/ai-automation-courses",
    "Web Development": "/web-development-course",
    "Python with Machine Learning": "/machine-learning-course",
    "Python with Data Science": "/machine-learning-course",
    "Cyber Security": "/cyber-security-course",
    "Artificial Intelligence": "/ai-automation-courses",
    "AutoCAD": "/autocad-course",
    "Car Design": "/car-design-course",
    "Hybrid Electric Vehicle": "/hybrid-electric-vehicle-course",
    "Construction Planning": "/construction-planning-course",
    "Embedded Systems": "/embedded-systems-course",
    "IoT & Robotics": "/iot-robotics-course",
    "VLSI": "/vlsi-course",
    "Internet of Things": "/iot-robotics-course",
    "Genetic Engineering": "/genetic-engineering-course",
    "Molecular Biology": "/molecular-biology-course",
    "Microbiology": "/microbiology-course",
    "Nano Technology": "/nano-technology-course",
    "Finance": "/finance-course",
    "Digital Marketing": "/digital-marketing-course",
    "Human Resource": "/human-resource-course",
    "Stock Market": "/stock-market-course",
  }
  return urlMap[courseName] || "#"
}

const domains = [
  {
    name: "Computer Science",
    courses: [
      { name: "AI Automation", image: "/ai-automation-technology.jpg" },
      { name: "Web Development", image: "/web-development-coding.png" },
      { name: "Python with Machine Learning", image: "/python-machine-learning.jpg" },
      { name: "Python with Data Science", image: "/data-science-analytics.jpg" },
      { name: "Cyber Security", image: "/cyber-security-lock.jpg" },
      { name: "Artificial Intelligence", image: "/artificial-intelligence-brain.jpg" },
    ],
  },
  {
    name: "Mechanical & Civil",
    courses: [
      { name: "AutoCAD", image: "/autocad-design.jpg" },
      { name: "Car Design", image: "/car-design-automotive.jpg" },
      { name: "Hybrid Electric Vehicle", image: "/futuristic-electric-vehicle.png" },
      { name: "Construction Planning", image: "/construction-planning.png" },
    ],
  },
  {
    name: "Electrical & Electronics",
    courses: [
      { name: "Embedded Systems", image: "/embedded-systems-circuit.jpg" },
      { name: "IoT & Robotics", image: "/iot-robotics.jpg" },
      { name: "VLSI", image: "/vlsi-chip-design.jpg" },
      { name: "Internet of Things", image: "/internet-of-things-sensors.jpg" },
    ],
  },
  {
    name: "Biotechnology",
    courses: [
      { name: "Genetic Engineering", image: "/genetic-engineering-dna.jpg" },
      { name: "Molecular Biology", image: "/molecular-biology.jpg" },
      { name: "Microbiology", image: "/microbiology-lab.jpg" },
      { name: "Nano Technology", image: "/nano-technology.jpg" },
    ],
  },
  {
    name: "Management",
    courses: [
      { name: "Finance", image: "/finance-money.jpg" },
      { name: "Digital Marketing", image: "/digital-marketing-strategy.png" },
      { name: "Human Resource", image: "/placeholder.svg?height=60&width=60" },
      { name: "Stock Market", image: "/stock-market-trading.jpg" },
    ],
  },
]

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeDomain, setActiveDomain] = useState(domains[0].name)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const activeCourses = domains.find((d) => d.name === activeDomain)?.courses || []

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-gray-800">Launch</span>
              <span className="text-[#ff6b4a]">ed</span>
            </span>
            <span className="text-[#ff6b4a] text-2xl ml-1">🚀</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-700 font-medium hover:text-[#ff6b4a] transition-colors">
              Placement Accelerator
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 font-medium transition-colors ${
                  isDropdownOpen
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-[#ff6b4a]"
                }`}
              >
                Career Launchpad
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden -translate-x-1/4">
                  <div className="flex">
                    {/* Left sidebar - Explore Domains */}
                    <div className="w-64 bg-gray-50 p-4 border-r border-gray-100">
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">Explore Domains</h3>
                      <div className="space-y-1">
                        {domains.map((domain) => (
                          <button
                            key={domain.name}
                            onMouseEnter={() => setActiveDomain(domain.name)}
                            onClick={() => setActiveDomain(domain.name)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                              activeDomain === domain.name
                                ? "bg-[#e85a4f] text-white"
                                : "text-[#1a1a2e] hover:bg-gray-100"
                            }`}
                          >
                            {domain.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right content - Courses */}
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg text-gray-500">
                          Domains / <span className="text-[#1a1a2e] font-semibold">{activeDomain}</span>
                        </h3>
                        <Link href="#" className="text-[#e85a4f] flex items-center gap-1 hover:underline">
                          View All <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {activeCourses.map((course) => (
                          <Link
                            key={course.name}
                            href={getCourseUrl(course.name)}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.name}
                              className="w-14 h-14 rounded-lg object-cover"
                            />
                            <div>
                              <p className="text-xs text-gray-400">Bireena Edutech</p>
                              <p className="font-medium text-[#1a1a2e]">{course.name}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom banner */}
                  <div className="bg-[#1a1a2e] px-6 py-3 text-center">
                    <p className="text-white text-sm">
                      Get FREE consultation from our experts{" "}
                      <Link href="#" className="text-[#e85a4f] font-semibold hover:underline">
                        Contact Now
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Link href="#" className="text-gray-700 font-medium hover:text-[#ff6b4a] transition-colors">
              Study Abroad
            </Link>

            <Link href="#" className="text-gray-700 font-medium hover:text-[#ff6b4a] transition-colors">
              Campus Ambassador
            </Link>

            <Link href="#" className="text-gray-700 font-medium hover:text-[#ff6b4a] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:inline-flex px-5 py-2 bg-[#ff6b4a] text-white font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
            >
              LMS Log In
            </Link>
            <Link
              href="#"
              className="hidden sm:inline-flex px-5 py-2 bg-[#ff6b4a] text-white font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
            >
              LMS Log In 2.0
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
