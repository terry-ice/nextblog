import * as React from 'react';
import Head from './head';
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

const MainLayout: React.SFC<Props> = ({
  title,
  description,
  ogImage,
  url,
  router,
  children,
}) => {
  const { asPath } = router;

  return (
    <>
      <Head
        title={` | ${title}`}
        description={description}
        ogImage={ogImage}
        url={url}
      />
      <header className="tada-container">
        <nav className="menu-desktop menu-sticky">
          <ul className="tada-menu">
            <li>
              <a href="#" className="active">
                Home <i className="icon-arrow-down8" />
              </a>
            </li>
            <li>
              <a href="#">
                Article <i className="icon-arrow-down8" />
              </a>
            </li>
            <li>
              <a href="#">
                Project <i className="icon-arrow-down8" />
              </a>
            </li>
            <li>
              <a href="#">
                Context <i className="icon-arrow-down8" />
              </a>
            </li>
            <li>
              <a href="#">
                Context <i className="icon-arrow-down8" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="tada-container content-posts">{children}</section>
      <footer className="tada-container clearfix">
        <div className="footer-bottom">
          <span className="copyright">
            The blog Created by terry Copyright @{new Date().getFullYear()}
          </span>
          <span className="backtotop">
            TOP <i className="icon-arrow-up7" />
          </span>
          <div className="clearfix" />
        </div>
      </footer>
    </>
  );
};

export default compose<Props, Props>(withRouter)(MainLayout);
