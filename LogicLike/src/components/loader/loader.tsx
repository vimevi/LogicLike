import ContentLoader from 'react-content-loader';

const Loader = () => (
	<ContentLoader
		speed={2}
		width={300}
		height={400}
		viewBox="0 0 400 460"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		style={{ border: '1px solid rgba(207, 207, 228, 1)', borderRadius: 18 }}
	>
		<rect x="25" y="0" rx="15" ry="15" width="300" height="44" />
		<rect x="25" y="55" rx="15" ry="15" width="300" height="44" />
		<rect x="25" y="115" rx="15" ry="15" width="300" height="44" />
		<rect x="24" y="170" rx="15" ry="15" width="300" height="44" />
		<rect x="26" y="235" rx="15" ry="15" width="300" height="44" />
	</ContentLoader>
);

export default Loader;
