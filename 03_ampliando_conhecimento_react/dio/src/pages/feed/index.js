import {Header} from "../../components/Header";
import {Column, Container, Title, TitleHighLight} from "./styles";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
                <Column>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={88} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={75} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={25} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={75} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={90} />
                    <UserInfo image="https://avatars.githubusercontent.com/u/43798994?v=4" nome="Bruno Costa e Silva" percentual={75} />
                </Column>
            </Container>
        </>
    )
}

export default Feed
