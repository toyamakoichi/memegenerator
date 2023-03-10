

import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../privatelogic/authprovider";
import { RootState } from "../../redux/store/store";
import { Button } from "../button/button";
import SearchIcon from '@mui/icons-material/Search';
import { MemeItem } from "../memeItem/memeItem"
import { MemesSpace } from "./memes.styles"
import { Pagination } from "../pagination/pagination";
import { Input } from "@mui/material";
import { ThemeContext } from "../themecontext/themecontext";




interface MemeInterface {
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number,
    captions: number
}

export const Memes = () => {
    const { logOut, user } = useContext(AuthContext);
    const memesData = useSelector((state: RootState) => state.memes.memesArr);
    const currentTheme = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [memesPerPage] = useState(10);
    const navigate = useNavigate();
    const lastMemeIndex = currentPage * memesPerPage;
    const firstMemeIndex = lastMemeIndex - memesPerPage;
    const currentMeme = memesData.slice(firstMemeIndex, lastMemeIndex);
    const handleLogOut = () => {
        logOut(navigate("/loginform"));
    }
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(event.target.value);


    }
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);
    return (
        <>
            {user && 
            <div>
               <Button onClick={handleLogOut} text="Log out"></Button>
            </div>   
                
            }
            <ClipLoader
                color="white"
                size={75}
                loading={isLoading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <Input sx={{ border: currentTheme.theme.border, my: 1, color: currentTheme.theme.text }} placeholder="Search . . ." onChange={(e) => { handleChange(e) }} startAdornment={<SearchIcon sx={{ color: currentTheme.theme.text }} />} value={search} disableUnderline={true} />
            <MemesSpace>
                {search === '' ? currentMeme.map((meme: MemeInterface) => <MemeItem name={meme.name} img={meme.url} boxCount={meme.box_count} id={meme.id} key={meme.id} />) :
                    memesData
                        .filter((meme: MemeInterface) => meme.name.toLowerCase().startsWith(search))
                        .map(((meme: MemeInterface) => <MemeItem name={meme.name} img={meme.url} boxCount={meme.box_count} id={meme.id} key={meme.id} />))}
            </MemesSpace>
            {search === '' ? <Pagination memesPerPage={memesPerPage} totalMemes={memesData.length} paginate={paginate} next={nextPage} prev={prevPage} current={currentPage} /> : <></>}

        </>


    )
}