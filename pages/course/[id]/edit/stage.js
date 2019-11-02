import React, { PureComponent, useContext } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Layout, EditStageLayout } from 'components';

class stage extends PureComponent {
  static async getInitialProps({ query }) {
    const { course_id } = await query;

    return { course_id };
  }
  render() {
    const { viewportSize, actualUser, course_id } = this.props;
    return (
      <Layout responsiveSize={viewportSize} userData={actualUser}>
        <EditStageLayout course_id={course_id} />
      </Layout>
    );
  }
}

export default stage;
