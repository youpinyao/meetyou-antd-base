import React from 'react';
import $ from 'jquery';
import styles from './index.less';

export default class MASecondMenu extends React.Component {

  componentDidMount() {
    $('body').addClass('has-second-nav');
  }

  componentWillUnmount() {
    $('body').removeClass('has-second-nav');
  }

  render() {
    return (
      <div className={styles.secondNav}>
        <ul className="clearfix">{this.props.children}</ul>
      </div>
    );
  }
}
