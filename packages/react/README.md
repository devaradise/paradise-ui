<a href="https://github.com/devaradise/paradise-ui" style="display:flex; align-items:center; justify-content:center; text-decoration:none; gap:20px; color: inherit; font-size:47px; font-weight: bold;">
  <img src="https://github.com/devaradise/paradise-ui/assets/10844342/bcfe878a-4c5e-4729-aa60-7f20bbdaacd8" alt="Paradise UI" width="70" /> Paradise UI
</a>
<br/>
<h1 align="center">Modular & Highly Customizable React UI Component Library</h1>
<br />

Paradise UI is a collection of React UI components that designed to be:
- **Simple & Easy to use**
- **Highly customizable** through component props, hooks, and documented HTML skeleton.
- **Headless**. The component can be 100% unstyled, and you can apply your own css style.
- **Modular**. Each component can be installed independently.

Paradise UI does not aim to be another React UI library with an opinionated design system. We focus to build components that can be used and match with any design system or to be used as a base to build a design system.

**Checkout <a href="https://paradise-ui.vercell.app" target="_blank">Paradise UI storybook</a> to see the complete list and demo of our components**

# Installation

There are 2 ways to install Paradise UI components to your React project.

## Install the whole Paradise UI package
It is recommended to install the whole package of Paradise UI if you're going to use multiple components and paradise UI theming.

```sh
# yarn
yarn add @paradise-ui/react

# or npm
npm install @paradise-ui/react

# or pnpm
pnpm install @paradise-ui/react
```

## Install standalone component
If you only want to install one or a few components, for a case such as when you already use another UI library, you can install the component individually. It will only install that particular component package.

Suppose you want to add our Text field component into your existing project.

```sh
# yarn
yarn add @paradise-ui/text-field

# or npm
npm i @paradise-ui/text-field

# or pnpm
pnpm add @paradise-ui/text-field
```

## Component Package List
This is the list of our components so far. More components are in progress.

- **<a href="https://www.npmjs.com/package/@paradise-ui/alert" target="_blank">Alert</a>**
- **<a href="https://www.npmjs.com/package/@paradise-ui/button" target="_blank">Button</a>**
- **<a href="https://www.npmjs.com/package/@paradise-ui/text-field" target="_blank">Text field</a>**
- **<a href="https://www.npmjs.com/package/@paradise-ui/toast" target="_blank">Toast</a>**

# Usage
## Using Paradise UI Provider

If you are going to use Paradise UI exclusively as your project component library, you need to wrap your application with `ParadiseUIProvider`.

```jsx
import { ParadiseUIProvider } from '@paradise-ui/react'

// Wrap your root application component (usually in App.jsx) with ParadiseUIProvider
function App({ children }) {
  return <ParadiseUIProvider>{children}</ParadiseUIProvider>
}
export default App
```

`ParadiseUIProvider` accept `colors` as a prop. You can also use `useThemeMode` hook in any component inside `ParadiseUIProvider` to control dark mode. Check the <a href="https://paradise-ui.vercel.app/?path=/docs/provider-paradiseuiprovider--docs" target="_blank">docs & demo here</a> for more details about its usage.

Now, you can use any Paradise UI component in your project.

```jsx
import { Button } from '@paradise-ui/react'

function PageComponent() {
  return <Button variant='solid'>ParadiseUI Button</Button>
}
export default PageComponent
```

## Standalone Component Usage

For standalone component usage, you just need to import the component directly from its package. You dont need to wrap your application with `ParadiseUIProvider`.

However, you need to import component style explicitly. Every ParadiseUI component is headless (a.k.a unstyled) by default.

```jsx
import { Button } from '@paradise-ui/button'
import '@paradise-ui/button/style'

function PageComponent() {
  return <Button variant='solid'>ParadiseUI Button</Button>
}
export default PageComponent
```

# Licence
MIT © [Muhammad Syakirurohman](https://github.com/syakirurahman)