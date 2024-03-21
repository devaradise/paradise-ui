import React, { useEffect } from 'react';
import type { Preview } from "@storybook/react";
import { useGlobals } from '@storybook/preview-api';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    actions: {},
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#17202A',
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
            backgrounds: args.themeMode === "dark" ? { name: "dark", value: "#17202A" } : { name: "light", value: "#fff" }
          })    
        }
      }, [args.themeMode])

     return (
      <div style={{ width: '100%', maxWidth: '500px', margin: '50px auto' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )},
  ]
};

export default preview;
