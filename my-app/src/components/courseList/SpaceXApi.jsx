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
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SpaceXApi = () => {
    const [capsules, setCapsules] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");
    const [filteredCapsules, setFilteredCapsules] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/capsules')
            .then((response) => response.json())
            .then((json) => {
                setCapsules(json);
            });
    }, []);

    useEffect(() => {
        let filtered = capsules;

        if (statusFilter !== "all") {
            filtered = filtered.filter(item => item.status === statusFilter);
        }

        if (typeFilter !== "all") {
            filtered = filtered.filter(item => item.type === typeFilter);
        }

        setFilteredCapsules(filtered);
    }, [statusFilter, typeFilter, capsules]);

    return (
        <>
            <h1>Data from SpaceX API</h1>
            <div className={styles.mainblock}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <FormControl>
                        <FormLabel id="status-radio-buttons-group-label">Status</FormLabel>
                        <RadioGroup
                            onChange={(e) => setStatusFilter(e.target.value)}
                            row
                            aria-labelledby="status-radio-buttons-group-label"
                            defaultValue="all"
                            name="status-radio-buttons-group"
                        >
                            <FormControlLabel value="all" control={<Radio />} label="all" />
                            <FormControlLabel value="retired" control={<Radio />} label="retired" />
                            <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
                            <FormControlLabel value="active" control={<Radio />} label="active" />
                            <FormControlLabel value="destroyed" control={<Radio />} label="destroyed" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <Select
                            labelId="type-select-label"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            style={{ width: 200 }}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="Dragon 1.0">Dragon 1.0</MenuItem>
                            <MenuItem value="Dragon 1.1">Dragon 1.1</MenuItem>
                            <MenuItem value="Dragon 2.0">Dragon 2.0</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                

                <div className={styles.list}>
                    {filteredCapsules.map((item) => (
                        <Card key={item.capsule_serial} className={styles.spacex}>
                            <CardContent>
                                <Link to={`/spacexapi/${item.capsule_serial}`}>
                                    <Typography variant="h5">
                                        Capsule Serial: {item.capsule_serial}
                                    </Typography>
                                </Link>
                                <p>Description: {item.details}</p>
                                <p>Status: {item.status}</p>
                                <p>Type: {item.type}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SpaceXApi;
