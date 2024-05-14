import { Component, ReactElement, ReactNode } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IErrorBoundaryProp {
  children: ReactNode | JSX.Element | ReactElement;
}

class ErrorBoundary extends Component<IErrorBoundaryProp, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProp) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    return (
      <div>
        <h1>Error Boundary</h1>
        {this.state.hasError ?
          <div>This is a fallback UI</div> :
          this.props.children
        }
      </div>
    );
  }
}

export default ErrorBoundary;
