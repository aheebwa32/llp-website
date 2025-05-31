"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <label className="inline-flex items-center cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={e => onCheckedChange?.(e.target.checked)}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      {checked && (
        <span className="absolute pointer-events-none ml-1">
          <Check className="h-3 w-3 text-blue-600" />
        </span>
      )}
    </label>
  )
)
Checkbox.displayName = "Checkbox"

export { Checkbox }