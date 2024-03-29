import { ToastProps } from './type';
import './style.scss';

export const Toast = (props: ToastProps) => {
	const {
		id = `pui-${Math.random().toString(36).substring(3)}`,
		position = 'topCenter',
		duration = 3000,
		variant = 'soft-filled',
		type = 'info',
		customIcon,
		title,
		description,
		autoDismiss = true,
		customComponent = () => <div>asd</div>
	} = props;
	return <div className='pui-toast'>{}</div>;
};
