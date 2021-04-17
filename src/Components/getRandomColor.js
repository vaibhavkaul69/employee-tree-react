export function getRandomColor() {
	const color1 = parseInt(Math.random() * 255);
	const color2 = parseInt(Math.random() * 255);
	const color3 = parseInt(Math.random() * 255);

	return `rgba(${color1},${color2},${color3},1)`;
}
