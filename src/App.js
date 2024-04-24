import "./App.css";
import { Footer, Header, TodoList } from "./components/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
