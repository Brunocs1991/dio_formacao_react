import React from "react";
import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper} from "./styles";
import Button from "../Button";

import logo from '../../assets/logo-dio.png'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>
                        Live code
                    </Menu>
                    <Menu>
                        Global
                    </Menu>
                </Row>
                <Row>
                    <MenuRight href={"#"}>Home</MenuRight>
                    <Button onClick={() =>{}} title="entrar"/>
                    <Button onClick={() =>{}} title="cadrastar"/>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}
