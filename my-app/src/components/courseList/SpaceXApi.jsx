import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";

const SpaceXApi = () =>{
    const [capsules, setCapsules] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/capsules')
            .then((response) => response.json())
            .then((json) => 
            {
                console.log(json);
                setCapsules(json);
            });
    },[])

    return (
        <>
            <h1>Data from SpaceX API</h1>
            <div className={styles.mainblock}>
                <div className={styles.list}>
                    {capsules.map((item)=>
                        <div key={item.id} className={styles.spacex}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <h3>Capsule Serial: {item.capsule_serial}</h3>
                            <p>Description: {item.details}</p>
                            <p>Status: {item.status}</p>
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

export default SpaceXApi;