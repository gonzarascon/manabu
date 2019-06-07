import React, { PureComponent } from 'react';
import Link from 'next/link';
import { IntroCourse } from 'components';

class Course extends PureComponent {
  static getInitialProps({ query: { id } }) {
    return { courseId: id };
  }

  render() {
    const { courseId } = this.props;
    return <IntroCourse />;
  }
}

export default Course;