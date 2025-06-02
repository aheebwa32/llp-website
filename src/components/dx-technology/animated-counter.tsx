"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = easeOutCubic * end

      setCount(decimals > 0 ? Number(currentCount.toFixed(decimals)) : Math.floor(currentCount))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration, decimals])

  return (
    <span ref={countRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
