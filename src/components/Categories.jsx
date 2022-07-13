import { useState } from 'react';

const Categories = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onClickCategory = (index) => {
		setActiveIndex(index);
	};

	const categoryList = categories.map((category, index) => (
		<li
			key={index}
			onClick={() => onClickCategory(index)}
			className={activeIndex === index ? 'active' : null}>
			{category}
		</li>
	));

	return (
		<div className='categories'>
			<ul>{categoryList}</ul>
		</div>
	);
};

export default Categories;
