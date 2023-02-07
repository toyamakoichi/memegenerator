import { useContext } from "react";
import { ThemeContext } from "../themecontext/themecontext";
import { MyButton } from "./button.styles"
interface ButtonInterface {
    onClick?: () => any,
    disabled?: boolean,
    text?: string,
}
export const Button = ({ onClick, disabled, text }: ButtonInterface) => {
    const currentTheme = useContext(ThemeContext);
    return (
        <MyButton onClick={onClick} disabled={disabled} theme={currentTheme.theme}>{text}</MyButton>
    )
}