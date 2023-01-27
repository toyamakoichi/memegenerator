import { MouseEventHandler } from "react"

export interface ThemeInterface{
    type: string,
    text: string,
    border: string,
    background: string
}
export interface ThemeContextInterface{
    theme: ThemeInterface,
    themeSwitch?: MouseEventHandler<HTMLButtonElement>
}
export const LightTheme: ThemeInterface = {
    type: "light",
    text: "black",
    border: "2px solid black",
    background: "white"
}
export const DarkTheme: ThemeInterface = {
    type: "dark",
    text: "white",
    border: "2px solid white",
    background: "gray"
}