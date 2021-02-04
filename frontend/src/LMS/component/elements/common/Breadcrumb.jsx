import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component{
    render(){
        const { title , parent} = this.props;
        return(        
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--30 bg_image bg_image--1" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                
                                    <h2 className="title text-left ">{}</h2>
                                    {!this.props.from ?  (
                                        <ul className="page-list text-left">
                                            <li className="breadcrumb-item active">All</li>    
                                            <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Popular</Link></li>
                                            <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Featured</Link></li>
                                            <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                                {parent? <li className="breadcrumb-item">{parent}</li>:''}                                   
                                        </ul>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

