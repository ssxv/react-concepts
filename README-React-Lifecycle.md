## Lifecycle methods of React class components:

### Mounting Phase:

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

### Updating Phase:

5. static getDerivedStateFromProps()
6. shouldComponentUpdate()
7. render()
8. getSnapshotBeforeUpdate()
9. componentDidUpdate()

### Unmounting Phase:

10. componentWillUnmount()

### Error Handling:

11. static getDerivedStateFromError()
12. componentDidCatch()
