import { HeaderStyle } from "./Style";
import yoda from "../../assets/babyYoda.png"

export default function Header(){
    return(
        <HeaderStyle>
            <img src={yoda} alt="baby Yoda" />
            <h1>Header</h1>
        </HeaderStyle>
    )
}