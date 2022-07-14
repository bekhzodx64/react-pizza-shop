import Home from './pages/Home';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { useState } from 'react';

const App = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className='wrapper'>
			<div className='content'>
				<Routes>
					<Route
						path='/'
						element={
							<Layout
								searchValue={searchValue}
								setSearchValue={setSearchValue}
							/>
						}>
						<Route index element={<Home searchValue={searchValue} />} />
						<Route path='cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
