import Header from "../../components/Header";
import background from '../../assets/background.png'
import './styles.css'
import {useState} from "react";
import ItemList from "../../components/ItemList";

const Index = () => {

    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null)
    const [repos, setRepos] = useState(null)

    const handleGetSate = async () => {
        setCurrentUser(null)
        setRepos(null)
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json()
        if (newUser.name) {
            const {avatar_url, name, bio, login} = newUser
            setCurrentUser({avatar_url, name, bio, login})
        }
        const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
        const newRepos = await reposData.json()
        if (newRepos.length) {
            setRepos(newRepos)
        }
    }

    return (
        <div className="App">
            <Header/>
            <div className="conteudo">
                <img src={background} className="background" alt="background app"/>
                <div className="info">
                    <div>
                        <input name="usuario" placeholder="@username" value={user}
                               onChange={event => setUser(event.target.value)}/>
                        <button type="submit" onClick={handleGetSate}>Buscar</button>
                    </div>
                    {currentUser?.name ? (
                        <>
                            <div className="perfil">
                                <img src={currentUser.avatar_url} className="profile"
                                     alt="imagem de perfil"/>
                                <div>
                                    <h3>{currentUser.name}</h3>
                                    <span>@{currentUser.login}</span>
                                    <p>{currentUser.bio}</p>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ) : null}
                    {repos?.length ? (
                        <div>
                            <h4 className={"repositorio"}>Repositorios</h4>
                            {repos.map(repo => (
                                <ItemList description={repo.description} title={repo.name} key={repo.id}/>
                            ))}
                        </div>

                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Index;
