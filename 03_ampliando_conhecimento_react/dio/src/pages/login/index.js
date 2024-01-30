import {Header} from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {MdEmail, MdLock} from 'react-icons/md'

import {Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./styles";

const Login = () => {
    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                        rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadrastro </TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._ </SubTitleLogin>
                        <form>

                            <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button onClick={() =>{}} title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login
