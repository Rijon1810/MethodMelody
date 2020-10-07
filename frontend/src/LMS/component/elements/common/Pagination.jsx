import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function Pagination({ coursePerPage, totalCourses, paginate }) {
  //hooks
  const [activePageNumber, setActivePageNumber] = useState(1);

  const courseNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursePerPage); i++) {
    courseNumbers.push(i);
  }

  return (
    <div className="rn-pagination text-center">
      <ul className="page-list">
        {/* <li className="active">
          <Link to="#">1</Link>
        </li>
        <li>
          <Link to="#">2</Link>
        </li>
        <li>
          <Link to="#">3</Link>
        </li>
        <li>
          <Link to="#">4</Link>
        </li> */}
        {courseNumbers.map((number) => (
          <li
            key={number}
            className={activePageNumber === number ? 'active' : ''}
          >
            <Link
              onClick={() => {
                paginate(number);
                setActivePageNumber(number);
              }}
              to="#"
            >
              {number}
            </Link>
          </li>
        ))}
        {/* <li>
          <Link to="#">
            <FaAngleRight />
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
