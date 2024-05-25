export default async function () {
	try {
		const data = await fetch('https://logiclike.com/docs/courses.json');
		const res = await data.json();
		return res;
	} catch (err) {
		console.error(err);
	}
}
