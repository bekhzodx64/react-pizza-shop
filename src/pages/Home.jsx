import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const sortBy = sortType.sortProperty.replace('-', '');
	const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://62cedd9e826a88972d04976a.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
		)
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, category, sortBy, order]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onChangeCategory={(index) => setCategoryId(index)}
				/>
				<Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((item) => <PizzaBlock key={item.id} {...item} />)}
			</div>
		</div>
	);
};

export default Home;
