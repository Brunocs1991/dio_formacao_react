import Header from "../../components/Header";
import background from '../../assets/background.png'
import './styles.css'
import ItemList from "../../components/ItemList";

const Index = () => {
    return (
        <div className="App">
            <Header/>
            <div className="conteudo">
                <img src={background} className="background" alt="background app"/>
                <div className="info">
                    <div>
                        <input name="usuario" placeholder="@username"/>
                        <button type="submit">Buscar</button>
                    </div>
                    <div className="perfil">
                        <img src="https://avatars.githubusercontent.com/u/43798994?v=4" className="profile" alt="imagem de perfil" />
                        <div>
                            <h3>Bruno Costa e Silva</h3>
                            <span>@Brunocs1991</span>
                            <p>Descricao</p>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h4 className={"repositorio"}>Repositorios</h4>
                        <ItemList description="Teste1" title="Teste de descricao"/>
                        <ItemList description="Teste1" title="Teste de descricao"/>
                        <ItemList description="Teste1" title="Teste de descricao"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
