import { Button } from "@/components/mentorship/button"

export function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full text-center">
      <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
        Ready to Transform
        <br />
        Your Career?
      </h2>
      <Button className="mt-8 bg-[#e85a4f] hover:bg-[#d14940] text-white px-8 py-6 text-lg rounded-lg">
        Get Started Today
      </Button>
    </section>
  )
}

