import './App.css';
import ErrorBoundary from './catch-error/ErrorBoundary';
import ErrorThrowingComponenet from './catch-error/ErrorThrowingComponent';
import ThemeSwitcher from './custom-hooks/ThemeToggle';

function App() {

  return (
    <>
      <ThemeSwitcher />

      <ErrorBoundary>
        <ErrorThrowingComponenet />
      </ErrorBoundary>
    </>
  );
}

export default App;
