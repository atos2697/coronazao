import React from "react";
import styled from "@emotion/styled";

const PropiedadesPaginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      {pageNumbers.map((number) => (
        <Pagination
          onClick={() => paginate(number)}
          href="#"
          className="page-link"
        >
          {number}
        </Pagination>
      ))}
    </div>
  );
};

const Pagination = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid #060b26;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  background-color: transparent;
  color: #060b26;
  cursor: pointer;
  :hover {
    color: #ab2346;
    border: 1px solid #ab2346;
  }
`;

export default PropiedadesPaginate;
