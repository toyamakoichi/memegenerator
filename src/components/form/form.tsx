import { useEffect, useState, useContext, ChangeEvent } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { MyForm } from "./form.styles"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MyIcon } from "../../icon";

import Checkbox from "@mui/material/Checkbox"
import { FormControlLabel, FormGroup, Input } from "@mui/material"
import { ThemeContext } from "../themecontext/themecontext"
import { Button } from "../button/button"





export const Form = () => {
    const currentTheme = useContext(ThemeContext);
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [terms, setTerms] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const handleChangeName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleChangeTerms = () => {
        setTerms(!terms);
    };
    const handleSignUp = () => {
        navigate("/loginform");
    }
    const [icon, setIcon] = useState(false);
    const handleIcon = () => {
        setIcon(!icon);
    }
    useEffect(() => {
        if (name.length < 4 || !terms || !password.match(/([a-zA-Z]{3,}[\d]{1,})|([\d]{1,}[a-zA-Z]{3,})/) || !email.match(/^\S+@\S+$/)) { setIsValid(false) }
        else { setIsValid(true) };
    }, [name, terms, password, email])
    return (
        <>
            <MyForm theme={currentTheme.theme}>
                <h1>Sign up</h1>
                <Input sx={{my:2, color:currentTheme.theme.text}} type="text" placeholder="Enter name" onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeName(event)} value={name} fullWidth={true} error={!isValid} />
                <Input sx={{my:2, color:currentTheme.theme.text}}type="email" placeholder="Enter email" onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeEmail(event)} value={email} fullWidth={true} error={!isValid} />
                <Input sx={{my:2, color:currentTheme.theme.text}}type={icon ? "text" : "password"} placeholder="Enter password" onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangePassword(event)} value={password} endAdornment={icon ? <VisibilityIcon onClick={handleIcon}/> : <VisibilityOffIcon onClick={handleIcon}/>} fullWidth={true} error={!isValid} />
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={handleChangeTerms} checked={terms} sx={{color:currentTheme.theme.text}}/>} label="Agree to terms and conditions" />
                    <p>Have an account? <NavLink to={"/loginform"}>Log in</NavLink></p>
                    <Button onClick={handleSignUp} text="Sign up" disabled={!isValid} />
                </FormGroup>
            </MyForm>
        </>
    )
}


