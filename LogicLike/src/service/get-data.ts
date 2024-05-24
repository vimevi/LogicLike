export default async function () {
	const data = await fetch('https://logiclike.com/docs/courses.json');
	const res = await data.json();
	return res
}
