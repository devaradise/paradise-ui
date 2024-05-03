---
sidebar_position: 2
---

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