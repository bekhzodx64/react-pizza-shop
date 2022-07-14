import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ searchValue, setSearchValue }) => {
	return (
		<Fragment>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Outlet />
		</Fragment>
	);
};

export default Layout;
