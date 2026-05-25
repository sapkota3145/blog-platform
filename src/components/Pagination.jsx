function Pagination({
    totalPages,
    page,
    setPage,
  }) {
    return (
      <div className="pagination">
        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setPage(index + 1)
              }
              className={
                page === index + 1
                  ? 'pagination__button active'
                  : 'pagination__button'
              }
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    );
  }
  
  export default Pagination;