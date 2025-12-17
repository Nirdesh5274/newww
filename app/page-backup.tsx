import { Header } from "@/components/mentorship/header"
import { HeroSection } from "@/components/mentorship/hero-section"
import { CoursesSection } from "@/components/mentorship/courses-section"
import { CourseFeatures } from "@/components/mentorship/course-features"
import { StatsSection } from "@/components/mentorship/stats-section"
import { TestimonialsSection } from "@/components/mentorship/testimonials-section"
import { MentorsSection } from "@/components/mentorship/mentors-section"
import { CompaniesSection } from "@/components/mentorship/companies-section"
import { FAQSection } from "@/components/mentorship/faq-section"
import { CTASection } from "@/components/mentorship/cta-section"
import { QuickApplyForm } from "@/components/mentorship/quick-apply-form"
import { Footer } from "@/components/mentorship/footer"

export default function CareerLaunchpadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoursesSection />
      <CourseFeatures />
      <StatsSection />
      <CTASection />
      <CompaniesSection />
      <MentorsSection />
      <TestimonialsSection />
      <FAQSection />
      <QuickApplyForm />
      <Footer />
    </main>
  )
}

