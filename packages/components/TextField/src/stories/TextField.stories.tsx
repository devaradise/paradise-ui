import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../TextField';

const meta: Meta<typeof TextField> = {
  title: "Text Field",
  component: TextField,
};
export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
Default.storyName = "Text Field"
