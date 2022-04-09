import "./App.css";
import { Navbar, Footer } from "./components/components";
import RoutePath from "./route/RoutePath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutePath />
      <Footer />
    </div>
  );
}

export default App;
