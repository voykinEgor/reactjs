import { useState, useEffect } from "react";
import styles from "./Course.module.scss";

const Course = (props) => {
    const { course, deleteCourse } = props;
    const [liked, setLiked] = useState(() => {
        // Инициализация состояния liked из localStorage
        const savedLiked = localStorage.getItem(`liked-${course.id}`);
        return savedLiked ? JSON.parse(savedLiked) : false;
    });

    useEffect(() => {
        // Сохранение состояния liked в localStorage
        localStorage.setItem(`liked-${course.id}`, JSON.stringify(liked));
    }, [liked]);

    const handleVisibleLike = () => {
        setLiked(!liked);
    };

    const handleDelete = (id) => {
        deleteCourse(id);
    };

    return (
        <div className={`${styles.item} ${liked ? styles.liked : ''}`}>
            <h3>{course.tittle}</h3>
            <img src={course.img} alt={course.tittle}></img>
            <p>Description: {course.description}</p>
            {course.hours > 130 ? (
                <p className={styles.item__hard}>Hours: {course.hours}</p>
            ) : (
                <p>Hours: {course.hours}</p>
            )}
            <button onClick={() => handleDelete(course.id)}>Remove</button>
            <button onClick={handleVisibleLike}>Like</button>
        </div>
    );
};

export default Course;
