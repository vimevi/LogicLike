import React from 'react';
import './sidebar.scss';

interface SidebarProps {
	onFilterTags: (tag: string) => void;
	tags: string[];
	activeTag: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterTags, tags, activeTag }) => {
	return (
		<aside className="sidebar">
			{/* Set гарантирует уникальность названий тегов,
			 поэтому в качестве key можно использовать tag name */}
			{tags.map((tag) => (
				<div onClick={() => onFilterTags(tag)} className={`sidebarEl ${tag === activeTag ? 'sidebarElActive' : ''}`} key={tag}>
					{tag}
				</div>
			))}
		</aside>
	);
};

export default Sidebar;
