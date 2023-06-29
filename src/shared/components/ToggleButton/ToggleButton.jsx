import { Component } from "react"; //(крок 1) Імпортувати з react класс Components 

import styles from "./toggl-button.module.scss";


class ToggleButton extends Component {
    state = {
        isActive: false,
    }

    handleClick () {
        this.setState(prevState => {
            return {
                isActive: !prevState.isActive
            }
        })
    }

    render() {
        const {text} = this.props;
        const {isActive} = this.state;

        const fullClassName = isActive ? `${styles.btn} ${styles.active}`: styles.btn; 

        return <button onClick={() => this.handleClick()} className={fullClassName}>{text}</button>
    }

}

export default ToggleButton;