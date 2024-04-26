import { useState } from "react";
import styles from "./Course.module.scss";

const Course = (props) =>{
    const {course, deleteCourse} = props;
    const [visibleLike, setvisibleLike] = useState(false);

    const hendlevisibleLike = () =>{
        setvisibleLike(!visibleLike);
    }

    const hendleDelete = (id) => {
        deleteCourse(id);
    }

    let liked_style = visibleLike ? styles.liked: styles.item;
    return (
        <div className={liked_style}>
            <h3>{course.tittle}</h3>
                <img src={course.img}></img>
                <p>Description: {course.description}</p>
                {course.hours > 130 ? <p className={styles.item__hard}>Hours: {course.hours}</p>: <p>Hours: {course.hours}</p>}
                <button onClick={()=>hendleDelete(course.id)}>Remove</button>            
                <button onClick={hendlevisibleLike}>Like</button>            
        </div>
    )
}

export default Course;