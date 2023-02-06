import { Button } from "../button/button";
import { PaginationSpace } from "./pagination.styles";

export const Pagination = ({ memesPerPage, totalMemes, paginate, next, prev, current }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMemes / memesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PaginationSpace>
       {  current !== 1 ? <Button text="Prev" onClick={prev} disabled={false}/> : <Button text="Prev" onClick={prev} disabled={true}/>}
            {
                pageNumbers.map(number => (<Button onClick={()=>{paginate(number)}} key={number} text={number}></Button>))
            }
       {current !== pageNumbers.length ? <Button text="Next" onClick={next} disabled={false}/> : <Button text="Next" onClick={prev} disabled={true}/>} 
        </PaginationSpace>
        
       
    )
}