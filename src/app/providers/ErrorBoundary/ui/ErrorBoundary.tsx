// Importing necessary modules and libraries
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';

// Defining the props interface for the ErrorBoundary component
interface ErrorBoundaryProps {
    children: ReactNode; // children property for ErrorBoundary component that can accept any valid react node
}

// Defining the state interface for the ErrorBoundary component
interface ErrorBoundaryState {
    hasError: boolean; // a property to keep track of whether an error occurred in child components.
}

// Defining the ErrorBoundary class-based component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }; // Initializing the state to not have any errors occur
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Rendering a custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
