import "./App.css";
import { Navbar, Footer } from "./components/components";
import {Home} from "./pages/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
