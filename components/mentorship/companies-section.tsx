const companies = ["Instamojo", "NimbleS2P", "Cloudnix", "NIMESA", "edmingle", "Tru Performance", "spoke", "gHELeads"]

export function CompaniesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold text-center text-[#1a1a2e] mb-12">Our Collaborated Companies</h2>

      {/* Marquee effect */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-16">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

