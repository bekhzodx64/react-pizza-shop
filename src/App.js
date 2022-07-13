import Home from './pages/Home';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App = () => {
	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='cart' element={<Cart />} />
							<Route path='*' element={<NotFound />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
