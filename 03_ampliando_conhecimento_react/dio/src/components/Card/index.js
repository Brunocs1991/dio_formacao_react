import React from "react";
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from "./styles";
import {FiThumbsUp} from "react-icons/fi";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="data:image/png;base64,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" alt="banner"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/43798994?v=4" alt="User Picture"/>
                    <div>
                        <h4>Bruno Costa e Silva</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp dio no Global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp/> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}
export {Card}
