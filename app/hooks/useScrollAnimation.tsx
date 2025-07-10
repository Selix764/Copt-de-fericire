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

// Basic animation hook for components
export function useScrollAnimationBasic({ 
  threshold = 0.1, 
  rootMargin = "0px", 
  triggerOnce = true 
}: { 
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
} = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

// Staggered animation hook for multiple items
export function useStaggeredScrollAnimation(itemCount: number) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger items one by one with delay
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * 150) // 150ms delay between each item
          }
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [itemCount])

  return { elementRef, visibleItems }
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
