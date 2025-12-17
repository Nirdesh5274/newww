"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Aditya R",
    role: "AI Graduate",
    text: "The AI program gave me a strong foundation in machine learning and NLP. I landed an AI research role after completing it.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Megha T",
    role: "AI Automation Graduate",
    text: "Bireena Edutech's AI Automation program helped me streamline workflows and boost efficiency. I now lead automation projects at my company.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Siddharth M",
    role: "Machine Learning Graduate",
    text: "The ML program covered model building, tuning, and deployment. I used it to land an ML engineer role.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Ritik D",
    role: "Data Science Graduate",
    text: "From data wrangling to predictive models, the course covered it all. I'm now a data scientist making real impact.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Neha S",
    role: "Web Development Graduate",
    text: "Bireena Edutech's web dev course taught me full-stack skills through real projects. I'm now working as a front-end developer.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Aditya R",
    role: "AI Graduate",
    text: "The AI program gave me a strong foundation in machine learning and NLP. I landed an AI research role after completing it.",
    image: "/placeholder.svg?height=50&width=50",
  },
]

const duplicatedTestimonials = [...testimonials, ...testimonials]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
      <div className="w-full">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Loved by thousands of students</h2>

        <div
          ref={scrollRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] flex-shrink-0 bg-[#2a2a3e] rounded-2xl p-6 hover:bg-[#3a3a4e] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

