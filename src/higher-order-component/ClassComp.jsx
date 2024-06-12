import React from 'react';
import wrap from './wrap';

class ClassComp extends React.Component {
  render() {
    return (
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(this.props, null, 4)}
      </pre>
    );
  }
}

const WrappedClassComp = wrap(ClassComp);
export default WrappedClassComp;
