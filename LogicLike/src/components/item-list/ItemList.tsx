import React from 'react';
import IDataItem from '../app/type';
import Item from '../item/Item';
import './item-list.scss';

interface ItemListProps {
	data: IDataItem[] | null;
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
	return (
		<ul className="list">
			{data?.map((el) => {
				return (
					<Item
						key={el.id}
						name={el.name}
						image={el.image}
						bgColor={el.bgColor}
					/>
				);
			})}
		</ul>
	);
};

export default ItemList;
