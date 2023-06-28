// ScrollButton.tsx
"use client"
import { MouseEvent, FC, ButtonHTMLAttributes, forwardRef } from 'react'



interface ScrollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string
  children?: React.ReactNode
}

const ScrollButton: FC<ScrollButtonProps> = forwardRef<HTMLButtonElement, ScrollButtonProps>(
  ({ targetId, children, className, ...props }, ref) => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
      <button onClick={handleClick} className={className} ref={ref} {...props}>
        {children}
      </button>
    )
  });

ScrollButton.displayName = "ScrollButton"

export default ScrollButton
