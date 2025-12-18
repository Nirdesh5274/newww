import { Star } from "lucide-react"
import { Button } from "@/components/mentorship/button"
import Link from "next/link"

interface Course {
  id: number
  title: string
  rating: number
  reviews: number
  description: string
  image: string
}

// Helper function to get course route based on title
function getCourseRoute(title: string): string {
  const routeMap: Record<string, string> = {
    "AI Automation": "/ai-automation-courses",
    "Web Development": "/web-development-course",
    "Python with Machine Learning": "/machine-learning-course",
    "Artificial Intelligence": "/ai-automation-courses",
    "Python with Data Science": "/data-science-course",
    "App Development": "/app-development-course-online",
    "Cyber Security": "/cyber-security-course",
    "Cloud Computing (Azure, AWS)": "/cloud-computing-course",
    "IoT & Robotics": "/iot-robotics-course",
    "Finance": "/finance-course",
    "Digital Marketing": "/digital-marketing-course",
    "Bioinformatics": "/bioinformatics-course",
    "Hybrid Electric Vehicle": "/hybrid-electric-vehicle-course",
    "Robotics": "/iot-robotics-course",
    "VLSI": "/vlsi-course",
    "Car Design": "/car-design-course",
    "AutoCAD": "/autocad-course",
    "Genetic Engineering": "/genetic-engineering-course",
    "Molecular Biology": "/molecular-biology-course",
    "Microbiology": "/microbiology-course",
    "Human Resource": "/human-resource-course",
    "Stock Market": "/stock-market-course",
    "Embedded Systems": "/embedded-systems-course",
    "Internet of Things": "/iot-robotics-course",
    "Construction Planning & Structural Analysis": "/construction-planning-course",
    "Nano Technology": "/nano-technology-course",
  }
  
  return routeMap[title] || "/mentorship-coures-online"
}

export function CourseCard({ course }: { course: Course }) {
  const fullStars = Math.floor(course.rating)
  const hasHalfStar = course.rating % 1 >= 0.5
  const courseRoute = getCourseRoute(course.title)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-[#1a1a2e]">{course.rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < fullStars
                    ? "fill-yellow-400 text-yellow-400"
                    : i === fullStars && hasHalfStar
                      ? "fill-yellow-400/50 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#1a1a2e] mb-3 text-lg leading-snug">{course.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-5 line-clamp-3 leading-relaxed">{course.description}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link href={courseRoute} className="flex-1">
            <Button className="w-full bg-[#FF6B4A] hover:bg-[#e85a4f] text-white text-sm py-3 rounded-lg shadow-sm">Register Now</Button>
          </Link>
          <Link href={courseRoute} className="flex-1">
            <Button variant="outline" className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm py-3 rounded-lg bg-white">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

