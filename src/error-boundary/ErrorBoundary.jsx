import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div onClick={(e) => this.setState({ error: false })}>
          "Error was thrown"
        </div>
      );
    }
    return { ...this.props.children };
  }
}
export default ErrorBoundary;
