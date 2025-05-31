import * as React from "react"

export function Select({ value, onChange, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select value={value} onChange={onChange} {...props}>
      {children}
    </select>
  )
}