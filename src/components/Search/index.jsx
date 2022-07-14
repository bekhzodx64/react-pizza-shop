import styles from './Search.module.scss';

const Search = () => {
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
				className={styles.input}
				placeholder='Поиск пиццы...'
				type='text'
			/>
		</div>
	);
};

export default Search;
