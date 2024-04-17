import styles from "./Course.module.scss";

const Course = ({course}) =>{
    return (
        <div className={styles.item}>
            <h3>{course.tittle}</h3>
                <img src={course.img}></img>
                <p>Description: {course.description}</p>
                {course.hours > 130 ? <p className={styles.item__hard}>Hours: {course.hours}</p>: <p>Hours: {course.hours}</p>}
            
        </div>
    )
}

export default Course;