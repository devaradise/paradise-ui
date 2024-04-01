import { Canvas, Meta, Source } from '@storybook/blocks';

import * as ToastStories from './Toast.stories';

<Meta of={ToastStories} />

# Toast

A checkbox is a square box that can be activated or deactivated when ticked. 

Use checkboxes to select one or more options from a list of choices.


<Canvas of={ToastStories.Usage} sourceState="none"/>

```tsx
import { ToastProvider, useToast } from '../src';

const ComponentWhereToastIsTriggered = (toastProps: ToastProps) => {
  const toast = useToast();
  return <Button label='Trigger a toast' onClick={() => toast.add({ ...toastProps })} />
};

export const Usage: Story = {
  args: {
    position: 'topCenter',
    variant: 'subtle',
    type: 'info',
    autoDismiss: 3000,
    description: 'This is an example toast'
  },
  render: (args: Args) => (
    <ToastProvider>
      <ComponentWhereToastIsTriggered {...args} />
    </ToastProvider>
  )
};
```