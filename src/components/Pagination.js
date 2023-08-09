import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../actions/paginationActions';

const Pagination = () => {
  const { currentPage, totalPages } = useSelector(state => state.pagination);
  const dispatch = useDispatch();

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
    }
  };

  const visiblePages = Math.min(totalPages, 10);
  const pageNumbers = Array.from({ length: visiblePages }, (_, index) => index + 1);

  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
      {pageNumbers.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
