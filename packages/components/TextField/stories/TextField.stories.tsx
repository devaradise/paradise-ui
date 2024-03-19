import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextField, TextFieldProps } from '../src';
import { LockKey, User, Eye, WarningCircle } from '@phosphor-icons/react'

const meta = {
  title: 'Component/Form/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string'
    },
    secondaryLabel: {
      type: 'string'
    },
    variant: {
      options: ['box', 'line', 'filled'],
      control: { type: 'select' },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'box' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'md' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    invalid: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    prefix: {
      type: 'string'
    },
    suffix: {
      type: 'string'
    },
    helperText: {
      type: 'string'
    },
    errorMessage: {
      type: 'string'
    }
  },
  args: { onClick: fn(), onFocus: fn(), onBlur: fn(), onChange: fn() }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = (args: TextFieldProps) => {
  return (
    <TextField {...args}/>
  )
}
Usage.args = {
  label: 'Main label',
  secondaryLabel: 'Secondary label',
  placeholder: 'Placeholder',
  variant: 'box',
  size: 'md',
  readOnly: false,
  invalid: false,
  disabled: false,
  prefix: 'Prefix',
  suffix: 'Suffix',
  helperText: 'A note, description or instruction for this text field',
  errorMessage: '',
}

export const Basic: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField placeholder="Placeholder" label="Label"/>
  </>
  )
}

export const Controlled: Story = () => {
  const [value, setValue] = useState<string>('')
  return (<>
    <TextField placeholder="Placeholder" value={value} onChange={(value) => setValue(value)}/>
    <br/>
    Value: { value }
  </>
  )
}
Controlled.parameters = {
  controls: {
    disable: true
  }
}

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField variant="box" placeholder='Placeholder'/>
    <br/>
    <TextField variant="line" placeholder='Placeholder'/>
    <br/>
    <TextField variant="filled" placeholder='Placeholder'/>
  </>
  )
}

export const Sizes: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField size="sm" placeholder='sm: small'/>
    <TextField size="md" placeholder='md: medium'/>
    <TextField size="lg" placeholder='lg: large'/>
  </>
  )
}

export const States: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField readOnly defaultValue='readOnly'/>
    <TextField invalid defaultValue='invalid'/>
    <TextField disabled defaultValue='disabled'/>
  </>
  )
}

export const LabelsAndMessages: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField label="Text field" placeholder='Placeholder' secondaryLabel="required"/>
    <br/>
    <TextField label="Text field" placeholder='Placeholder' secondaryLabel={<div style={{color: 'red'}}>required</div>} helperText="A note, description or instruction for this text field" />
    <br/>
    <TextField label="Text field" placeholder='Placeholder' secondaryLabel={<WarningCircle/>} helperText="A note, description or instruction for this text field'"  errorMessage="An error message will override helper text"/>
  </>
  )
}

export const PrefixAndSuffix: Story = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => (<>
    <TextField label="Text field" placeholder='Placeholder' prefix="Prefix"/>
    <br/>
    <TextField label="Text field" placeholder='Placeholder' prefix={<User />}/>
    <br/>
    <TextField label="Text field" placeholder='Placeholder' suffix="Suffix"/>
    <br/>
    <TextField label="Text field" placeholder='Placeholder' suffix={<Eye />}/>
    <br/>
    <TextField label="Text field" placeholder='Placeholder' prefix={<LockKey />} suffix={<Eye />}/>
  </>
  )
}