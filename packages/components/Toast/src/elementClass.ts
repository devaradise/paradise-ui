import { ToastElementClass, ToastElementClassProps } from './type';

// @ts-ignore
export const defaultToastElementClass = (props: ToastElementClassProps): ToastElementClass => {
	return {
		topLeftContainer: 'pui-toast-container pui-top-left-toast-container',
		topCenterContainer: 'pui-toast-container pui-top-center-toast-container',
		topRightContainer: 'pui-toast-container pui-top-right-toast-container',
		bottomLeftContainer: 'pui-toast-container pui-bottom-left-toast-container',
		bottomCenterContainer: 'pui-toast-container pui-bottom-center-toast-container',
		bottomRightContainer: 'pui-toast-container pui-bottom-right-toast-container',
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
