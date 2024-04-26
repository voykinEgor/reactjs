import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";

const ProductListApi = () =>{
    const[products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => 
            {
                console.log(json);
                setProducts(json);
            });
    },[])
    return (
        <>
            <h1>Data from Api</h1>
            <div className={styles.mainblock}>
                <div className={styles.list}>
                    {products.map((item)=>
                        <div key={item.id}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
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

export default ProductListApi;