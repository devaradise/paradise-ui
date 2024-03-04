/**
 * 📝 Notes for Contributors:
 * 
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 * 
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 * 
 */

import * as React from "react"

export interface TextFieldProps {
}

export function TextField(props: TextFieldProps) {
  return <div>TextField</div>;
}