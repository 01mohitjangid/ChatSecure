import React from 'react'
import { cn } from '@/lib/utils'

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center shrink-0 size-8", className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="size-full"
      >
        <g className="text-[#345468] dark:text-slate-200">
          {/* Chat tail */}
          <path 
            d="M 27 65 L 10 90 L 38 78 Z" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinejoin="round" 
          />
          
          {/* Outer C shape */}
          <path 
            d="M 70.5 25.5 A 32 32 0 1 0 70.5 74.5" 
            fill="transparent" 
            stroke="currentColor" 
            strokeWidth="20" 
            strokeLinecap="round" 
          />
        </g>
        
        {/* Inner green pill shape */}
        <path
          d="M 45 35 
             A 15 15 0 1 0 45 65 
             L 65 65 
             A 15 15 0 0 0 65 35 Z"
          fill="#60c484"
        />
      </svg>
    </div>
  )
}
