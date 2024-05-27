import { ToastElementClass, ToastElementClassProps } from './type';

// @ts-ignore
export const defaultToastElementClass = (props: ToastElementClassProps): ToastElementClass => {
	return {
		topLeftContainer: 'pui-toast__container pui-toast__container--top-left',
		topCenterContainer: 'pui-toast__container pui-toast__container--top-center',
		topRightContainer: 'pui-toast__container pui-toast__container--top-right',
		bottomLeftContainer: 'pui-toast__container pui-toast__container--bottom-left',
		bottomCenterContainer: 'pui-toast__container pui-toast__container--bottom-center',
		bottomRightContainer: 'pui-toast__container pui-toast__container--bottom-right',
		toast: 'pui-toast'
	};
};

// @ts-ignore
export const tailwindToastElementClass = (props: ToastElementClassProps): ToastElementClass => {
	return {
		topLeftContainer: 'fixed z-[999] max-w-[360px] top-3 left-3',
		topCenterContainer: 'fixed z-[999] max-w-[360px] top-3 left-[50%] translate-x-[-50%]',
		topRightContainer: 'fixed z-[999] max-w-[360px] top-3 right-3',
		bottomLeftContainer: 'fixed z-[999] max-w-[360px] bottom-3 left-3',
		bottomCenterContainer: 'fixed z-[999] max-w-[360px] bottom-3 left-[50%] translate-x-[-50%]',
		bottomRightContainer: 'fixed z-[999] max-w-[360px] bottom-3 right-3',
		toast: 'w-fit-content min-w-[200px] max-w-[400px] mb-3'
	};
};
