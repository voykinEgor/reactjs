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
import SpaceXApi from './components/courseList/SpaceXApi.jsx';
import SpaceXApibySerial from './components/courseList/SpaceXApibySerial.jsx';
import WearListApi from './components/courseList/WearListApi.jsx';



function App() {
  return (
    <Router>
        
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/catalog' element={<CourseList />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/productlistapi' element={<ProductListApi/>}></Route>
                <Route path='/wearlistapi' element={<WearListApi/>}></Route>
                <Route path='/spacexapi' element={<SpaceXApi/>}></Route>
                <Route path='/spacexapi/:capsule_serial' element={<SpaceXApibySerial/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    </Router>
    
  );
}

export default App;
