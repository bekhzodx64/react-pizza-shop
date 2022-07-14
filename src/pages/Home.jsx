import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const sortBy = sortType.sortProperty.replace('-', '');
	const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
	const search = searchValue ? `&search=${searchValue}` : '';

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://62cedd9e826a88972d04976a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [
		categoryId,
		sortType,
		searchValue,
		category,
		sortBy,
		order,
		currentPage,
		search,
	]);

	const skeletons = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	));
	const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

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
			<div className='content__items'>{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</div>
	);
};

export default Home;
