import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Alert } from '../src';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { tailwindAlertElementClass } from '../src/elementClass';

const meta = {
	title: 'Component/Feedback/Alert',
	component: Alert,
	parameters: {
		controls: {
			disable: true
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: ['subtle', 'solid', 'outlined', 'left-bordered'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'subtle | solid | outlined | left-bordered' },
				defaultValue: { summary: 'subtle' }
			}
		},
		type: {
			options: ['info', 'success', 'warning', 'error'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'info | success | warning | error' },
				defaultValue: { summary: 'info' }
			}
		}
	},
	decorators: [
		(Story: any) => {
			return (
				<form style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
					{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
					<Story />
				</form>
			);
		}
	]
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
	parameters: {
		controls: {
			disable: false
		}
	},
	args: {
		type: 'info',
		variant: 'subtle',
		closeable: true,
		children: 'Lorem ipsum dolor sit amet',
		onClose: () => {}
	}
};

export const UsageWithTailwindClass: Story = {
	parameters: {
		controls: {
			disable: false
		}
	},
	args: {
		type: 'info',
		variant: 'subtle',
		closeable: true,
		children: 'Lorem ipsum dolor sit amet',
		onClose: () => {}
	},
	render: (args) => {
		return <Alert {...args} elementClass={tailwindAlertElementClass}></Alert>;
	}
};
export const AlertTypesAndVariant: StoryFn = () => (
	<>
		<h3>Info Alerts</h3>
		<Alert variant='subtle'>
			Alert variant <strong>subtle</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert variant='solid'>
			Alert variant <strong>solid</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert variant='outlined'>
			Alert variant <strong>outlined</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert variant='left-bordered'>
			Alert variant <strong>left-bordered</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<h3>Success Alerts</h3>
		<Alert type='success' variant='subtle'>
			Alert variant <strong>subtle</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='success' variant='solid'>
			Alert variant <strong>solid</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='success' variant='outlined'>
			Alert variant <strong>outlined</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='success' variant='left-bordered'>
			Alert variant <strong>left-bordered</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<h3>Warning Alerts</h3>
		<Alert type='warning' variant='subtle'>
			Alert variant <strong>subtle</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='warning' variant='solid'>
			Alert variant <strong>solid</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='warning' variant='outlined'>
			Alert variant <strong>outlined</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='warning' variant='left-bordered'>
			Alert variant <strong>left-bordered</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<h3>Error Alerts</h3>
		<Alert type='error' variant='subtle'>
			Alert variant <strong>subtle</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='error' variant='solid'>
			Alert variant <strong>solid</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='error' variant='outlined'>
			Alert variant <strong>outlined</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
		<Alert type='error' variant='left-bordered'>
			Alert variant <strong>left-bordered</strong> - lorem ipsum dolor sit amet
		</Alert>
		<br />
	</>
);

export const AlertWithCustomContent: StoryFn = () => (
	<Alert closeable={true}>
		<h3>Lorem ipsum title</h3>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
			text ever since the 1500s
		</p>
	</Alert>
);

export const AlertWithCustomIcon: StoryFn = () => <Alert icon={<PaperPlaneTilt />}>Lorem ipsum dolor sit amet</Alert>;

export const ClosableAlert: StoryFn = () => <Alert closeable={true}>Lorem ipsum dolor sit amet</Alert>;
