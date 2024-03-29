export const InfoIcon = ({ fill = '#000' }: { fill?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={fill} viewBox='0 0 256 256'>
			<path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z'></path>
		</svg>
	);
};

export const WarningIcon = ({ fill = '#000' }: { fill?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={fill} viewBox='0 0 256 256'>
			<path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z'></path>
		</svg>
	);
};

export const SuccessIcon = ({ fill = '#000' }: { fill?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={fill} viewBox='0 0 256 256'>
			<path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z'></path>
		</svg>
	);
};

export const ErrorIcon = ({ fill = '#000' }: { fill?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={fill} viewBox='0 0 256 256'>
			<path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z'></path>
		</svg>
	);
};

export const CloseIcon = ({ fill = '#000' }: { fill?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={fill} viewBox='0 0 256 256'>
			<path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
		</svg>
	);
};
