// Importing necessary modules and libraries
import { useEffect, useState } from "react" // Hook that runs side-effects when a functional component re-renders, and a hook that declares a state variable for a functional component.
import { Button } from "shared/ui/Button/Button"; // Custom button component
import { useTranslation } from "react-i18next"; // A hook for translation functionality

// Defining the BugButton functional component
export const BugButton = () => {
    const [error, setError] = useState(false);  // Declaring a state variable `error` initialized to false and a function `setError` to update it.
    const { t } = useTranslation(); // Destructuring t function from the useTranslation hook

    // Declaring an event listener that sets the error state to true
    const onThrow = () => setError(true);

    // Using the useEffect hook to throw an error if the error state is true
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]); // adding `error` dependency so that the effect runs only when error state update happens.

    return (
        <Button onClick={onThrow}>
            {t('Throw Error')}
        </Button>
    )
}
