import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f5f5dc] text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Bireena<span className="text-[#ff6b4a]"> Edutech</span>
              </span>
              <span className="text-[#ff6b4a] text-2xl ml-1">✦</span>
            </Link>
            <p className="text-gray-700 text-sm">
              Empowering students with industry-ready skills through mentorship and practical learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Placement Accelerator
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Career Launchpad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Campus Ambassador
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Popular Courses</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#ff6b4a] transition-colors">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>support@bireenaedutech.in</li>
              <li>+91 1234567890</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>© 2025 Bireena Edutech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

