import logo from './logo.svg';
import './App.css';
import './components/Header';
import Header from "./components/Header";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookNow from "./components/BookNow";

function App() {
  return (

    <div className="App">
        <Header />
        <Navbar />
        <About />
        <Pricing />
        <Shop />
        <BookNow />
        <Footer />
    </div>
  );
}

export default App;
