import { InputHTMLAttributes, ReactNode } from "react"

export type TextFieldVariant = 'box' | 'line' | 'filled'
export type TextFieldSize = 'sm' | 'md' | 'lg'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "prefix" | "size"> {
  label?: ReactNode
  secondaryLabel?: ReactNode
  variant?: TextFieldVariant
  size?: TextFieldSize
  name?: string
  className?: string
  // overridingClass?: { [key:string]: string }
  placeholder?: string
  invalid?: boolean
  disabled?: boolean
  defaultValue?: string
  value?: string
  prefix?: ReactNode
  suffix?: ReactNode
  helperText?: ReactNode
  errorMessage?: ReactNode
  onChange?: (value: string) => void
}
