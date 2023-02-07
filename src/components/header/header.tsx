import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../privatelogic/authprovider";
import { MaterialUISwitch } from "../muiswitch/muiswitch";
import { ThemeContext } from "../themecontext/themecontext";
import { HeaderText, MyHeader } from "./header.style"

export const Header = () => {
    const currentTheme = useContext(ThemeContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/main/memes');
    },[]) 
    return (
        <>
            <MyHeader theme={currentTheme.theme}>
               <HeaderText theme={currentTheme.theme}>Meme Generator</HeaderText>
              {user && <MaterialUISwitch onClick={currentTheme.themeSwitch} />} 
        
               
            </MyHeader>

            <Outlet />
        </>
    )
}

