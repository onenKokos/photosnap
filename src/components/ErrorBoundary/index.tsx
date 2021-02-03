import React, { ErrorInfo } from 'react';

export class ErrorBoundary extends React.Component<any, { error: boolean }> {
  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  public state = {
    error: false,
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`Error boundary. \nError: ${error} \nInfo: ${info}`);
  }

  render() {
    return this.state.error ? (
      <h2>
        We apologize, but there seems to be an error from which the app could not be recovered.
        <br />
        Please refresh to page to progress as usual.
      </h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
