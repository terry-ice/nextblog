import * as React from 'react';
import Layout from 'components/global/layout';
import SideBar from 'components/global/sideBar';
import Navigation from 'components/global/navigation';

export const Home = () => (
  <Layout title="Dashbord" description="This is the home page">
    <div className="content col-xs-8">
      <article>
        <div className="post-image">
          <img src="/static/images/img-post-1.jpg" />
          <div className="category">
            <a href="#">IMG</a>
          </div>
        </div>
        <div className="post-text">
          <span className="date">07 Jun 2016</span>
          <h2>
            <a href="#">MAECENAS CONSECTETUR</a>
          </h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam. Nunc maximus arcu sit amet accumsan imperdiet.
            Aliquam elementum efficitur ipsum nec blandit. Pellentesque posuere
            vitae metus sed auctor. Nullam accumsan fringilla ligula non
            pellentesque.
            <a href="#">
              <i className="icon-arrow-right2" />
            </a>
          </p>
        </div>
        <div className="post-info">
          <div className="post-by">
            Post By <a href="#">AD-Theme</a>
          </div>
          <div className="extra-info">
            <a href="#">
              <i className="icon-facebook5" />
            </a>
            <a href="#">
              <i className="icon-twitter4" />
            </a>
            <a href="#">
              <i className="icon-google-plus" />
            </a>
            <span className="comments">
              25 <i className="icon-bubble2" />
            </span>
          </div>
          <div className="clearfix" />
        </div>
      </article>
      <Navigation />
    </div>
    <SideBar />
  </Layout>
);

export default Home;
