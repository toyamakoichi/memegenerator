import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../themecontext/themecontext";
import { Card, MemeText } from "./memeItem.styles";

type MemeType = {
    name: string,
    img: string,
    boxCount: number,
    id: string
}

export const MemeItem = (props: MemeType) => {
    const currentTheme = useContext(ThemeContext);
    const navigate = useNavigate();
    const page = () => {
        navigate(`${props.name}/edit`, {state:{boxCount: props.boxCount, image: props.img, id: props.id}});
    }
    return (
        <>
        <Card onClick={page} img = {props.img} theme={currentTheme.theme}>
        <MemeText>{props.name}</MemeText> 
        </Card>
        </>
    )
}