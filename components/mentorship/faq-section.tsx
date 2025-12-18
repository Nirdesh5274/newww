"use client"

import { useState } from "react"
import { Button } from "@/components/mentorship/button"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Who is this course for?",
    answer: "This course is designed for students, fresh graduates, and professionals looking to upskill in their chosen domain. Whether you're a beginner or have some experience, our mentor-led programs help you master industry-relevant skills and accelerate your career growth."
  },
  {
    question: "How does the mentorship work?",
    answer: "You'll be paired with experienced industry professionals who provide personalized 1:1 guidance throughout your learning journey. Mentors conduct regular sessions, review your projects, provide career guidance, and help you navigate challenges. You'll have direct access to them for doubt resolution and feedback."
  },
  {
    question: "What projects will I work on?",
    answer: "You'll work on 10+ real-world industry projects plus 1 comprehensive capstone project. These projects are designed to simulate actual workplace scenarios, helping you build a strong portfolio. Projects range from beginner-friendly to advanced, ensuring progressive skill development."
  },
  {
    question: "What kind of job support is supported?",
    answer: "We provide comprehensive job support including resume building, LinkedIn profile optimization, mock interviews, and direct referrals to our 120+ hiring partners. You'll also get access to exclusive networking events with industry leaders and recruiters, along with placement assistance throughout your career."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 text-base mb-12">Everything you need to know about our Mentor-Led Course</p>

        <div className="space-y-5 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md transition-all duration-300 cursor-pointer border-2 overflow-hidden ${
                openIndex === index
                  ? "border-[#FF6B4A] bg-gradient-to-r from-[#FF6B4A]/5 to-transparent shadow-xl"
                  : "border-gray-100 bg-white hover:shadow-lg hover:border-[#FF6B4A]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <h3 className="text-xl lg:text-2xl font-normal text-[#1a1a2e] pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-[#FF6B4A]" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#FF6B4A] hover:bg-[#e85a4f] text-white px-8 py-3 text-base rounded-lg shadow-md">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

