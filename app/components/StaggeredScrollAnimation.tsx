"use client"

import type React from "react"
import { useStaggeredScrollAnimation } from "../hooks/useScrollAnimation"

interface StaggeredScrollAnimationProps {
  children: React.ReactNode[]
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
  className?: string
}

export default function StaggeredScrollAnimation({
  children,
  animation = "slideUp",
  className = "",
}: StaggeredScrollAnimationProps) {
  const { elementRef, visibleItems } = useStaggeredScrollAnimation(children.length)

  const getAnimationClass = (index: number) => {
    const baseClass = "transition-all duration-700 ease-out"
    const isVisible = visibleItems[index]

    if (!isVisible) {
      switch (animation) {
        case "slideUp":
          return `${baseClass} opacity-0 translate-y-12`
        case "slideLeft":
          return `${baseClass} opacity-0 -translate-x-12`
        case "slideRight":
          return `${baseClass} opacity-0 translate-x-12`
        case "scaleIn":
          return `${baseClass} opacity-0 scale-90`
        default:
          return `${baseClass} opacity-0`
      }
    } else {
      return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
    }
  }

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className={getAnimationClass(index)}>
          {child}
        </div>
      ))}
    </div>
  )
}
