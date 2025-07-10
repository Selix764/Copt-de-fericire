+"use client"

import { useScrollAnimationBasic } from "../hooks/useScrollAnimation"
import { ReactNode, HTMLAttributes } from "react"

interface ScrollAnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationClass?: string
  visibleClass?: string
}

export default function ScrollAnimatedSection({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  animationClass = "transition-all duration-700 ease-out",
  visibleClass = "opacity-100 translate-y-0",
  className = "",
  ...props
}: ScrollAnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimationBasic({
    threshold,
    rootMargin,
    triggerOnce,
  })

  return (
    <div
      ref={elementRef}
      className={`
        ${animationClass}
        ${isVisible 
          ? visibleClass 
          : "opacity-0 translate-y-8"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
