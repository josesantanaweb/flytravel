import React from "react";
import ReactPaginate from "react-paginate";

const Previous = () => {
  return (
    <span>
      <i className="fa fa-angle-left" />
    </span>
  );
};

const Next = () => {
  return (
    <span>
      <i className="fa fa-angle-right" />
    </span>
  );
};

const Paginate = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      previousLabel={<Previous />}
      nextLabel={<Next />}
      breakLabel={"..."}
      breakClassName={"break-me"}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Paginate;
