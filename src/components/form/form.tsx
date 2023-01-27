import { MyForm } from "./form.styles"
import { Input } from "../input/input"
import { Password } from "../password/password"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import { FormControlLabel, FormGroup, Switch } from "@mui/material"
import { ThemeContext } from "../themecontext/themecontext"
import { useEffect, useState, useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"



export const Form = () => {
    const currentTheme = useContext(ThemeContext);
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [terms, setTerms] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
   const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
   
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleChangeTerms = () => {
        setTerms(!terms);
    };
    const handleSignUp = () => {
       navigate("/loginform");
    }
    useEffect(() => {
        if (name.length < 4 ||  !terms || !password.match(/([a-zA-Z]{3,}[\d]{1,})|([\d]{1,}[a-zA-Z]{3,})/) || !email.match(/^\S+@\S+$/)) { setIsValid(false) }
        else { setIsValid(true) };
    }, [name, terms, password, email])
    return (
        <>
        <MyForm theme={currentTheme.theme}>
            <h1>Sign up</h1>
            <Input type="text" placeholder="Enter name" text="Name" onChange={(event) => handleChangeName(event)} value={name} />
            
            <Input type="email" placeholder="Enter email" text="Email" onChange={(event) => handleChangeEmail(event)} value={email} />
            <Password placeholder="Enter password" text="Password" onChange={(event) => handleChangePassword(event)} value={password} />
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleChangeTerms} checked={terms} />} label="Agree to terms and conditions" />
                <p>Have an account? <NavLink to={"/loginform"}>Log in</NavLink></p>
                <Button onClick ={handleSignUp} type="submit" variant="contained" disabled={!isValid} fullWidth={true}>Sign up</Button>
            </FormGroup>
        </MyForm>
        </>
    )
}


