import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'next/router';

interface Props extends React.HTMLAttributes<any> {
  readonly url?: string;
}
const Navigation: React.SFC<Props> = ({}) => {
  return (
    <div className="navigation">
      <a href="#" className="prev">
        <i className="iconfont icon-left" /> Previous Posts
      </a>
      <a href="#" className="next">
        Next Posts <i className="iconfont icon-right" />
      </a>
      <div className="clearfix" />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(Navigation);
