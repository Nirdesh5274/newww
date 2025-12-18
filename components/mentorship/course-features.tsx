import { Clock, Users, FolderKanban, MonitorPlay, Globe2, Award } from "lucide-react"
import { Check } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "25+ Hours of Live & Recorded Sessions",
    description:
      "Learn from top professionals with comprehensive sessions covering all essential concepts and techniques.",
    points: ["Live interactive classes", "On-demand recorded content", "Expert-led instruction"],
  },
  {
    icon: Users,
    title: "Personalized Mentor",
    description: "Get one-on-one guidance from industry professionals who will support your learning journey.",
    points: ["1:1 mentoring sessions", "Personalized feedback", "Career guidance"],
  },
  {
    icon: FolderKanban,
    title: "10+ Live Projects & 1 Capstone Project",
    description: "Gain hands-on experience by working on real-world projects with practical applications.",
    points: ["Industry-relevant projects", "Portfolio-worthy capstone", "Guided project development"],
  },
  {
    icon: MonitorPlay,
    title: "6 Months of LMS Access",
    description: "Revisit lessons anytime with extended access to all course materials and resources.",
    points: ["Full course materials", "Additional resources", "Lifetime community access"],
  },
  {
    icon: Globe2,
    title: "Networking with Industry Leaders",
    description: "Expand your connections through exclusive networking opportunities with professionals.",
    points: ["Industry guest sessions", "Exclusive community access", "Professional networking events"],
  },
  {
    icon: Award,
    title: "Dual Certification",
    description: "Get a Course Completion & Internship Completion Certificate to boost your credentials.",
    points: ["Course completion certificate", "Internship completion certificate", "Industry-recognized credentials"],
  },
]

export function CourseFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">Course Features</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Comprehensive courses featuring 25+ hours of live & recorded sessions, mentorship, live projects, networking,
        and certifications.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:border-[#FF6B4A]/40 hover:bg-gradient-to-br hover:from-[#FF6B4A]/8 hover:to-[#FF6B4A]/3 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#FF6B4A]/15 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-[#1a1a2e] group-hover:text-[#FF6B4A] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] pt-2 group-hover:text-[#FF6B4A] transition-colors duration-300">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-gray-500 group-hover:text-[#FF6B4A] transition-colors duration-300" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

