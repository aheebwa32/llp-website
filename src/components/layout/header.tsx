"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">LLP</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Technology Partners
              </h1>
              <p className="text-sm text-gray-500 font-medium">Limited Liability Partnership</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/about")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              About
            </Link>
            <Link
              href="/members"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/members")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Members
            </Link>
            <Link
              href="/projects"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/projects")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/career"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/career")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Careers
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-200">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100 mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/about") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <Link
                href="/members"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/members") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Members
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/projects") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/career"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/career") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Careers
              </Link>
              <div className="pt-3 border-t border-gray-200 mt-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
