import { Button } from "../button/button";
import { PaginationSpace } from "./pagination.styles";
interface PaginationInterface {
    memesPerPage: number,
    totalMemes: number,
    paginate: (pageNumber: number) => void,
    next: () => void,
    prev: () => void,
    current: number
}
export const Pagination = ({ memesPerPage, totalMemes, paginate, next, prev, current }: PaginationInterface) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMemes / memesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PaginationSpace>
            {current !== 1 ? <Button text="< <" onClick={prev} disabled={false} /> : <Button text="< <" onClick={prev} disabled={true} />}
            {
                pageNumbers.map(number => (<Button onClick={() => { paginate(number) }} key={number} text={number.toString()}></Button>))
            }
            {current !== pageNumbers.length ? <Button text="> >" onClick={next} disabled={false} /> : <Button text="> >" onClick={prev} disabled={true} />}
        </PaginationSpace>


    )
}