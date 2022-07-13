import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://62cedd9e826a88972d04976a.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
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
