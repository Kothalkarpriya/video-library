import "./App.css";
import "./assests/styles/colors.css";
import { Navbar, Footer, Sidebar } from "./components/components";
import RoutePath from "./route/RoutePath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app-container">
        <Sidebar />
        <RoutePath />
      </section>
      <Footer />
    </div>
  );
}

export default App;
