import React, {Component} from "react";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick() {
        // TODO
    }

    render() {
        return (
            <div>AppClass</div>
        )
    }
}
