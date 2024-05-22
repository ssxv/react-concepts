/* eslint-disable @typescript-eslint/no-explicit-any */
// custom hook for storing prev state
// const [state, prevState, setState] = usePrevState(initState);


// eg: for a counter app
// const [state, prevState, setState] = usePrevState(0);
// state is 0
// prevState is undefined

// setState(2);

// state is 2
// prevState is 0
import { useState } from "react";

const usePrevState = (initialValue: any) => {
    const [currentState, setCurrentState] = useState(initialValue);
    const [previousState, setPreviousState] = useState(undefined);

    return [currentState, previousState, (newState: any) => {
        setPreviousState(currentState);
        setCurrentState(newState);
    }];
}

export default usePrevState;
