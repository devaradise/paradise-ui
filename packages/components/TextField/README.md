# @paradise-ui/text-field

An enhanced version of common &lt;input&gt; component for React

## Installation

Every Paradise UI component is designed to be able to run as a standalone component. So, you can just install them by running this command

```sh
yarn add @paradise-ui/text-field
# or
npm i @paradise-ui/text-field
# or
pnpm i @paradise-ui/text-field
```

## Import

```jsx
import { TextField } from '@paradise-ui/text-field'
import '@package-ui/text-field/style'

const ParentComponent = () => {
  return <TextField>Lorem ipsum</TextField>
}
```

If you install the <a href="https://npmjs.com/package/@paradise-ui/react">whole paradise UI package</a>, you dont have to import the style, but you have to wrap the component inside `ParadiseUIProvider`

## Demo

Checkout <a href="https://paradise-ui.vercel.app/?path=/docs/component-form-text-field--docs" target="_blank">our storybook</a> for demo and more use cases.

## Licence

This project is licensed under the terms of the
[MIT license](https://github.com/devaradise/paradise-ui/blob/main/LICENSE).
