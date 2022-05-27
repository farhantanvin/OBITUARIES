import React from 'react';

export default function visibilityIcon(props) {
	return (
		<svg
			className={`btn p-0 ${props.styles}`}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px"
			viewBox="0 0 512.001 512.001"
			xmlSpace="preserve"
			onClick={() => { props.toggleVisibility(); }}>
			<path fill="#aaa" d="M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424C463.013,282.065,362.256,383.996,255.995,383.996z" />
			<path fill="#aaa" d="M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64S291.28,319.996,255.995,319.996z" />
			{!props.show && <path fill="#aaa" d="M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211C449.025,78.051,449.025,71.288,444.865,67.128z" />}
		</svg>
	);
}