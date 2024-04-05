import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <About></About>
        <Footer></Footer>
    </div>
  );
}

export default App;
