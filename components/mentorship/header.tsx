"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCareerExpanded, setIsCareerExpanded] = useState(false)
  const [activeMobileDomain, setActiveMobileDomain] = useState<string | null>(null)
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
    <>
    <header className="sticky top-0 z-50 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold">
              <span className="text-gray-800">Launch</span>
              <span className="text-[#ff6b4a]">ed</span>
            </span>
            <span className="text-[#ff6b4a] text-xl sm:text-2xl ml-1">🚀</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-600 text-sm hover:text-[#ff6b4a] transition-colors">
              Placement Accelerator
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  isDropdownOpen
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-[#ff6b4a]"
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

            <Link href="#" className="text-gray-600 text-sm hover:text-[#ff6b4a] transition-colors">
              Study Abroad
            </Link>

            <Link href="#" className="text-gray-600 text-sm hover:text-[#ff6b4a] transition-colors">
              Campus Ambassador
            </Link>

            <Link href="#" className="text-gray-600 text-sm hover:text-[#ff6b4a] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden lg:inline-flex px-5 py-2 bg-[#ff6b4a] text-white font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
            >
              LMS Log In
            </Link>
            <Link
              href="#"
              className="hidden lg:inline-flex px-5 py-2 bg-[#ff6b4a] text-white font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
            >
              LMS Log In 2.0
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#ff6b4a]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Fixed Red Line */}
      <div className="w-full h-[3px] bg-[#FF6B4A]"></div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Show domain courses if a domain is selected */}
          {activeMobileDomain ? (
            <div className="px-4 py-6">
              <button
                onClick={() => setActiveMobileDomain(null)}
                className="flex items-center gap-2 text-gray-700 mb-4"
              >
                <ChevronDown className="h-5 w-5 -rotate-90" />
                <span className="font-semibold">Back</span>
              </button>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{activeMobileDomain}</h3>
              <div className="space-y-2">
                {domains.find(d => d.name === activeMobileDomain)?.courses.map((course) => (
                  <Link
                    key={course.name}
                    href={getCourseUrl(course.name)}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setActiveMobileDomain(null)
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-gray-400">Launched Global</p>
                      <p className="font-medium text-gray-900">{course.name}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="px-4 py-6 space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">All Courses</h3>
              </div>
              
              <Link 
                href="#" 
                className="flex items-center justify-between py-3 text-gray-700 hover:text-[#ff6b4a] transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Placement Accelerator</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              <Link 
                href="#" 
                className="flex items-center justify-between py-3 text-gray-700 hover:text-[#ff6b4a] transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Study Abroad</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsCareerExpanded(!isCareerExpanded)}
                  className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#ff6b4a] transition-colors"
                >
                  <span>Career Launchpad</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isCareerExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isCareerExpanded && (
                  <div className="pb-3 space-y-1">
                    {domains.map((domain) => (
                      <button
                        key={domain.name}
                        onClick={() => setActiveMobileDomain(domain.name)}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm">{domain.name}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    ))}
                    <Link 
                      href="#" 
                      className="block py-2.5 px-3 text-sm text-[#ff6b4a] hover:underline"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View All
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="#" 
                className="flex items-center justify-between py-3 text-gray-700 hover:text-[#ff6b4a] transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Campus Ambassador</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              <Link 
                href="#" 
                className="flex items-center justify-between py-3 text-gray-700 hover:text-[#ff6b4a] transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact Us</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">More</h3>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="flex-1 px-4 py-2 bg-[#ff6b4a] text-white text-center font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
                  >
                    LMS Log In
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 px-4 py-2 bg-[#ff6b4a] text-white text-center font-medium rounded-md hover:bg-[#ff5533] transition-colors text-sm"
                  >
                    LMS Log In 2.0
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
    </>
  )
}

