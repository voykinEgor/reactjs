import { useEffect, useState } from "react";
import Course from "../course/Course";
import styles from "./CourseList.module.scss";
import data from "../../data.json";

const CourseList = () => {
    const [visibleCount, setVisibleCount] = useState(2);
    const [courses, setCourses] = useState([]);
    const [filter, setFilter] = useState("all"); 

    useEffect(() => {
        setCourses(data);
    }, []);

    const deleteCourse = (id) => {
        const updatedCourses = courses.filter((item) => item.id !== id);
        setCourses(updatedCourses);
    };

    const handleVisible = () => {
        setVisibleCount(visibleCount + 1);
    };

    const handleOnlyLiked = () => {
        setFilter("liked");
    };

    const handleAll = () => {
        setFilter("all");
    };

    const filteredCourses = courses.filter((course) => {
        if (filter === "liked") {
            const liked = localStorage.getItem(`liked-${course.id}`);
            return liked && JSON.parse(liked);
        }
        return true;
    });

    return (
        <div className={styles.mainblock}>
            <div className={styles.list}>
                {filteredCourses.slice(0, visibleCount).map((item) => (
                    <div key={item.id}>
                        <Course course={item} deleteCourse={deleteCourse} />
                    </div>
                ))}
            </div>
            {visibleCount < filteredCourses.length && (
                <button className={styles.buttonmore} onClick={handleVisible}>
                    More {visibleCount}
                </button>
            )}
            <div className={styles.filterButtons}>
                <button onClick={handleOnlyLiked}>OnlyLiked</button>
                <button onClick={handleAll}>All</button>
            </div>
        </div>
    );
};

export default CourseList;
