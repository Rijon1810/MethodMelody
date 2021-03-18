import React, { Component ,Fragment } from "react";
import BlogContent from "./BlogContent";
import  { Link} from 'react-router-dom'

class CourseList extends Component{
    render() {
        const PostList = BlogContent.slice(0 , 6);
        return (
             <Fragment>
                 <div className="row">
                    {PostList.map((value , i ) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <Link to="/blog-details">
                                        <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <p className="blogtype">{value.category}</p>
                                    <h4 className="title"><Link to="/blog-details">{value.title}</Link></h4>
                                    <div className="blog-btn">
                                        <Link className="rn-btn text-white" to="/blog-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    courseList: state.getCourse.courseList,
  });
  
export default connect(mapStateToProps, { getCourse })(CourseList);

