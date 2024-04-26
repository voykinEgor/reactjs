import './App.css';
import Header from './components/header/Header.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Footer from './components/footer/Footer.jsx';
import CourseList from './components/courseList/CourseList.jsx';
import ProductListApi from './components/courseList/ProductListApi.jsx';
import {Routes,
    Route,
    BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home.jsx';


function App() {
  return (
    <Router>
        
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/catalog' element={<CourseList />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/error' element={<Error/>}></Route>
                <Route path='/productlistapi' element={<ProductListApi/>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    </Router>
    
  );
}

export default App;
