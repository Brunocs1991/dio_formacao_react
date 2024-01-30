import React from "react";
import {Container, NameText, Progress, UserPicture} from "./styled";
import PropTypes from "prop-types";

const UserInfo = ({nome, image, percentual = 0}) => {
    return (
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

UserInfo.propTypes = {
    nome: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    percentual: PropTypes.number
}
export {UserInfo}
