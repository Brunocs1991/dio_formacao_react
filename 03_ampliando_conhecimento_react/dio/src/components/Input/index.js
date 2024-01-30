import React from "react";
import {IconeContainer, InputContainer, InputText} from "./styles";
import PropTypes from "prop-types";

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconeContainer>{leftIcon}</IconeContainer>) : null}
            <InputText {...rest}/>
        </InputContainer>
    )
}

Input.propTypes = {
    leftIcon: PropTypes.any,
    name: PropTypes.string
}

export default Input
