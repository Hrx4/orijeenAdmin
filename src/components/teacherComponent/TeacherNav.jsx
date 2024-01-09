import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const TeacherNav = () =>{
    const navigate = useNavigate();
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back" >
                        <ArrowBackIcon onClick={() => navigate(-1)} />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Typography variant="subtitle1">
                        Hi, Teacher
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default TeacherNav;