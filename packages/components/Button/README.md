# @paradise-ui/button

A custom button component with extended functionality based on native `button` or `a` element.

## Installation

Every Paradise UI component is designed to be able to run as a standalone component. So, you can just install them by running this command

```sh
yarn add @paradise-ui/button
# or
npm i @paradise-ui/button
# or
pnpm i @paradise-ui/button
```

## Usage

```jsx
import { Button } from '@paradise-ui/button'
import '@package-ui/button/style'

const ParentComponent = () => {
  return <Button>Lorem ipsum</Button>
}
```

If you install the <a href="https://npmjs.com/package/@paradise-ui/react">whole paradise UI package</a>, you dont have to import the style, but you have to wrap the component inside `ParadiseUIProvider`

## Demo

Checkout <a href="https://paradise-ui.vercel.app/?path=/docs/component-form-button--docs" target="_blank">our storybook</a> for demo and more use cases.

## Licence

This project is licensed under the terms of the
[MIT license](https://github.com/devaradise/paradise-ui/blob/main/LICENSE).
