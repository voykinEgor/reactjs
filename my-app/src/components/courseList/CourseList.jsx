import Course from "../course/Course";
import styles from "./CourseList.module.scss";
import data from "../../data.json";


const CourseList = () => {
    // console.log(data);
    return(
        <div className={styles.list}>
            {data.map((item)=>
                <div key={item.id}>
                    <Course course={item}/>
                </div>
            )}
        </div>
    )
}

export default CourseList;