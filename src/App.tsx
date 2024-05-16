import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponent from './catch-error/ErrorThrowingComponent';
import AuthProvider from './custom-hooks/Auth';
import AuthUserComponent from './custom-hooks/Component';

function App() {

  return (
    <>
      {/* <WrappedComponent age={45} address={"Pune, MH, India"} zip={"411045"} /> */}

      <AuthProvider>
        <AuthUserComponent />
      </AuthProvider>

      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
