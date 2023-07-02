// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/headers/header.jsx";
import Home from "./components/views/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
