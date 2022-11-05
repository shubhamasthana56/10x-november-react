import { useContext } from "react";
import { ThemeContext } from "../../context/context";
const ToggleTheme = ()=> {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
export default ToggleTheme;