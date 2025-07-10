"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold])

  return { ref: elementRef, isVisible }
}

// Simple animation utility class generator
export function getAnimationClass(isVisible: boolean, animationType = "fadeUp", delay = 0) {
  const baseClasses = "transition-all duration-700 ease-out"
  const delayClass = delay > 0 ? `delay-${Math.min(delay * 100, 1000)}` : ""
  
  if (!isVisible) {
    switch (animationType) {
      case "fadeUp":
        return `${baseClasses} ${delayClass} opacity-0 translate-y-8`
      case "fadeLeft":
        return `${baseClasses} ${delayClass} opacity-0 -translate-x-8`
      case "fadeRight":
        return `${baseClasses} ${delayClass} opacity-0 translate-x-8`
      case "scale":
        return `${baseClasses} ${delayClass} opacity-0 scale-95`
      default:
        return `${baseClasses} ${delayClass} opacity-0 translate-y-8`
    }
  }
  
  return `${baseClasses} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100`
}
