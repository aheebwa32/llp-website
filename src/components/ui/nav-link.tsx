"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className = "", onClick }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200"
  const activeClasses = isActive
    ? "text-blue-600 bg-blue-50 shadow-sm"
    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

  return (
    <Link href={href} className={`${baseClasses} ${activeClasses} ${className}`} onClick={onClick}>
      {children}
    </Link>
  )
}
