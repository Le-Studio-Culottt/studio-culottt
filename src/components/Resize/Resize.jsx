import { useEffect, useState } from "react";

export const Resize = (props) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const {innerWidth} = window;
        return {innerWidth};
    }
    
    return({windowSize})
}