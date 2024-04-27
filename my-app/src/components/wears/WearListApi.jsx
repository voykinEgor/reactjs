import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";
import Wear from "./Wear.jsx";

const WearListApi = () =>{
    const[wears, setWears] = useState([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => 
            {
                console.log(json);
                setWears(json);
            });
    },[])
    return (
        <>
            <h1>Wears from Api</h1>
            <div className={styles.mainblock}>
                <div className={styles.wear}>
                    {wears.map((item)=>
                        <div key={item.id}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <h3>{item.title}</h3>
                            <p>{item.price}$</p>
                        </div>
                    )}
                </div>
                    {/* {visibleCount < courses.length && (
                        <button className={styles.buttonmore} onClick={handleVisible}>More {visibleCount}</button>
                    )} */}
            </div>
        </>
    )
}

export default WearListApi;