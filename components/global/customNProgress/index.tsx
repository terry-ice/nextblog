import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (_) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div style={{ marginBottom: 10 }}>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    </Head>
  </div>
);
