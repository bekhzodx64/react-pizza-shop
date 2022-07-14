import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(e) => onChangePage(e.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={3}
			renderOnZeroPageCount={null}
			containerClassName={styles.pagination}
			pageLinkClassName={styles.paginationLink}
			previousLinkClassName={styles.paginationNav}
			nextLinkClassName={styles.paginationNav}
			activeLinkClassName={styles.paginationActive}
			disabledClassName='pagination-disabled'
			eventListener={window.scrollTo(0, 0)}
			breakClassName='pagination-num'
		/>
	);
};

export default Pagination;
