import React from "react";
import {ButtonContainer} from "./styles";
import PropTypes from "prop-types";


const Button = ({title, variant = "primary", onClick}) => {
    return (
        <ButtonContainer $variant={variant} onClick={onClick}>{title}</ButtonContainer>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
