import {Header} from "../../components/Header";
import {Container, TextContent, Title, TitleHighLight} from "./styles";

import bannerImage from "../../assets/banner.png"
import Button from "../../components/Button";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente <br/>
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button onClick={() =>{}} title="Comenar" variant="secondary"/>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem Princial"/>
                </div>
            </Container>
        </>
    )
}

export default Home
