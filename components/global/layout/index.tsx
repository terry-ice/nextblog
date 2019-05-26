import * as React from 'react';
import uuid from 'uuid/v4';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import Head from './head';
import NProgress from 'components/global/customNProgress';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

const activeClass = 'ant-menu-item-selected';

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
      <Layout className="layout">
        <header className="tada-container">
          <nav className="menu-desktop menu-sticky">
            <ul className="tada-menu">
              <li>
                <a href="#" className="active">
                  HOME <i className="icon-arrow-down8" />
                </a>
              </li>
              <li>
                <a href="#">
                Article <i className="icon-arrow-down8" />
                </a>
              </li>
              <li>
                <a href="#">
                  About <i className="icon-arrow-down8" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Content>
          <div className="content-body">{children}</div>
        </Content>
        <Footer>
          <footer className="tada-container">
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
        </Footer>
      </Layout>
    </>
  );
};

export default compose<Props, Props>(withRouter)(MainLayout);
