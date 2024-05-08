import { useEffect, useState } from "react";
import styles from "./CourseList.module.scss";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';


const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const WearListApi = () =>{
    const [wears, setWears] = useState([]);
    const [textinfo, setTextinfo] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loaded, setLoaded] = useState(false);
    const[textFilter, setTextFilter] = useState("");
    const[filteredWear, setFilteredWear] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => 
            {
                setWears(json);
                setLoaded(true);
            });
    },[])

    useEffect(()=>{
        const t = wears.filter(item=> item.title.includes(textFilter))
        setFilteredWear(t);
    },[textFilter])

    return (
        <>
            <h1>Data from WearList API</h1>
            {
                !loaded &&
                <Box>
                    <CircularProgress />
                </Box>
            }
            <p>{textFilter}</p>
            <TextField id="standard-basic" label="Filter" variant="standard" 
             onChange={(e) => setTextFilter(e.target.value)}/>
            <div className={styles.mainblock}>
                <div className={styles.list}>
                    {
                        (textFilter==="") ?
                        wears.map((item)=>(
                            <card key={item.id} className={styles.wears}>
                                <CardMedia
                                    sx={{ height: 350 }}
                                    image={item.images[0]}
                                    title="wearimage"
                                />
                                {/* <img src={item.images[0]} alt="wearimage"></img> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{item.title}</Typography>
                                    <h3>Price: {item.price}$</h3>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small" onClick={()=>{setTextinfo(item.description); handleOpen()}}>View</Button>
                                </CardActions>
                                
                            </card>
                        )):
                        filteredWear.map((item)=> (
                                <card key={item.id} className={styles.wears}>
                                    <CardMedia
                                        sx={{ height: 350 }}
                                        image={item.images[0]}
                                        title="wearimage"
                                    />
                                    {/* <img src={item.images[0]} alt="wearimage"></img> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">{item.title}</Typography>
                                        <h3>Price: {item.price}$</h3>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small" onClick={()=>{setTextinfo(item.description); handleOpen()}}>View</Button>
                                    </CardActions>
                                    
                                </card>
                        )) 
                    } 
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Product's description
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {textinfo}
                    </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default WearListApi;