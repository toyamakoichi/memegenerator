import { FormGroup, FormControlLabel, Checkbox, Button, Switch } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../privatelogic/authprovider"
import { MyForm } from "../form/form.styles"
import { Input } from "../input/input"
import { Password } from "../password/password"
import { ThemeContext } from "../themecontext/themecontext"

export const LoginForm = () => {
    const currentTheme = useContext(ThemeContext);
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);
  
    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    };
    const handleLogIn = () => {
        logIn(email, navigate("/main/memes"));
    }
    useEffect(() => {
        if (!password.match(/([a-zA-Z]{3,}[\d]{1,})|([\d]{1,}[a-zA-Z]{3,})/) || !email.match(/^\S+@\S+$/) ) { setIsValid(false) }
        else { setIsValid(true) }
    }, [password, email])
    
    return (
        <>
            <MyForm theme={currentTheme.theme}>
                
                <Input type="email" placeholder="Enter email" text="Email" onChange={(event) => handleChangeEmail(event)} value={email} />
                <Password placeholder="Enter password" text="Password" onChange={(event) => handleChangePassword(event)} value={password} />
                <FormGroup>
                    <p>Don't have an account? <NavLink to={"/signupform"}>Sign up</NavLink></p>
                    <Button onClick={handleLogIn} type="button" variant="contained" disabled={!isValid} fullWidth={true}>Log in</Button>
                </FormGroup>
            </MyForm>
        </>
    )
}