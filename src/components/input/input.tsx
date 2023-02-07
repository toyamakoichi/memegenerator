import { ChangeEventHandler } from "react";
import { MyInput } from "./input.styles";
interface MyInputProps {
    placeholder?: string;
    type?: string;
    text?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    key?: number;
}
export const Input = ({ placeholder, type, text, onChange, value }: MyInputProps) => {
 return (
        <div>
            <h4>{text}</h4>
            <MyInput type={type} placeholder={placeholder} onChange={onChange} value={value} ></MyInput>
        </div>
    )
}