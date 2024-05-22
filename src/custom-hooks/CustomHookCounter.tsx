import usePrevState from "./usePrevState";

const CustomHookCounter = () => {
    const [count, prevCount, setCount] = usePrevState(0);

    return (
        <>
            <h1>This counter uses usePrevState custom hook</h1>
            <button
                disabled={count <= 0}
                onClick={() => setCount((count: number) => count - 1)}
            >
                -
            </button>
            <span style={{ margin: '10px' }}>{count}</span>
            <span style={{ margin: '10px' }}>{prevCount}</span>
            <button
                disabled={count >= 5}
                onClick={() => setCount((count: number) => count + 1)}
            >
                +
            </button>
        </>
    );
};

export default CustomHookCounter;
