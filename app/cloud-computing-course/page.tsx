"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Clock, Users, Award, BookOpen, Network, FileText, Shield, ChevronDown, Play } from "lucide-react"
import Link from "next/link"
import { StatsSection } from "@/components/stats-section"
import { useState } from "react"

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is perfect for beginners, working professionals, and anyone interested in AI Automation. Whether you want to automate workflows or build intelligent systems, this course will guide you.",
  },
  {
    question: "How does the mentorship work?",
    answer:
      "You get personalized 1:1 mentoring sessions with industry experts throughout your learning journey. Get guidance on projects, career paths, and technical challenges.",
  },
  {
    question: "What projects will I work on?",
    answer:
      "You'll work on 10+ live projects including intelligent chatbots, automation systems, workflow design, and real-world AI applications that solve business challenges.",
  },
  {
    question: "What kind of job support is supported?",
    answer:
      "We provide resume building, mock interviews, industry networking opportunities, and connections with 100+ partner companies for placement assistance.",
  },
]

export default function AIAutomationCoursePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#1a1a2e] mb-6">
              Master AI Automation with Personalized Mentorship
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              This hands-on course is designed to equip you with the skills to create powerful AI-driven solutions — from intelligent bots to automation systems that solve real business challenges.
            </p>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-gray-200 rounded-2xl p-6 bg-white">
                <div className="text-sm text-[#e85a4f] font-semibold mb-2">Mentor Led</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#1a1a2e]">₹10,000</span>
                  <span className="text-gray-400 line-through text-sm">₹12,500</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <img src="/placeholder.svg?height=40&width=40" alt="Mentor" className="w-10 h-10 rounded-full" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-[#1a1a2e]">Kartikal Sharma</div>
                    <div className="text-gray-500 text-xs">Founder, Moody Design</div>
                  </div>
                </div>
                <Button className="w-full bg-[#e85a4f] hover:bg-[#d04943] text-white">
                  Enroll & Book Your Slot Now!
                </Button>
              </div>

              <div className="border-2 border-gray-200 rounded-2xl p-6 bg-white">
                <div className="text-sm text-gray-600 font-semibold mb-2">Blended</div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-3xl font-bold text-[#1a1a2e]">₹7,500</span>
                  <span className="text-gray-400 line-through text-sm">₹9,375</span>
                </div>
                <Button variant="outline" className="w-full border-2 border-gray-300 hover:bg-gray-50 text-[#1a1a2e] mt-9">
                  Enroll & Book Your Slot Now!
                </Button>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <div className="relative w-full aspect-video bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <img src="/placeholder.svg?height=400&width=600" alt="Course Preview" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-[#e85a4f] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Artificial Intelligence Badge */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#e85a4f] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Artificial Intelligence
                  </div>
                  {/* Search Icon */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Batch Info */}
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-xl">
                <div className="text-sm font-semibold mb-2">Next Batch Starting</div>
                <div className="text-xs text-gray-300 mb-3">Limited Seats Available</div>
                <div className="flex gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold">06</div>
                    <div className="text-xs text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">23</div>
                    <div className="text-xs text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">59</div>
                    <div className="text-xs text-gray-400">Mins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">59</div>
                    <div className="text-xs text-gray-400">Secs</div>
                  </div>
                </div>
                <Button className="w-full bg-[#e85a4f] hover:bg-[#d04943] text-white text-sm">
                  Reserve Your Spot
                </Button>
                <div className="text-center mt-2 text-xs text-gray-300">
                  Only <span className="text-[#e85a4f] font-bold">08 Seats</span> left for the batch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-12">
          Course Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-12 w-12 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              12++ Hours of Live & Recorded Sessions
            </h3>
            <p className="text-gray-600 mb-4">
              Learn from top AI Automation professionals with comprehensive sessions covering all essential concepts and techniques.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Live interactive classes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">On-demand recorded content</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Expert-led instruction</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-12 w-12 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              Personalized Mentor
            </h3>
            <p className="text-gray-600 mb-4">
              Get personalised guidance throughout your AI Automation journey with tailored feedback and mentoring.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">1:1 mentoring sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Personalised feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Career guidance</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-12 w-12 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              10+ Live Projects & 1 Capstone Project
            </h3>
            <p className="text-gray-600 mb-4">
              Gain hands-on experience by working on real-world AI Automation projects with practical applications.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Industry-relevant classes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Portfolio-worthy capstone</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Guided project development</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-12 w-12 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              6 Months of LMS Access
            </h3>
            <p className="text-gray-600 mb-4">
              Keep learning at your own pace with full access to materials, recordings and resources for six months.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Full course materials</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Additional resources</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Self-paced learning</span>
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Network className="h-12 w-12 text-[#1a1a2e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              Networking with Industry Leaders
            </h3>
            <p className="text-gray-600 mb-4">
              Build valuable connections through guest sessions and an active community.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Industry guest sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Exclusive community access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Career opportunity connections</span>
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-[#e85a4f]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              Dual Certification
            </h3>
            <p className="text-gray-600 mb-4">
              Earn credentials that validate both course completion and internship experience—recognised by recruiters.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Course completion certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Internship completion certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Industry-recognised credentials</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder.svg?height=400&width=600" alt="Curriculum" className="rounded-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Comprehensive AI Automation Curriculum
              </h2>
              <p className="text-gray-300 mb-8">
                Our curriculum is designed to take you from basics to advanced AI concepts with practical applications in automation thinking, workflow design, and more.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Check className="h-6 w-6 text-[#e85a4f] mb-2" />
                  <div className="font-semibold">Automation Thinking</div>
                </div>
                <div>
                  <Check className="h-6 w-6 text-[#e85a4f] mb-2" />
                  <div className="font-semibold">Workflow Design</div>
                </div>
                <div>
                  <Check className="h-6 w-6 text-[#e85a4f] mb-2" />
                  <div className="font-semibold">API Integration</div>
                </div>
                <div>
                  <Check className="h-6 w-6 text-[#e85a4f] mb-2" />
                  <div className="font-semibold">Prompt Engineering</div>
                </div>
              </div>
              <Button className="bg-[#e85a4f] hover:bg-[#d04943] text-white mt-8 px-8 py-6 text-lg w-full">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
          Ready to Transform Your AI Automation Career?
        </h2>
        <Button className="bg-[#e85a4f] hover:bg-[#d04943] text-white px-8 py-4 text-lg mt-6">
          Get Started Today
        </Button>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Loved by thousands of students
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Megha T",
                role: "AI Automation Graduate",
                text: "Launched's AI Automation program helped me streamline workflows and boost efficiency. I now lead automation projects at my company."
              },
              {
                name: "Rohan S",
                role: "AI Automation Graduate",
                text: "This course taught me to implement RPA bots in real business settings. I now automate repetitive tasks for my entire team."
              },
              {
                name: "Prathap R",
                role: "AI Automation Graduate",
                text: "The mentorship and real-world projects gave me confidence to drive automation in my operations team. The ROI was immediate."
              },
              {
                name: "Ankita M",
                role: "AI Automation Graduate",
                text: "From Python scripting to AI tools, the program was very hands-on. I now work in process automation at a global MNC."
              },
              {
                name: "Kunal V",
                role: "AI Automation Graduate",
                text: "We learned to integrate AI with business logic using tools like UiPath and Python. I'm now automating invoice and data workflows."
              },
              {
                name: "Rohan S",
                role: "AI Automation Graduate",
                text: "This course taught me to implement RPA bots in real business settings. I now automate repetitive tasks for my entire team."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Invest in your AI Automation career with our comprehensive mentor-led program
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mentor-Led Program */}
            <div className="bg-black text-white rounded-3xl p-8 border-4 border-[#e85a4f]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI AUTOMATION</h3>
                  <p className="text-gray-400">MENTOR-LED PROGRAM</p>
                </div>
                <div className="bg-[#e85a4f] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  LIMITED TIME OFFER
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold">₹10,000</span>
                  <span className="text-gray-400 line-through text-xl">₹12,500</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">25% OFF</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  What's included:
                  <Link href="#" className="text-[#e85a4f] text-sm ml-auto">ALL FEATURES</Link>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">25+ Hours of Live & Recorded Sessions</div>
                      <div className="text-sm text-gray-400">Learn from top AI Automation professionals at your own pace</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Personalized Mentor</div>
                      <div className="text-sm text-gray-400">One-on-one guidance throughout your learning journey</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">10+ Live Projects & 1 Capstone Project</div>
                      <div className="text-sm text-gray-400">Build your portfolio with real-world AI Automation applications</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">6 Months of LMS Access</div>
                      <div className="text-sm text-gray-400">Revisit lessons and resources anytime</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Industry Networking Opportunities</div>
                      <div className="text-sm text-gray-400">Connect with AI Automation leaders and potential employers</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Resume Building and Mock Interviews</div>
                      <div className="text-sm text-gray-400">Build your Resume with expert guidance and practice interviews</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Dual Certification</div>
                      <div className="text-sm text-gray-400">Course Completion & Internship Completion Certificates</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-red-400 font-semibold mb-1">
                  <Clock className="h-4 w-4" />
                  LIMITED TIME OFFER
                </div>
                <div className="text-sm text-gray-300">Only 08 seats left for the next batch starting soon!</div>
              </div>

              <Button className="w-full bg-[#e85a4f] hover:bg-[#d04943] text-white py-6 text-lg">
                Enroll Now For ₹10,000
              </Button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Flexible payment options available
              </p>
            </div>

            {/* Blended Program */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">AI AUTOMATION</h3>
                  <p className="text-gray-600">BLENDED PROGRAM</p>
                </div>
                <div className="bg-[#e85a4f] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  LIMITED TIME OFFER
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold text-[#1a1a2e]">₹7,500</span>
                  <span className="text-gray-400 line-through text-xl">₹9,375</span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">25% OFF</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-[#1a1a2e]">
                  What's included:
                  <Link href="#" className="text-[#e85a4f] text-sm ml-auto">ALL FEATURES</Link>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">15+ Hours of Live & Recorded Sessions</div>
                      <div className="text-sm text-gray-600">Learn from top AI Automation professionals at your own pace</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">Personalized Mentor</div>
                      <div className="text-sm text-gray-600">One-on-one guidance throughout your learning journey</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">10+ Live Projects & 1 Capstone Project</div>
                      <div className="text-sm text-gray-600">Build your portfolio with real-world AI Automation applications</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">6 Months of LMS Access</div>
                      <div className="text-sm text-gray-600">Revisit lessons and resources anytime</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">Industry Networking Opportunities</div>
                      <div className="text-sm text-gray-600">Connect with AI Automation leaders and potential employers</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">Resume Building and Mock Interviews</div>
                      <div className="text-sm text-gray-600">Build your Resume with expert guidance and practice interviews</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#1a1a2e]">Dual Certification</div>
                      <div className="text-sm text-gray-600">Course Completion & Internship Completion Certificates</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-red-600 font-semibold mb-1">
                  <Clock className="h-4 w-4" />
                  LIMITED TIME OFFER
                </div>
                <div className="text-sm text-gray-600">Only 08 seats left for the next batch starting soon!</div>
              </div>

              <Button className="w-full bg-[#e85a4f] hover:bg-[#d04943] text-white py-6 text-lg">
                Enroll Now For ₹7,500
              </Button>

              <p className="text-center text-gray-600 text-sm mt-4">
                Flexible payment options available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Everything you need to know about our AI Automation Mentor-Led Course</p>

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

        <div className="text-center mt-12">
          <Button className="bg-[#e85a4f] hover:bg-[#d04943] text-white px-8 py-4">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

