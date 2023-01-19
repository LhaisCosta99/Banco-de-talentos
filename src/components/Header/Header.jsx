import { HeaderStyle } from "./Style";
import yoda from "../../assets/babyYoda.png"
import lupa from "../../assets/lupa.png"

export default function Header({ click }) {
    return (
        <HeaderStyle>
            <div>
                <div>
                    <div>
                        <img src={yoda} alt="baby Yoda" />
                    </div>
                    <div>
                        <h1>Padawan <br></br> App</h1>
                    </div>
                </div>
                <div className="barra-de-pesquisa">
                    <input type="text" />
                    <img src={lupa} alt="Botão pesquisar" className="pesquisar" onClick={click} />
                </div>
            </div>
            <nav>
                <li>Home</li>
                <li>Personagens</li>
                <li>Contato</li>
            </nav>
        </HeaderStyle>
    )
}