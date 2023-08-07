// Importing necessary modules and libraries
import { ReactNode } from 'react' 
import { createPortal } from 'react-dom';

// Defining the PortalProps interface
interface PortalProps {
  children: ReactNode; // Specifies that the children prop should be of type ReactNode, which represents any valid JSX or string element
  element?: HTMLElement; // Specifies that the element prop is an optional parameter of type HTMLElement, which represents a DOM element
}

// Defining the Portal component as a function component with props of type PortalProps
export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body // Default value for the element prop is set to document.body if not provided

    } = props;
  
    return createPortal(children, element); // Returns the result of calling the createPortal function from react-dom, passing in the children and element props
}
