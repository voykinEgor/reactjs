import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import FormControl from '@mui/material/FormControl';
    import FormLabel from '@mui/material/FormLabel';

const SpaceXApi = () =>{
    const[capsules, setCapsules] = useState([]);
    const[statusFilter, setStatusFilter] = useState("");
    const[filteredCapsule, setFilteredCapsule] = useState([]);
    const[ratio, setRatio] = useState("");

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/capsules')
            .then((response) => response.json())
            .then((json) => 
            {
                setCapsules(json);
            });
    },[])
    useEffect(()=>{
        const t = capsules.filter(item => item.status == ratio);
        setFilteredCapsule(t);
    }, [ratio])
    return (
        <>
            <h1>Data from SpaceX API</h1>
            <div className={styles.mainblock}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                <RadioGroup onChange={(e) => setRatio(e.target.value)}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                <FormControlLabel value="retired" control={<Radio />} label="retired" />
                <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
                <FormControlLabel value="active" control={<Radio />} label="active" />
                <FormControlLabel value="destroyed" control={<Radio />} label="destroyed" />
                </RadioGroup>
            </FormControl>
                <div className={styles.list}>
                    {(ratio == "") ?
                    capsules.map((item)=>(
                        <card key={item.id} className={styles.spacex}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <CardContent>
                                <Link to={`/spacexapi/${item.capsule_serial}`}> 
                                    <h3>Capsule Serial: {item.capsule_serial}</h3>
                                </Link>
                               
                                <p>Description: {item.details}</p>
                                <p>Status: {item.status}</p>
                            </CardContent>                            
                        </card>
                    )):
                    filteredCapsule.map((item)=>(
                        <card key={item.id} className={styles.spacex}>
                            {/* <Course course={item} deleteCourse={deleteCourse}/> */}
                            <CardContent>
                                <Link to={`/spacexapi/${item.capsule_serial}`}> 
                                    <h3>Capsule Serial: {item.capsule_serial}</h3>
                                </Link>
                               
                                <p>Description: {item.details}</p>
                                <p>Status: {item.status}</p>
                            </CardContent>                            
                        </card>
                    ))}
                    
                </div>
                    {/* {visibleCount < courses.length && (
                        <button className={styles.buttonmore} onClick={handleVisible}>More {visibleCount}</button>
                    )} */}
            </div>
        </>
    )
}

export default SpaceXApi;