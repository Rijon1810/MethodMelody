import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const TestimonialOne = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Tabs>
          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>
                  This is my Go To place to learn how to play a song or
                  technique correctly.
                </h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Janet Jackson </span> -  Essential Guitar - Harmony & Theory Advanced
                </h6>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>
                  All of the lessons that I’ve purchased have been accurate and
                  well explained.
                </h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Chandler Bing </span> - Learn To Play Eric Clapton Acoustic Songs
                </h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>
                  Exceptional tutors, excellent products, excellent customer
                  service – six stars out of five! Why? 'Cause six is one more
                  than five :).
                </h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Christina Grimme</span> -
                  Quick Licks - Joe Satriani Volume 2
                </h6>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>Everything is great. I am pleased to be on your site.</h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Robert Patrick</span> - Learn To Play Easy Acoustic Rock Volume 2
                </h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>Great product easy to follow with excellent tutors</h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">John Doe </span> - 51 Extreme Tapping Licks
                </h6>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>
                  The best online teaching resource for guitarists! Subscribe
                  now, you won't regret it!
                </h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Marry Ann</span> - Essential
                  Guitar - Harmony & Theory Advanced
                </h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>Great tutors and easy to follow lessons.</h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Monica</span> - Learn To Play
                  Ed Sheeran
                </h6>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="rn-testimonial-content text-center">
              <div className="text-white">
                <h3>You get what "It Says On The Tin", and rapid response!!!</h3>
              </div>
              <div className="author-info">
                <h6>
                  <span className="theme-gradient">Lisa Kudrow</span> - Learn To
                  Play Eric Clapton Acoustic Songs
                </h6>
              </div>
            </div>
          </TabPanel>

          <TabList className="testimonial-thumb-wrapper">
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_1.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_2.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_3.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_4.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_5.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_6.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_7.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="testimonial-thumbnai">
                <div className="thumb">
                  <img
                    src="/assets/images/client/dummy_user_8.jpg"
                    alt="Testimonial Images"
                  />
                </div>
              </div>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default TestimonialOne;
