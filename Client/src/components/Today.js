import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import pressure from '../assets/pressure.svg'
import wind_speed from '../assets/wind_speed.svg'
import humidity from '../assets/humidity.svg'
import sunrise from '../assets/sunrise.svg'
import sunset from '../assets/sunset.svg'
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import Axios from 'axios';
const useStyles = makeStyles((theme) => ({
    unit__icon: {
        width: 22,
        height:22,
        alignSelf: 'center',
        marginRight: 4,
        marginLeft: 20,
    },
    unit__icon1: {
        width: 22,
        height:22,
        alignSelf: 'center',
        fontSize: '15',
    },
    weather__icon: {
        width: 90,
        height: 90,
        Top: 0,
    },
    main : {
        overflow: 'auto',
        padding: 5,
    },
    text__left: {
        float: 'left',
    },
    text__right: {
        float: 'right',
    },
    span: {
        fontWeight: 'bold',
    }

  }));

function Today() {
    const classes = useStyles();
    const [t_h,setT_H] = useState({t:"15",h:"16"});
    const handleClick=()=>{
        Axios.get("http://localhost:3001/routes/datos").then((response)=>{
            console.log(response);
            const {temperature,humidity} = response.data;
            setT_H({t:temperature,h:humidity}) 
        });
    }
    useEffect(() => {
        const timer = setInterval(() => {
            Axios.get("http://localhost:3001/routes/datos").then((response)=>{
            console.log(response);
            const {temperature,humidity} = response.data;
            setT_H({t:temperature,h:humidity}) 
        });
        }, 1000);
      }, []);
      
      
    return (
        <CardContent>
            <div className={classes.main}>
                <div className={classes.text__left}>
                    <Typography variant="h3" gutterBottom >
                        {t_h.t}°C
                    </Typography>
                    
                </div>
                <div className={classes.text__right}>
                    
                {/* <Button variant="contained" onClick={handleClick}>Update</Button> */}
                    
                </div>
            </div>
                <div>

                    <img src={humidity} alt="Logo" className={classes.unit__icon}/><span className={classes.span}>{t_h.h} %</span>
                </div>
            </CardContent>    
    )
}

export default Today
