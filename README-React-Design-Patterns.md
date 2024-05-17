# React Design Patterns

Designs Patterns are proven methods to solve common issues that a React developer might experience.

## Benefits of Using Design Patterns in Reactjs?

1. Provides Structure for Collaborative Development
2. Enhances Code Organization
3. Encourages Reusability
4. Promotes Maintainability
5. Helps in Performance Optimization

## Leading Reactjs Design Patterns

1. The HOC (High Order Component) Pattern

    A JavaScript function that accepts a component as an argument. After inserting or putting additional data and functionality into the component, it then returns another component.

2. The Provider Pattern

    The provider pattern uses a provider component that stores global data and distributes it through the application's component tree to consumers or custom hooks.

3. Presentational and Container Component Patterns

    Presentational and Container patterns enable us to distinguish between different concerns, such as complicated stateful logic, and other features of a component.

    Presentational Components – These stateless functional elements care about relating data to the display.

    Container Components – These components are known to keep track of their internal state and life cycle. They contain presentational details and data-fetching logic.

4. The Hooks Pattern

5. Render Prop Pattern

    This pattern involves passing a function as a prop to a component, allowing the component to render dynamic content.

## Other Design Patterns

1. The Singleton design pattern

    This pattern ensures that a class has only one instance and provides a global point of access to that instance. This pattern is useful when you need to restrict instantiation of a class to a single object, such as in caching, logging, database connections, or configuration settings.

        let myClassInstance = null;

        class MyClass {
            constructor() {
                if (!myClassInstance) {
                    myClassInstance = this;
                }
                return myClassInstance;
            }

            write() {
                console.log('In write method');
            }
        }

        const singletonInstance = new MyClass();
        export default singletonInstance;

2. The Adapter Design Pattern

    It is used to convert the interface of one class into another interface that a client expects. It allows classes with incompatible interfaces to work together.

        class OldLogger {
            info(msg) {
                console.log(msg);
            }
        }

        class NewLogger {
            debug(msg) {
                console.log(`[NewLogger] ${msg}`);
            }
        }

        class LoggerAdapter {
            constructor(oldLogger) {
                this.oldLogger = oldLogger;
            }

            debug(msg) {
                this.oldLogger.info(msg);
            }
        }

        const logger = new LoggerAdapter(new OldLogger());
        logger.debug('Logged using LoggerAdapter');

3. The Factory Design Pattern

    It is a creational pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It is useful when we want to create multiple objects of similar types but with varying properties or configurations.

        class Product {
            constructor(name) {
                this.name = name;
            }
        }

        class ProductA extends Product {
            constructor(name) {
                super(name);
                this.type = 'A';
            }
        }

        class ProductB extends Product {
            constructor(name) {
                super(name);
                this.type = 'B';
            }
        }

        const createProduct = (type, name) => {
            switch (type) {
                case 'A': return new ProductA(name);
                case 'B': return new ProductB(name);
                default:
            }
        }

        const prodA = createProduct('A', 'Alice');
        const prodB = createProduct('B', 'Bob');
    