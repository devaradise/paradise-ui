import React, { useEffect } from 'react';
import type { Preview } from "@storybook/react";
import { useGlobals } from '@storybook/preview-api';

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
                ['Alert', 'Toast'],
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
    }
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

     return (
      <div
        className={globals?.backgrounds?.value === '#101317' ? 'pui-dark-mode' : 'pui-light-mode'}
        style={{ width: '100%', maxWidth: '500px', margin: '50px auto' }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
      </div>
    )},
  ]
};

export default preview;
