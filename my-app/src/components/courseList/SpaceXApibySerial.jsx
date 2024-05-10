import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./CourseList.module.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const SpaceXApibySerial = () =>{
    const {capsule_serial} = useParams();
    const [capsule, setCapsule] = useState(null);

    useEffect(()=>{
        fetch(`https://api.spacexdata.com/v3/capsules/${capsule_serial}`)
            .then((response) => response.json())
            .then((json) => 
            {
                setCapsule(json);
            });
    },[capsule_serial])

    return (
        <div className={styles.blockbyserial}>
            {capsule && (
                <div>
                    <h1>{capsule.capsule_serial}</h1>
                    <p>Установлен на {capsule.capsule_id}</p>
                    <p>Время запуска: {capsule.original_launch}</p>
                    {capsule.missions.map((mission, index) => (
                        <p key={index}>Количество полётов: {mission.flight}</p>
                    ))}
                    <p>Статус: {capsule.status}</p>
                </div>
            )}
            
        </div>
    );
}

export default SpaceXApibySerial;