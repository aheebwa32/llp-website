"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  id: string
  type?: "text" | "email" | "tel" | "textarea" | "select"
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  rows?: number
  className?: string
}

export function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  options = [],
  rows = 4,
  className = "",
}: FormFieldProps) {
  const baseClassName = "border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 transition-colors"

  if (type === "select") {
    return (
      <div className={`space-y-2 ${className}`}>
        <Label htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            baseClassName
          )}
        >
          <option value="" disabled>
            {placeholder || `Select ${label.toLowerCase()}`}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  if (type === "textarea") {
    return (
      <div className={`space-y-2 ${className}`}>
        <Label htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        <Textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          className={`${baseClassName} resize-none`}
          placeholder={placeholder}
        />
      </div>
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={baseClassName}
        placeholder={placeholder}
      />
    </div>
  )
}
