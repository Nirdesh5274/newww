import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
            Mentorship that
            <br />
            <span className="text-[#e85a4f]">makes you a master</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            Step into a world where learning meets guidance. Our training and mentorship program empowers you to master
            the skills that matter.
          </p>
          <Button className="mt-8 bg-[#e85a4f] hover:bg-[#d14940] text-white px-8 py-6 text-lg rounded-lg">
            Talk To Our Expert
          </Button>
        </div>

        {/* Right Image with floating elements */}
        <div className="relative">
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Professional mentor"
              className="w-full h-auto rounded-lg"
            />

            {/* Floating Stats Cards */}
            <div className="absolute top-8 right-8 bg-[#e85a4f] text-white px-4 py-3 rounded-xl shadow-lg">
              <span className="text-2xl font-bold">6K+</span>
              <p className="text-sm">Students</p>
            </div>

            <div className="absolute top-1/3 left-0 bg-[#e85a4f] text-white px-4 py-3 rounded-xl shadow-lg">
              <span className="text-2xl font-bold">120+</span>
              <p className="text-sm">Partner</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-1/4 text-[#e85a4f] text-2xl">+</div>
            <div className="absolute bottom-1/4 left-4 text-[#e85a4f] text-2xl">+</div>
            <div className="absolute bottom-8 right-8 bg-[#e85a4f] p-3 rounded-xl text-white">
              <span className="text-2xl">{"</>"}</span>
            </div>

            {/* Blue UI elements */}
            <div className="absolute top-16 right-1/3 bg-[#4a90a4] p-2 rounded-lg">
              <div className="w-24 h-2 bg-white/50 rounded mb-1"></div>
              <div className="w-20 h-2 bg-white/50 rounded mb-1"></div>
              <div className="w-16 h-2 bg-white/50 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
