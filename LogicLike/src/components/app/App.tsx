import './App.scss';
import { useCallback, useEffect, useState } from 'react';

import getData from '../../service/get-data';
import IDataItem from './type';

import Sidebar from '../side-bar/Sidebar';
import ItemList from '../item-list/ItemList';
import Loader from '../loader/loader';
import Spin from '../loader/loader2';

function App() {
	const [data, setData] = useState<IDataItem[] | null>(null);
	const [tags, setTags] = useState<string[]>([]);
	const [filteredData, setFilteredData] = useState<IDataItem[] | null>([]);
	const [activeTag, setActiveTag] = useState<string>('Все темы');

	const handleFilterTags = useCallback(function f(
		tag: string
	): void {
		if (activeTag === tag) return;
		if (data) {
			setActiveTag(tag);
			if (tag === 'Все темы') {
				setFilteredData(data);
			} else {
				const newData = data?.filter((el) => el.tags.some((el) => el === tag));
				setFilteredData(newData);
			}
		}
	}, [activeTag, data]);

  // Определяем уникальные теги для сайдбара
	const defineUniqTags = useCallback(() => {
		if (data && data.length > 0) {
			const arr: string[] = ['Все темы'];

			data.forEach((el) => {
				arr.push(...el.tags);
			});

			const uniqueTags = Array.from(new Set(arr));
			setTags(uniqueTags);
		}
	}, [data]);

	const fetchData = useCallback(async () => {
		const fetchedData = await getData();
		setData(fetchedData);
		setFilteredData(fetchedData);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		defineUniqTags();
	}, [data, defineUniqTags]);

	return (
		<div className="main">
			{data ? (
				<Sidebar
					onFilterTags={handleFilterTags}
					tags={tags}
					activeTag={activeTag}
				/>
			) : (
				<Loader />
			)}
			{data ? <ItemList data={filteredData} /> : <Spin />}
		</div>
	);
}

export default App;
