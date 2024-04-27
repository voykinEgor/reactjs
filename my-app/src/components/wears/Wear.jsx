import styles from "./Wears.module.scss";



const Wear = (props) =>{
    const [wear, setWear] = props;

    return (
        <>
            <div className={styles.wear}>
                <h3>{wear.title}</h3>
                <img src={wear.img}></img>
                <p>Description: {wear.description}</p>
                <p>Price: {wear.price}</p>
            </div>
        </>
    )
}

export default Wear;