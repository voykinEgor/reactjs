import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";

const WearListApi = () =>{
    const [wears, setWears] = useState([]);
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
            <h1>Data from WearList API</h1>
            <div className={styles.mainblock}>
                <div className={styles.list}>
                    {wears.slice(0,10).map((item)=>
                        <div key={item.id} className={styles.wears}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <h3>{item.title}</h3>
                            <img src={item.images[0]} alt="wearimage"></img>
                            <h3>Price: {item.price}$</h3>
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