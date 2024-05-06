# @paradise-ui/alert

A component to display contextual messages such as information, success, warning and error messages

## Installation

Every Paradise UI component is designed to be able to run as a standalone component. So, you can just install them by running this command

```sh
yarn add @paradise-ui/alert
# or
npm i @paradise-ui/alert
# or
pnpm i @paradise-ui/alert
```

## Usage

```tsx
import { Alert } from '@paradise-ui/alert'
import '@package-ui/alert/style'

const ParentComponent = () => {
  return <Alert>Lorem ipsum dolor sit amet</Alert>
}
```

If you install the <a href="https://npmjs.com/package/@paradise-ui/react">whole paradise UI package</a>, you dont have to import the style, but you have to wrap the component inside `ParadiseUIProvider`

## Demo

Checkout <a href="https://storybook.paradise-ui.com/?path=/docs/component-feedback-alert--docs" target="_blank">our storybook</a> for demo and more use cases.


## Licence

This project is licensed under the terms of the
[MIT license](https://github.com/devaradise/paradise-ui/blob/main/LICENSE).