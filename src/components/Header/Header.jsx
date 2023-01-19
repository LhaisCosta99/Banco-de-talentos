import { HeaderStyle } from "./Style";
import yoda from "../../assets/babyYoda.png"

export default function Header(){
    return(
        <HeaderStyle>
            <div>
                <img src={yoda} alt="baby Yoda" />
            </div>
            <div>
                <h1>Padawan <br></br> App</h1>
            </div>
        </HeaderStyle>
    )
}