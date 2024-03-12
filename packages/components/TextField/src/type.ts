import { InputHTMLAttributes, ReactNode } from "react"

export type TextFieldVariant = 'box' | 'line' | 'filled'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "prefix"> {
  label?: ReactNode
  secondaryLabel?: ReactNode
  variant?: TextFieldVariant
  name?: string
  className?: string
  overridingClass?: { [key:string]: string }
  placeholder?: string
  disabled?: boolean
  defaultValue?: string
  value?: string
  prefix?: ReactNode
  suffix?: ReactNode
  helperText?: ReactNode
  errorMessage?: ReactNode
  onChange?: (value: string) => void
}
