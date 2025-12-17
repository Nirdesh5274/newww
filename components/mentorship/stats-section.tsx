"use client"

import { Users, Briefcase, UserCog, GraduationCap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  { icon: Users, value: 20000, suffix: "K+", displayValue: "20K+", label: "Students Assisted" },
  { icon: Briefcase, value: 30, suffix: "+", displayValue: "30+", label: "Years of Combined Experience" },
  { icon: UserCog, value: 100, suffix: "+", displayValue: "100+", label: "Industry Experts" },
  { icon: GraduationCap, value: 500, suffix: "+", displayValue: "500+", label: "Universities" },
]

function useCountUp(end: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, startCounting])

  return count
}

function StatItem({ stat, startCounting }: { stat: (typeof stats)[0]; startCounting: boolean }) {
  const targetValue = stat.value >= 1000 ? stat.value / 1000 : stat.value
  const count = useCountUp(targetValue, 2000, startCounting)

  const displayCount = stat.value >= 1000 ? `${count}K+` : `${count}+`

  return (
    <div className="flex flex-col items-center text-center border-r border-gray-100 last:border-r-0 px-4">
      <stat.icon className="h-12 w-12 text-[#1a1a2e] mb-4 stroke-1" />
      <span className="text-4xl font-bold text-[#1a1a2e]">{displayCount}</span>
      <span className="text-gray-600 mt-1">{stat.label}</span>
    </div>
  )
}

export function StatsSection() {
  const [startCounting, setStartCounting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} startCounting={startCounting} />
          ))}
        </div>
      </div>
    </section>
  )
}

