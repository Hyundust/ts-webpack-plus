// Importing necessary modules and libraries
import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./PageLoader.module.scss"
import Loader from 'shared/ui/Loader/Loader'

// Defining the props interface for the PageLoader component
interface PageLoaderProps {
  className?: string // optional className property for PageLoader component that can accept a string
}

// Defining a stateless functional component called PageLoader that uses destructuring to get its className parameter
export const PageLoader = ({ className }: PageLoaderProps) => {
    
    // Render the component with a div containing the page__loader class defined in PageLoader.module.scss along with any additional CSS classes passed via the className prop.
    // Inside this div, place the shared ui Loader component.
    return (
        <div className={classNames(cls.page__loader, {}, [className])}>
            <Loader/>
        </div>
    )
}
