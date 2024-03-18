import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField, TextFieldProps } from '../src';

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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = (args: TextFieldProps) => {
  return (
      <TextField {...args}/>
  )
}
Basic.args = {
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