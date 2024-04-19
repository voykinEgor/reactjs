import Course from "../course/Course";
import styles from "./CourseList.module.scss";
import data from "../../data.json";
import { useEffect, useState } from "react";


const CourseList = () => {
    // console.log(data);
    const [counter, setCounter] = useState(0);
    
    const handleCounter = () =>{
        setCounter(counter + 1);
    }

    const handleVisible = () =>{
        setVisibleCount(visibleCount + 1);
    }

    const [visibleCount, setVisibleCount] = useState(2);
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        setCourses(data);
    },[]) //заполнение списка только при загрузке сайта, если [] пустые, если [id], то меняется при изменении поля

    const deleteCourse = (id) =>{
        const updateCourses = courses.filter((item) => item.id != id);
        setCourses(updateCourses);
    }




    return(
        <div className={styles.mainblock}>
            <div className={styles.list}>
                {courses.slice(0,visibleCount).map((item)=>
                    <div key={item.id}>
                        <Course course={item} deleteCourse={deleteCourse}/>
                    </div>
                )}
            </div>
                    {visibleCount < courses.length && (
                        <button onClick={handleVisible}>More {visibleCount}</button>
                    )}
        </div>
        
    )
}

export default CourseList;