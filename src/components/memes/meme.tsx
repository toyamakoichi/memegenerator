
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../privatelogic/authprovider";
import { filterMemes, showAllMemes } from "../../redux/reducer/memesSlice";
import { RootState } from "../../redux/store/store";

import { MemeItem } from "../memeItem/memeItem"
import { MemesSpace } from "./memes.styles"

interface MemeInterface {
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number,
    captions: number
}
const options = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
export const Memes = () => {
    const { logOut, user } = useContext(AuthContext);
    const memesData = useSelector((state: RootState) => state.memes.memesArr);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = () => {
        logOut(navigate("/loginform"));
    }
    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
        dispatch(filterMemes({ letter: event.target.value }));
    }
    const showAll = () =>{
        dispatch(showAllMemes());
    }
    return (
        <>
            {user && (
                <div>
                    <Button onClick={handleLogOut}>Log out</Button>
                </div>)
            }
            <ClipLoader
                color="white"
                size={75}
                loading={isLoading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            
                <select
                    value={selectedOption}
                    onChange={handleChange}>
                    {options.map(value => (
                        <option>{value}</option>
                    ))}
                </select>
                <Button onClick={showAll}>Show all</Button>
                <MemesSpace>
                    {memesData.map((meme: MemeInterface) => <MemeItem name={meme.name} img={meme.url} boxCount={meme.box_count} id={meme.id}/>)}
                </MemesSpace>
            </>
           
       
    )
}