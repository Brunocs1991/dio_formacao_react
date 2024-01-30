import React from "react";
import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper} from "./styles";

import logo from '../../assets/logo-dio.png'
import PropTypes from "prop-types";
import Button from "../Button";

const Header = ({autenticado = false}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu> Live Code </Menu>
                            <Menu> Global </Menu>
                        </>
                    ) : null}

                </Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/43798994?v=4" alt="logo user"/>
                ) : (
                    <Row>
                        <MenuRight href={"#"}>Home</MenuRight>
                        <Button onClick={() => {
                        }} title="entrar"/>
                        <Button onClick={() => {
                        }} title="cadrastar"/>
                    </Row>
                )}
            </Container>
        </Wrapper>
    )
}
Header.propTypes = {
    autenticado: PropTypes.bool
}
export {Header}
