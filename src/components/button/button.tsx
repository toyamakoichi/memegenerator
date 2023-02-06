import { useContext } from "react";
import { ThemeContext } from "../themecontext/themecontext";
import { MyButton } from "./button.styles"

export const Button = ({onClick, disabled, text}:any) => {
    const currentTheme = useContext(ThemeContext);
    return(
        <MyButton onClick={onClick} disabled={disabled} theme={currentTheme.theme}>{text}</MyButton>
    )
}