import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

//importing material components
import { Grid } from "@material-ui/core";

//importing custom scripts
import { connect } from "react-redux";
import { getAnalytics } from "../../actions/getAnalyticsAction";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
    analytics: [],
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

//   // my functions
//   getSiteAnalytics() {}

//   // life-cycle methods
//   componentWillMount() {
//     this.getSiteAnalytics();
//   }

  render() {
    let Data = [
      {
        countNum: 199,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
      {
        countNum: 575,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
      {
        countNum: 69,
        countTitle:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
      },
    ];

    return (
      <Fragment>
        <div className="row">
          {this.props.analytics_data.map((analytics) => (
            <Grid container direction="row">
              <Grid item xs={3}>
                <div className="counterup_style--1" key={1}>
                  <h5 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp
                        end={this.state.didViewCountUp ? analytics.course : 0}
                      />
                    </VisibilitySensor>
                  </h5>
                  <p className="description">Courses</p>
                </div>
              </Grid>

              <Grid item xs={3}>
                <div className="counterup_style--1" key={1}>
                  <h5 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp
                        end={
                          this.state.didViewCountUp ? analytics.instructor : 0
                        }
                      />
                    </VisibilitySensor>
                  </h5>
                  <p className="description">Instructors</p>
                </div>
              </Grid>

              <Grid item xs={3}>
                <div className="counterup_style--1" key={1}>
                  <h5 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp
                        end={this.state.didViewCountUp ? analytics.user : 0}
                      />
                    </VisibilitySensor>
                  </h5>
                  <p className="description">Users</p>
                </div>
              </Grid>

              <Grid item xs={3}>
                <div className="counterup_style--1" key={1}>
                  <h5 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp
                        end={this.state.didViewCountUp ? analytics.sold : 0}
                      />
                    </VisibilitySensor>
                  </h5>
                  <p className="description">Subscribers</p>
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    analytics_data: state.getAnalytics.getAnalytics
});

export default connect(mapStateToProps, { getAnalytics })(CounterOne);
