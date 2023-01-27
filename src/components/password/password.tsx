import { ChangeEventHandler, useState } from "react";
import { MyPassword } from "./password.styles";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MyIcon } from "../../icon";

interface MyPasswordProps{
    placeholder: string
    text: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?:any
   
}
export const Password = ({ placeholder, text, onChange, value }: MyPasswordProps) => {
    const [icon, setIcon] = useState(false);
    const handleIcon = () => {
        setIcon(!icon);
    }
    return (
        <div>
            <h4>{text}</h4>
            <MyPassword type = {icon ? "text" : "password"} placeholder={placeholder} onChange={onChange} value={value}></MyPassword>
            <MyIcon onClick={handleIcon}>{icon ? <VisibilityIcon /> : <VisibilityOffIcon />}</MyIcon>
        </div>
        


    )
}