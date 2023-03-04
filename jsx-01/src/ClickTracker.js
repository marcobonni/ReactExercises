import React from "react";

class ClickTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lastClickedButton: null };
        this.handleLastCLicked = this.handleLastCLicked.bind(null)
    }
    handleLastCLicked = (event) => {
        const buttonID = event.target.id;
        this.setState({ lastClickedButton: buttonID })
    }
    render() {
        const { lastClickedButton } = this.state
        return (
            <div class="button-wrapper">
                <div class="h1">
                    <h1>Last button Clicked : {lastClickedButton}</h1>
                </div>
                <div class="button-container">
                    <div>
                        <button id="button1" onClick={this.handleLastCLicked}>1</button>
                    </div>
                    <div>
                        <button id="button2" onClick={this.handleLastCLicked}>2</button>
                    </div>
                    <div>
                        <button id="button3" onClick={this.handleLastCLicked}>3</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickTracker