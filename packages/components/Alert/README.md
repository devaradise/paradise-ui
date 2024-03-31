# @paradise-ui/alert

A component to display contextual messages such as information, success, warning and error messages

## Installation

Every Paradise UI component is designed to be able to run as a standalone component. So, you can just install them by running this command

```sh
yarn add @paradise-ui/alert
# or
npm i @paradise-ui/alert
```

But if you are going to use multiple components from Paradise UI, its recommended to install the whole package.

```sh
yarn add @paradise-ui/react
# or
npm i @paradise-ui/react
```

## Import
If you install the component package standalone:

```tsx
import { Alert } from '@paradise-ui/alert'
import '@package-ui/alert/style'

const ParentComponent = () => {
  return <Alert>Lorem ipsum dolor sit amet</Alert>
}
```

If you install the whole paradise UI package, you dont have to import the style, but you have to wrap the component inside \<ParadiseUIProvider>

```tsx
import { Alert } from '@paradise-ui/react'

const ParentComponent = () => {
  return <Alert>Lorem ipsum dolor sit amet</Alert>
}
```


## Contribution

Yes please! See the
[contributing guidelines](https://github.com/devaradise/paradise-ui/blob/main/CONTRIBUTING.md)
for details.

## Licence

This project is licensed under the terms of the
[MIT license](https://github.com/devaradise/paradise-ui/blob/main/LICENSE).