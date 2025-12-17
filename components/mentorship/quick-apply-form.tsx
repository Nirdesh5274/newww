"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"

const services = [
  "AI Automation",
  "Web Development",
  "Data Science",
  "Machine Learning",
  "Cyber Security",
  "Digital Marketing",
  "Finance",
  "Other",
]

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
]

export function QuickApplyForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: "",
    agreedToTerms: false,
  })
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreedToTerms) {
      alert("Please agree to the Terms & Conditions")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        countryCode: "+91",
        phone: "",
        email: "",
        service: "",
        agreedToTerms: false,
      })
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-[#e85a4f] text-xl font-medium mb-2">Quick Apply</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">Your journey starts here!</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e85a4f]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-white text-sm mb-2">Phone Number</label>
                <div className="flex gap-2">
                  {/* Country Code Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg text-white min-w-[100px]"
                    >
                      {formData.countryCode}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isCountryDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-32 bg-[#2a2a3e] border border-gray-600 rounded-lg overflow-hidden z-10">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, countryCode: country.code })
                              setIsCountryDropdownOpen(false)
                            }}
                            className="w-full px-4 py-2 text-left text-white hover:bg-[#3a3a4e] transition-colors"
                          >
                            {country.code} {country.country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter 10 digits"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                    }
                    required
                    className="flex-1 px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e85a4f]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-2">Email Id</label>
                <input
                  type="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e85a4f]"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-white text-sm mb-2">Service you are interested in</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg text-white"
                  >
                    <span className={formData.service ? "text-white" : "text-gray-400"}>
                      {formData.service || "Choose a service"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isServiceDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#2a2a3e] border border-gray-600 rounded-lg overflow-hidden z-10 max-h-48 overflow-y-auto">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service })
                            setIsServiceDropdownOpen(false)
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-[#3a3a4e] transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, agreedToTerms: !formData.agreedToTerms })}
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                    formData.agreedToTerms ? "bg-[#e85a4f] border-[#e85a4f]" : "border-gray-400"
                  }`}
                >
                  {formData.agreedToTerms && <Check className="h-3 w-3 text-white" />}
                </button>
                <span className="text-white text-sm">
                  I agree with{" "}
                  <a href="#" className="text-[#e85a4f] hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-colors ${
                  submitSuccess
                    ? "bg-green-500"
                    : isSubmitting
                      ? "bg-[#e85a4f]/70 cursor-not-allowed"
                      : "bg-[#e85a4f] hover:bg-[#d14940]"
                }`}
              >
                {submitSuccess ? "Submitted Successfully!" : isSubmitting ? "Submitting..." : "Register Now"}
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <img src="/placeholder.svg?height=500&width=500" alt="Student" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

