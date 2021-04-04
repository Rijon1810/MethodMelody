import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getSelectedInstructorId } from "../../../../actions/getSelectedIdAction";

const InstructorList = () => {
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row">
        {instructorList.map((instructor) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            key={instructor._id}
          >
            <div className="blog blog-style--1">
              <div
                className="thumbnail"
                onClick={async (event) => {
                  dispatch(getSelectedInstructorId(instructor));
                }}
              >
                <Link to="/instructorview">
                  <img
                    className="w-100"
                    src={`htpp://localhost:8080/` + instructor.photo}
                    alt="Blog Images"
                  />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                    to="/instructorview"
                    onClick={async (event) => {
                      dispatch(getSelectedInstructorId(instructor));
                    }}
                  >
                    {instructor.name}
                  </Link>
                </h4>
                <div className="blog-btn">
                  <Link
                    className="rn-btn text-white"
                    to="/instructorview"
                    onClick={async (event) => {
                      dispatch(getSelectedInstructorId(instructor));
                    }}
                  >
                    View Instructor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default InstructorList;
