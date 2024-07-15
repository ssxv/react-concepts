import React from "react";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true; // Return false if rendering is not needed
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch');
    }

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError');
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    };

    render() {
        console.log('render');
        return (
            <div>
                <h1>Lifecycle Example</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Lifecycle;
