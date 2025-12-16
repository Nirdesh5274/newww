"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the duration of the courses?",
    answer:
      "Our courses typically range from 8-12 weeks, depending on the program. Each course includes 25+ hours of live and recorded sessions, plus additional time for projects and assignments.",
  },
  {
    question: "Do I get a certificate after completing the course?",
    answer:
      "Yes! You receive dual certification - a Course Completion Certificate and an Internship Completion Certificate upon successfully finishing the program.",
  },
  {
    question: "What kind of support do I get during the course?",
    answer:
      "You get personalized 1:1 mentoring sessions, access to industry experts, 24/7 community support, and dedicated career guidance throughout your learning journey.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Our courses are designed to accommodate learners at all levels. We start with fundamentals and progressively advance to complex topics.",
  },
  {
    question: "How can I access the course materials?",
    answer:
      "You get 6 months of LMS (Learning Management System) access where you can view all course materials, recorded sessions, and additional resources anytime.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-12">Everything you need to know about our Mentor-Led Course</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-[#1a1a2e]">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
