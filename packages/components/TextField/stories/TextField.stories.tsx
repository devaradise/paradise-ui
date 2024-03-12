import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField, TextFieldProps } from '../src';

const meta = {
  title: 'Component/Form/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      defaultValue: '',
      description: 'Label for text field'
    },
    secondaryLabel: {
      defaultValue: '',
      description: 'Secondary label. Can be used to show any additional information about the field'
    },
    placeholder: {
      defaultValue: '',
      description: 'Placeholder text when the text field is unfilled'
    },
    variant: {
      description: 'Style variant for text field',
      options: ['box', 'line', 'filled'],
      control: { type: 'select' },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'box' },
      },
    },
    name: {
      defaultValue: '',
      description: 'It is the same attribute as \'name\' in native < input > element'
    },
    className: {
      defaultValue: '',
      description: 'Additional class names for the textfield component container'
    },
  // overridingClass?: { [key:string]: string }
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'To disable text field. It is the same attribute as \'disabled\' in native < input > element'
    },
    defaultValue: {
      defaultValue: '',
      description: 'To set default value for textfield, usually used for uncontrolled component'
    },
    value: {
      defaultValue: '',
      description: 'To set value for textfield, used to control component'
    },
    prefix: {
      defaultValue: '',
      type: 'string',
      description: 'A text, icon or another element to put before text field input'
    },
    suffix: {
      defaultValue: '',
      type: 'string',
      description: 'A text, icon or another element to put after text field input'
    },
    helperText: {
      defaultValue: '',
      type: 'string',
      description: 'A text to describe the text field. Placed under the text field input'
    },
    errorMessage: {
      defaultValue: '',
      type: 'string',
      description: 'Error message for the text field. It will be replaced the helper text when defined'
    },
    onChange: {
      defaultValue: '',
      description: 'A function that pass text field value when its changed'
    }
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = (args: TextFieldProps) => {
  return (
    <div style={{ width: '500px'}}>
      <TextField {...args}/>
    </div>
  )
}
Basic.args = {
  label: 'Main label',
  secondaryLabel: 'Secondary label',
  placeholder: 'Placeholder',
  variant: 'box',
  disabled: false,
  prefix: '',
  suffix: '',
  helperText: 'A note, description or instruction for this text field',
  errorMessage: '',
}