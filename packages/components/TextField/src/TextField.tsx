import React, { forwardRef, useId } from 'react';
import { TextFieldProps } from "./type"
import "./style.scss"

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label = "",
    secondaryLabel = "",
    variant = "box",
    name = "",
    className = "",
    placeholder = "",
    defaultValue = "",
    value,
    disabled = false,
    prefix = "",
    suffix = "",
    errorMessage = "",
    helperText = "",
    onChange,
    ...rest
  } = props

  const id = useId()
  const inputId = `${id}-${name}`
  const descriptionId = `${id}-description`

  return <div className={`pui-text-field pui-text-field-${variant} ${!!errorMessage && `pui-text-field-error`} ${className}`} aria-disabled={disabled}>
    <div className='pui-text-field-label-block'>
      <label className='pui-text-field-label'>{label}</label>
      { !!secondaryLabel && <label className='pui-text-field-label-secondary'>{secondaryLabel}</label> }
    </div>
    <div className='pui-text-field-input-block'>
      <div className='pui-text-field-input-prefix'>{prefix}</div>
      <input
        ref={ref}
        name={name}
        className="pui-text-field-input"
        disabled={disabled}
        aria-disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value !== value) {
            !!onChange && onChange(e.target.value)
          }
        }}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        id={inputId}
        aria-describedby={descriptionId}
        {...rest}
          />
      <div className='pui-text-field-input-suffix'>{suffix}</div>
    </div>
    <div className='pui-text-field-message-block'>
      {
        !errorMessage 
          ? <div className='pui-text-field-helper-text'>{helperText}</div>
          : <div className='pui-text-field-error-message'>{errorMessage}</div>
      }
    </div>
  </div>;
})