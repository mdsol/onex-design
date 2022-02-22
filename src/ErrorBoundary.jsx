import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('Error', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error', error);
    console.log(`something went wrong: ${JSON.stringify(errorInfo)}`);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
