"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/mentorship/header"
import { Footer } from "@/components/mentorship/footer"
import { Star, Play, CheckCircle2, Users, Calendar, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function MolecularBiologyCoursePage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-6">
            <span className="text-orange-600 font-semibold">🎓 Molecular Biology Design</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
            Master Molecular Biology Design with
            <br />
            <span className="text-[#e85a4f]">Industry Experts</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Very Large Scale Integration (Molecular Biology) focuses on chip design for electronics. Master circuit design techniques
            for cutting-edge semiconductor technology
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Mentor-Led Course */}
            <div className="bg-gradient-to-br from-[#e85a4f] to-[#d64940] rounded-2xl p-8 text-white">
              <div className="text-sm font-semibold mb-2">RECOMMENDED</div>
              <h3 className="text-2xl font-bold mb-4">Molecular Biology Mentor-Led Course</h3>
              <div className="text-4xl font-bold mb-6">
                ₹10,000
                <span className="text-lg font-normal opacity-90">/course</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Live sessions with experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>1-on-1 mentorship</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Hands-on chip design projects</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#e85a4f] font-semibold py-4 rounded-xl hover:bg-gray-100 transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Blended Course */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-semibold text-gray-500 mb-2">SELF-PACED</div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Molecular Biology Blended Course</h3>
              <div className="text-4xl font-bold text-[#1a1a2e] mb-6">
                ₹7,500
                <span className="text-lg font-normal text-gray-600">/course</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#e85a4f]" />
                  <span>Pre-recorded lectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#e85a4f]" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#e85a4f]" />
                  <span>Learn at your own pace</span>
                </li>
              </ul>
              <button className="w-full bg-[#e85a4f] text-white font-semibold py-4 rounded-xl hover:bg-[#d64940] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">See What You'll Learn</h2>
              <p className="text-gray-300 mb-8">
                Get a preview of our comprehensive Molecular Biology curriculum designed by semiconductor industry leaders
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400" />
                  ))}
                </div>
                <div className="text-white">
                  <div className="font-semibold">1,000+ Students</div>
                  <div className="text-sm text-gray-400">Already enrolled</div>
                </div>
              </div>
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-4">
                <div className="text-orange-300 text-sm mb-1">Limited Time Offer Ends In:</div>
                <div className="flex gap-4 text-white font-bold text-2xl">
                  <div>
                    {String(timeLeft.hours).padStart(2, "0")}
                    <span className="text-sm text-gray-400">h</span>
                  </div>
                  <div>:</div>
                  <div>
                    {String(timeLeft.minutes).padStart(2, "0")}
                    <span className="text-sm text-gray-400">m</span>
                  </div>
                  <div>:</div>
                  <div>
                    {String(timeLeft.seconds).padStart(2, "0")}
                    <span className="text-sm text-gray-400">s</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-12">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-[#e85a4f] ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">Why Choose Our Molecular Biology Course?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Expert Mentors",
              description: "Learn from semiconductor industry professionals with 15+ years of experience in chip design",
            },
            {
              icon: BookOpen,
              title: "Comprehensive Curriculum",
              description:
                "Cover digital design, analog circuits, and advanced verification techniques for modern Molecular Biology",
            },
            {
              icon: Award,
              title: "Industry Recognition",
              description: "Earn a certificate recognized by leading semiconductor companies worldwide",
            },
            {
              icon: CheckCircle2,
              title: "Hands-on Projects",
              description: "Build real-world chip designs and work with industry-standard EDA tools",
            },
            {
              icon: Calendar,
              title: "Flexible Learning",
              description: "Study at your own pace with lifetime access to course materials and updates",
            },
            {
              icon: Users,
              title: "Career Support",
              description: "Get placement assistance and interview prep for top semiconductor companies",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-[#e85a4f] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Course Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Molecular Biology Design",
                topics: ["Logic Design", "HDL Programming", "Synthesis Techniques", "Timing Analysis"],
              },
              {
                title: "Analog Circuit Design",
                topics: ["Op-Amp Design", "Power Management", "Mixed-Signal Circuits", "Layout Techniques"],
              },
              {
                title: "Verification & Testing",
                topics: ["Functional Verification", "DFT Techniques", "Coverage Analysis", "Debug Methods"],
              },
              {
                title: "Advanced Topics",
                topics: ["Low Power Design", "Physical Design", "Signal Integrity", "Industry Tools"],
              },
            ].map((module, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-[#e85a4f] mt-0.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20,000+", label: "Students Trained" },
            { number: "30+", label: "Years Experience" },
            { number: "100+", label: "Expert Mentors" },
            { number: "500+", label: "Partner Companies" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#e85a4f] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#e85a4f] to-[#d64940] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master Molecular Biology Design?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of students building careers in semiconductor industry</p>
          <button className="bg-white text-[#e85a4f] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            Enroll in Molecular Biology Course Today
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Molecular Biology Engineer at Intel",
              content:
                "The hands-on approach to chip design was incredible. I landed my dream job at Intel within 3 months of completing the course!",
            },
            {
              name: "Rahul Verma",
              role: "Design Engineer at Qualcomm",
              content:
                "The mentors are industry experts who provided real-world insights. The EDA tool training was particularly valuable.",
            },
            {
              name: "Sneha Patel",
              role: "Physical Design Engineer",
              content:
                "From digital design to physical implementation, this course covered everything. The projects helped build my portfolio.",
            },
            {
              name: "Amit Kumar",
              role: "Verification Engineer",
              content:
                "Best investment in my career! The verification modules and industry connections opened many opportunities for me.",
            },
            {
              name: "Deepak Singh",
              role: "Analog Designer",
              content:
                "The analog circuit design section was outstanding. Learned advanced techniques used in top semiconductor companies.",
            },
            {
              name: "Kavya Reddy",
              role: "ASIC Designer at Broadcom",
              content:
                "Comprehensive curriculum with excellent support. Got placed at Broadcom through their placement assistance program!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-[#1a1a2e]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">Compare Our Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6">Features</th>
                <th className="text-center py-4 px-6">Mentor-Led Course</th>
                <th className="text-center py-4 px-6">Blended Course</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Live Sessions", true, false],
                ["Recorded Lectures", true, true],
                ["1-on-1 Mentorship", true, false],
                ["Hands-on Projects", true, true],
                ["Industry Certificate", true, true],
                ["Placement Support", true, false],
                ["Lifetime Access", true, true],
                ["Community Access", true, true],
              ].map(([feature, mentorLed, blended], index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">{feature as string}</td>
                  <td className="text-center py-4 px-6">
                    {mentorLed ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {blended ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Everything you need to know about our Molecular Biology Mentor-Led Course</p>
        <div className="space-y-4">
          {[
            {
              q: "What prerequisites do I need for this Molecular Biology course?",
              a: "Basic knowledge of electronics and digital logic is recommended. Familiarity with programming (C/Python) is helpful but not mandatory.",
            },
            {
              q: "Will I get access to EDA tools?",
              a: "Yes, you'll get access to industry-standard EDA tools including Cadence, Synopsys, and Mentor Graphics for hands-on practice.",
            },
            {
              q: "How long does it take to complete the course?",
              a: "The mentor-led program is 6 months with live sessions. The blended course is self-paced, typically completed in 4-8 months.",
            },
            {
              q: "Do you provide placement assistance?",
              a: "Yes! The mentor-led course includes dedicated placement support, resume review, and interview preparation for semiconductor companies.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

