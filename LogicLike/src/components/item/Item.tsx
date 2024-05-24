import './item.scss';

interface IItemProps {
	name: string;
	image: string;
	bgColor: string;
}

const Item: React.FC<IItemProps> = ({ name, image, bgColor }) => {
	return (
		<li className="item">
			<div className='image-bg' style={{ backgroundColor: bgColor }}>
				<img src={image} alt={name} />
			</div>
			<div>
				<div className='item-name'>{name}</div>
			</div>
		</li>
	);
};

export default Item;
