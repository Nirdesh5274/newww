import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { CourseFeatures } from "@/components/course-features"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MentorsSection } from "@/components/mentors-section"
import { CompaniesSection } from "@/components/companies-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { QuickApplyForm } from "@/components/quick-apply-form"
import { Footer } from "@/components/footer"

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
