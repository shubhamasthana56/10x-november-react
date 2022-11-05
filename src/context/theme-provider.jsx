import { useState } from "react"
import { ThemeContext } from "./context"
const ThemeProvider = ({children})=> {
    const [theme, setTheme] = useState(0);
    const toggleTheme = ()=> {
        setTheme(!theme);
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider