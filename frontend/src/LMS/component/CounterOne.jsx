import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

//importing material components
import {Grid} from "@material-ui/core";

//importing custom scripts
import axios from '../api/Config';

class CounterOne extends Component{
    state = {
        didViewCountUp: false,
        analytics: []
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }

    // my functions
    getSiteAnalytics(){
        axios
        .get("analytics/", {
            headers: {
                "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
              },
        })
        .then((res)=>{
            const analyticsArray = res.data;
            this.setState({analytics: analyticsArray});
            console.log(
                "analytics fetched in CounterOne: " + JSON.stringify(analyticsArray[0]) 
              );
        });
    }

     // life-cycle methods
     componentWillMount(){
        this.getSiteAnalytics();
    }


    render(){
        let Data = [
            {
                countNum : 199,
                countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            },
            {
                countNum : 575,
                countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            },
            {
                countNum : 69,
                countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {this.state.analytics.map( (analytics) => (
                        <Grid container direction="row">
                            <Grid item xs={3}>
                                <div className="counterup_style--1" key={1}>
                            
                                    <h5 className="counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? analytics.course : 0} />
                                        </VisibilitySensor>
                                    </h5>
                                    <p className="description">Courses</p>  
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="counterup_style--1" key={1}>
                            
                                    <h5 className="counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? analytics.instructor : 0} />
                                        </VisibilitySensor>
                                    </h5>
                                    <p className="description">Instructors</p>  
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="counterup_style--1" key={1}>
                            
                                    <h5 className="counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? analytics.user : 0} />
                                        </VisibilitySensor>
                                    </h5>
                                    <p className="description">Users</p>  
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="counterup_style--1" key={1}>
                            
                                    <h5 className="counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? analytics.sold : 0} />
                                        </VisibilitySensor>
                                    </h5>
                                    <p className="description">Subscribers</p>  
                                </div>
                            </Grid>
                        </Grid>
                        


                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;