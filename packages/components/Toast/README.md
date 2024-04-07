# @paradise-ui/toast

A component to show message / notification after users took an action

## Installation

Every Paradise UI component is designed to be able to run as a standalone component. So, you can just install them by running this command

```sh
yarn add @paradise-ui/toast
# or
npm i @paradise-ui/toast
# or
pnpm i @paradise-ui/toast
```

## Usage

Before you can use toast component, you need to import `ToastProvider` and wrap your app component with it.

```jsx
import { ToastProvider } from '@paradise-ui/toast'
import '@package-ui/toast/style'

function AppRoot({ children }) {
  return <ToastProvider>{ children }</ToastProvider>
}
```

If you install the <a href="https://npmjs.com/package/@paradise-ui/react">whole paradise UI package</a> and use `ParadiseUIProvider`, you dont have to import the style and `ToastProvider` again.

Now, you can use the toast component by calling `useToast` hook.

```jsx
export const PageComponent = () => {
  const toast = useToast();
  return <Button onClick={() => toast.add({ description: 'This is a an example' })}>Trigger a toast</Button>;
};

```

## Demo

Checkout <a href="https://paradise-ui.vercel.app/?path=/docs/component-feedback-toast--docs" target="_blank">our storybook</a> for demo and more use cases.

## Licence

This project is licensed under the terms of the
[MIT license](https://github.com/devaradise/paradise-ui/blob/main/LICENSE).