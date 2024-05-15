import React, { useEffect } from 'react';
import type { Preview } from "@storybook/react";
import { useGlobals } from '@storybook/preview-api';
import { Primary, Controls } from '@storybook/blocks';
import '../tailwind.css'
import ReactGA from "react-ga4";

ReactGA.initialize('G-WEQ0VLBX8H', {
  gtagOptions: { 
    debug_mode: true,
    content_group: 'storybook'
  }
});

const preview: Preview = {
  parameters: {
    layout: 'padded',
    actions: {},
    options: {
      storySort: {
        order: [
          'Component',
            [
              'Form',
              'Panel',
              'Data',
              'Overlay', 
              'Feedback',
              'Menu',
              'Media',
              'Misc'
            ], 
          'Provider'
        ]
      }
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#101317',
        },
      ]
    },
    docs: {
      page: () => (
        <>
          <Primary />
          <Controls />
        </>
      ),
    },
  },
  decorators: [
    (Story, { args, viewMode }) =>  {
      const [globals, updateGlobals] = useGlobals()
      // Update global background when themeMode changed by user
      useEffect(() => {
        if (viewMode === 'story' && args.themeMode !== globals?.backgrounds?.name) {
          updateGlobals({
            backgrounds: args.themeMode === "dark" ? { name: "dark", value: "#101317" } : { name: "light", value: "#fff" }
          })    
        }
      }, [args.themeMode])

      document.documentElement.setAttribute('style', `color-scheme:${globals?.backgrounds?.value === '#101317' ? 'dark' : 'light'}`)
      document.documentElement.classList.remove(...(globals?.backgrounds?.value === '#101317' ? ['pui-light-mode'] : ['pui-dark-mode', 'dark']))
      document.documentElement.classList.add(...(globals?.backgrounds?.value === '#101317' ? ['pui-dark-mode', 'dark'] : ['pui-light-mode']))

      return (
        <div
          style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
        </div>
    )},
  ]
};

export default preview;
