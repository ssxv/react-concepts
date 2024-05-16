import wrap from "./Wrapper";

const Component: React.FC = (props) => {
    return <div style={{ textAlign: "left" }}>
        <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
}

const WrappedComponent = wrap({ name: "Satyendra Singh", age: 32, phone: "9404910264" })(Component);
export default WrappedComponent;
