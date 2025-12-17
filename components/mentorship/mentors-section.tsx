"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

const mentors = [
  {
    name: "Meghana Gowda V",
    role: "Data scientist",
    company: "Schneider Electric",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Ayush Raj",
    role: "Senior Development Engineer - 2",
    company: "Adobe",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Piyush Nanwani",
    role: "Founder & Tech Lead",
    company: "atomxel",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Samrat Tomar",
    role: "Structural Engineer - TLB Product Line",
    company: "CNH",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Apurva Donde",
    role: "Technology Development Manager",
    company: "DRONA AVIATION",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    image: "/placeholder.svg?height=320&width=256",
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    company: "Microsoft",
    image: "/placeholder.svg?height=320&width=256",
  },
]

export function MentorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const visibleCards = 5
  const cardWidth = 272 // 256px + 16px gap

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = mentors.length - visibleCards
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = mentors.length - visibleCards
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mb-8">
        <span className="text-[#e85a4f] font-medium">Mentors</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mt-2">
          Learn from those who've been there,
          <br />
          done that, and nailed it
        </h2>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Mentor Cards Container */}
        <div className="overflow-hidden mx-8">
          <div
            ref={containerRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {mentors.map((mentor, index) => (
              <div key={index} className="flex-shrink-0 w-64 relative rounded-2xl overflow-hidden group">
                <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold">{mentor.name}</h3>
                  <p className="text-gray-300 text-sm">{mentor.role}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-white text-xs font-medium bg-white/20 px-2 py-1 rounded">
                      {mentor.company}
                    </span>
                    <button className="bg-white text-[#0077b5] px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

