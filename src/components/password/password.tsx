import { ChangeEventHandler, useState } from "react";
import { MyPassword } from "./password.styles";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MyIcon } from "../../icon";
import { Input } from "@mui/material";

interface MyPasswordProps {
    placeholder: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: any

}
export const Password = ({ placeholder, onChange, value }: MyPasswordProps) => {
    const [icon, setIcon] = useState(false);
    const handleIcon = () => {
        setIcon(!icon);
    }
    return (
        <Input type={icon ? "text" : "password"} placeholder={placeholder} onChange={onChange} value={value} endAdornment={<MyIcon onClick={handleIcon}>{icon ? <VisibilityIcon /> : <VisibilityOffIcon />}</MyIcon>} fullWidth={true}></Input>
    )
}