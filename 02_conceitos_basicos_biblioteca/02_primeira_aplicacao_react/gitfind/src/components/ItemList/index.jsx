import React from "react";
import "./styles.css"
import PropTypes from "prop-types";

const ItemList = ({title, description}) => {
    return (
        <div className="item-list">
            <strong>{title}</strong>
            <p>{description}</p>
            <hr/>
        </div>
    )
}

ItemList.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}
export default ItemList
