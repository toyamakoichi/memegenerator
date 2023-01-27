import { useEffect, useState } from 'react';
import './App.css';
import { Memes } from './components/memes/meme';
import { Form } from './components/form/form';
import { LoginForm } from './components/loginform/loginform';
import { DarkTheme, LightTheme, ThemeContextInterface, ThemeInterface } from './components/themecontext/theme';
import { ThemeContext } from './components/themecontext/themecontext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from './components/header/header';
import { NotFound } from './components/notfound/notfound';
import { Edit } from './components/edit/edit';
import { AuthProvider } from './privatelogic/authprovider';
import { RequireAuth } from './privatelogic/requireauth';
import { useDispatch } from 'react-redux';
import { addMemes } from './redux/reducer/memesSlice';

import axios from 'axios';
function App() {
  const [myTheme, setMyTheme] = useState<ThemeInterface>(LightTheme);
 const dispatch = useDispatch();
  const getMemes = async () => {
    try {
      
      
      const memesData = await axios({
        method: "get",
        url: "https://api.imgflip.com/get_memes",
        
      })
      console.log(memesData);
      dispatch(addMemes({newArray: memesData.data.data.memes}));
     
    } catch (error) {
      console.log(error);
    }
 };
  
  useEffect(() => {
    getMemes();
  }, []);
  const switchTheme = () => {
    if (myTheme.type === "light") {
      setMyTheme(DarkTheme);
      document.body.style.backgroundColor = "black";
    } else {
      setMyTheme(LightTheme);
      document.body.style.backgroundColor = "white";
    }
  };
 
  
  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme: myTheme, themeSwitch: switchTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/signupform" element={<Form />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/main" element={<Header />}>
            <Route path="memes" element={<Memes />} />
            <Route path="memes/:name/edit" element={<RequireAuth><Edit /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </AuthProvider>

  );
}

export default App;
