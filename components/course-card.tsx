import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Course {
  id: number
  title: string
  rating: number
  reviews: number
  description: string
  image: string
}

export function CourseCard({ course }: { course: Course }) {
  const fullStars = Math.floor(course.rating)
  const hasHalfStar = course.rating % 1 >= 0.5

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-[#1a1a2e]">{course.rating}</span>
          <div className="flex">
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
          <span className="text-sm text-gray-500">({course.reviews.toLocaleString()})</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#1a1a2e] mb-2">{course.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1 bg-[#e85a4f] hover:bg-[#d14940] text-white text-sm">Register Now</Button>
          <Button variant="outline" className="flex-1 border-gray-300 text-[#1a1a2e] text-sm bg-transparent">
            View Course
          </Button>
        </div>
      </div>
    </div>
  )
}
