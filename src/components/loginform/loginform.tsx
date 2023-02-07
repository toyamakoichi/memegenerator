import { ChangeEvent, useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { FormGroup, Input} from "@mui/material"
import { AuthContext } from "../../privatelogic/authprovider"
import { Button } from "../button/button"
import { MyForm } from "../form/form.styles"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MyIcon } from "../../icon";

import { ThemeContext } from "../themecontext/themecontext"

export const LoginForm = () => {
    const currentTheme = useContext(ThemeContext);
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
  
    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleLogIn = () => {
        logIn(email, navigate("/main/memes"));
    }
    const [icon, setIcon] = useState(false);
    const handleIcon = () => {
        setIcon(!icon);
    }
    useEffect(() => {
        if (!password.match(/([a-zA-Z]{3,}[\d]{1,})|([\d]{1,}[a-zA-Z]{3,})/) || !email.match(/^\S+@\S+$/) ) { setIsValid(false) }
        else { setIsValid(true) }
    }, [password, email])
    
    return (
        <>
        
            <MyForm theme={currentTheme.theme}>
            <h1>Log in</h1>
                <Input sx={{my:2, color:currentTheme.theme.text}} type="email" placeholder="Enter email" onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeEmail(event)} value={email} fullWidth={true} error={!isValid}/>
                <Input sx={{my:2, color:currentTheme.theme.text}}type={icon ? "text" : "password"} placeholder="Enter password" onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangePassword(event)} value={password} endAdornment={icon ? <VisibilityIcon onClick={handleIcon}/> : <VisibilityOffIcon onClick={handleIcon}/>} fullWidth={true} error={!isValid} />
                <FormGroup>
                    <p>Don't have an account? <NavLink to={"/signupform"}>Sign up</NavLink></p>
                    <Button onClick={handleLogIn} text="Log in" disabled={!isValid} />
                </FormGroup>
            </MyForm>
        </>
    )
}