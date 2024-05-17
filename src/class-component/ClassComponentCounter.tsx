/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ReactNode } from "react";

class ClassComponentCounter extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 2
        };
        console.log('ClassComponent.constructor()')
    }

    static getDerivedStateFromProps() {
        console.log('ClassComponent.getDerivedStateFromProps()')
        return {}
    }

    componentDidMount(): void {
        console.log('ClassComponent.componentDidMount()')
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        console.log('ClassComponent.shouldComponentUpdate()')
        return true;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log('ClassComponent.componentDidUpdate()')
    }

    render(): ReactNode {
        console.log('ClassComponent.render()')
        const { count } = this.state;
        return <div>
            <h1>Class Component Counter</h1>
            <button
                disabled={count <= 0}
                onClick={() => this.setState({ count: count - 1 })}
            >
                -
            </button>
            <span style={{ margin: '10px' }}>{count}</span>
            <button
                disabled={count >= 5}
                onClick={() => this.setState({ count: count + 1 })}
            >
                +
            </button>
        </div>
    }
}

export default ClassComponentCounter;
