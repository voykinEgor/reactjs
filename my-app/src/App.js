import './App.css';
import Header from './components/header/Header.jsx';
// import About from './components/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import CourseList from './components/courseList/CourseList.jsx';


function App() {
  return (
    <div className="App">
        <Header></Header>
        {/* <About></About> */}
        <CourseList></CourseList>
        <Footer></Footer>
    </div>
  );
}

export default App;
