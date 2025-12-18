import { Button } from "@/components/mentorship/button"

export function HeroSection() {
  return (
    <section className="w-full bg-[#FFF5F3] relative">
      <div className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-[1400px] mx-auto">
        {/* Left Content */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1a2e] leading-tight">
            Mentorship that
            <br />
            <span className="text-[#FF6B4A]">makes you a master</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
            Step into a world where learning meets guidance. Our training and mentorship program empowers you to master the skills that matter.
          </p>
          <Button className="mt-4 sm:mt-6 bg-[#FF6B4A] hover:bg-[#e85a4f] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-sm rounded-lg shadow-md">
            Talk To Our Expert
          </Button>
        </div>

        {/* Right Image with floating elements */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px]">
            <img
              src="/professional-woman-in-orange-shirt-pointing-holdin.jpg"
              alt="Professional mentor Aisha"
              className="w-full h-auto relative z-10"
            />

            {/* Floating Stats Cards */}
            <div className="absolute top-[8%] right-[5%] bg-[#FF6B4A] text-white px-6 py-3 rounded-2xl shadow-lg z-20">
              <div className="text-2xl font-bold">6K+</div>
              <div className="text-xs mt-1">Students</div>
            </div>

            <div className="absolute top-[35%] left-[-5%] bg-[#FF6B4A] text-white px-6 py-3 rounded-2xl shadow-lg z-20">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-xs mt-1">Partner</div>
            </div>

            {/* Blue Chart Icon - Top Left */}
            <div className="absolute top-[18%] left-[8%] bg-[#3B82F6] text-white p-4 rounded-2xl shadow-lg z-20 flex items-center justify-center">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>

            {/* Yellow/Beige Document/Folder - Left Side */}
            <div className="absolute top-[28%] left-[0%] bg-[#FDB750] p-4 rounded-2xl shadow-lg z-0 w-32 h-40 transform -rotate-12">
            </div>

            {/* Orange Document Icon - Top Right */}
            <div className="absolute top-[12%] right-[18%] bg-[#FF8C42] text-white p-3 rounded-xl shadow-lg z-20">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              </svg>
            </div>

            {/* Blue Code Lines - Top Right Area */}
            <div className="absolute top-[14%] right-[2%] bg-[#93C5FD] p-3 rounded-xl shadow-md z-10">
              <div className="w-28 h-2 bg-white rounded mb-2"></div>
              <div className="w-24 h-2 bg-white rounded mb-2"></div>
              <div className="w-20 h-2 bg-white rounded"></div>
            </div>

            {/* Bottom Blue Code Lines */}
            <div className="absolute bottom-[18%] left-[5%] bg-[#93C5FD] p-3 rounded-xl shadow-md z-20">
              <div className="w-28 h-2 bg-white rounded mb-2"></div>
              <div className="w-24 h-2 bg-white rounded mb-2"></div>
            </div>

            {/* Bottom Right Code Icon */}
            <div className="absolute bottom-[15%] right-[3%] bg-[#FF6B4A] p-3 rounded-xl text-white shadow-lg z-20">
              <span className="text-xl font-bold">{"</>"}</span>
            </div>

            {/* Decorative Plus Signs */}
            <div className="absolute top-[5%] right-[30%] text-[#FF6B4A] text-3xl font-light">+</div>
            <div className="absolute top-[22%] left-[25%] text-[#FF8C42] text-2xl font-light">+</div>
            <div className="absolute bottom-[25%] left-[2%] text-[#FF6B4A] text-3xl font-light">+</div>
            <div className="absolute bottom-[35%] right-[8%] text-[#FDB750] text-2xl font-light">+</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

