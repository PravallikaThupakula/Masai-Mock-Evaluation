import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import PostList from "./components/PostList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostList />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PostsProvider>
        <AppContent />
      </PostsProvider>
    </ThemeProvider>
  );
};

export default App;