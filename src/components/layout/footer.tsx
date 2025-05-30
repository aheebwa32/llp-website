import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LLP</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Technology Partners</h3>
            </div>
            <p className="text-sm">
              A strategic alliance of Japan's leading technology companies delivering innovative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white transition-colors">
                  Member Companies
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>AI & Machine Learning</li>
              <li>Big Data & Analytics</li>
              <li>Cloud Infrastructure</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="text-sm not-italic">
              <p>Tokyo, Japan</p>
              <p className="mt-2">contact@llp-tech-partners.com</p>
              <p className="mt-2">+81 3-1234-5678</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LLP Technology Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
