import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleSubmit = () => {
        console.log(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => this.setState({ inputValue: e.target.value })}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Login;
