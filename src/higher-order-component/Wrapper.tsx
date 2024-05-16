/* eslint-disable @typescript-eslint/no-explicit-any */
export const wrap = (injectedProps: any) => {
    return (WrappedComponent: any) => {
        return (props: any) => {
            return <WrappedComponent {...props} {...injectedProps} />
        }
    }
}

export default wrap;
