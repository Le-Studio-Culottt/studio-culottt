import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper(props){
    const [ theme, setTheme ] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                document.body.classList.remove('dark-content');
                break;
            case themes.dark:
                document.body.classList.remove('white-content');
                document.body.classList.add('dark-content')
                break;
            default:
                document.body.classList.remove('white-content');
                document.body.classList.add('dark-content')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}