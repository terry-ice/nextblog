import * as React from 'react';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';
interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

const SideBar: React.SFC<Props> = ({}) => {
  return (
    <div className="sidebar col-xs-4">
      <div className="widget about-me">
        <div className="ab-image">
          <img src="/static/images/about-me.jpg" alt="about me" />
          <div className="ab-title">About Me</div>
        </div>
        <div className="ad-text">
          <p>
            Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </p>
          <span className="signing">
            <img src="/static/images/signing.png" />
          </span>
        </div>
      </div>
      <div className="widget latest-posts">
        <h3 className="widget-title">Latest Posts</h3>
        <div className="posts-container">
          <div className="item">
            <img
              src="/static/images/latest-posts-1.jpg"
              alt="post 1"
              className="post-image"
            />
            <div className="info-post">
              <h5>
                <a href="#">
                  MAECENAS <br /> CONSECTETUR
                </a>
              </h5>
              <span className="date">07 JUNE 2016</span>
            </div>
            <div className="clearfix" />
          </div>

          <div className="item">
            <img
              src="/static/images/latest-posts-2.jpg"
              alt="post 2"
              className="post-image"
            />
            <div className="info-post">
              <h5>
                <a href="#">MAURIS SIT AMET</a>
              </h5>
              <span className="date">06 JUNE 2016</span>
            </div>
            <div className="clearfix" />
          </div>

          <div className="item">
            <img
              src="/static/images/latest-posts-3.jpg"
              alt="post 3"
              className="post-image"
            />
            <div className="info-post">
              <h5>
                <a href="#">
                  NAM EGET <br /> PULVINAR ANTE
                </a>
              </h5>
              <span className="date">05 JUNE 2016</span>
            </div>
            <div className="clearfix" />
          </div>

          <div className="item">
            <img
              src="/static/images/latest-posts-4.jpg"
              alt="post 4"
              className="post-image"
            />
            <div className="info-post">
              <h5>
                <a href="#">VIVAMUS ET TURPIS LACINIA</a>
              </h5>
              <span className="date">04 JUNE 2016</span>
            </div>
            <div className="clearfix" />
          </div>

          <div className="clearfix" />
        </div>
      </div>

      <div className="widget follow-us">
        <h3 className="widget-title">Follow Us</h3>
        <div className="follow-container">
          <a href="#">
            <i className="icon-facebook5" />
          </a>
          <a href="#">
            <i className="icon-twitter4" />
          </a>
          <a href="#">
            <i className="icon-google-plus" />
          </a>
          <a href="#">
            <i className="icon-vimeo4" />
          </a>
          <a href="#">
            <i className="icon-linkedin2" />
          </a>
        </div>
        <div className="clearfix" />
      </div>

      <div className="widget tags">
        <h3 className="widget-title">Tags</h3>
        <div className="tags-container">
          <a href="#">Audio</a>
          <a href="#">Travel</a>
          <a href="#">Food</a>
          <a href="#">Event</a>
          <a href="#">Wordpress</a>
          <a href="#">Video</a>
          <a href="#">Design</a>
          <a href="#">Sport</a>
          <a href="#">Blog</a>
          <a href="#">Post</a>
          <a href="#">Img</a>
          <a href="#">Masonry</a>
        </div>
        <div className="clearfix" />
      </div>

      <div className="widget advertising">
        <div className="advertising-container">
          <img src="/static/images/350x300.png" alt="banner 350x300" />
        </div>
      </div>
      <div className="widget newsletter">
        <h3 className="widget-title">Newsletter</h3>
        <div className="newsletter-container">
          <h4>DO NOT MISS OUR NEWS</h4>
          <p>
            Sign up and receive the <br /> latest news of our company
          </p>
          <form>
            <input
              type="email"
              className="newsletter-email"
              placeholder="Your email address..."
            />
            <button type="submit" className="newsletter-btn">
              Send
            </button>
          </form>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(SideBar);
