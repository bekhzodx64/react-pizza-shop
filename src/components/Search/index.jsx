import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
	const clearSearchInput = (e) => {
		setSearchValue('');
	};

	return (
		<div className={styles.root}>
			<svg
				className={styles.icon}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
			<input
				value={searchValue}
				className={styles.input}
				placeholder='Поиск пиццы...'
				type='text'
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<svg
					className={styles.clear}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					onClick={clearSearchInput}
					strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			)}
		</div>
	);
};

export default Search;
