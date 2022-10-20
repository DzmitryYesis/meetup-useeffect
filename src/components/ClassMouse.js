import {Component} from "react";

export class ClassMouse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            xPos: 0,
            yPos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseMove = (event) => {
        this.setState({
            xPos: event.clientX,
            yPos: event.clientY
        })
        console.log('Mose move')
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }

    render() {
        return (
            <div>
                X: {this.state.xPos} Y: {this.state.yPos}
            </div>
        )
    }
}