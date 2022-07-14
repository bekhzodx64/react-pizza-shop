const Categories = ({ value, onChangeCategory }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const categoryList = categories.map((categoryName, index) => (
		<li
			key={index}
			onClick={() => onChangeCategory(index)}
			className={value === index ? 'active' : null}>
			{categoryName}
		</li>
	));

	return (
		<div className='categories'>
			<ul>{categoryList}</ul>
		</div>
	);
};

export default Categories;
