import React from 'react';
import { AppBar, Box, IconButton, Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import icon from './icons/icon.png';
import styles from './headerStyles';
import { useAuth } from '../../hook/useAuth';

function Header() {
    const {container, buttons} = styles;
    const navigate = useNavigate();
    const {signout} = useAuth();
    
    const handleLogOut = () => {
        signout( () => navigate("/login") )
    }

    return (

        <Box >
                <AppBar position="static" sx={ {height: '70px', backgroundColor: "black", opacity: 0.2} }>
                    <Box sx={container}>
                        
                        <Box sx={ {display: 'inherit', justifyContent: 'center'} }>
                        
                            <IconButton
                            edge="start" color="inherit" aria-label="menu" onClick={ () => { navigate("/") } }
                            >
                                <img src={icon}/>
                            </IconButton>
                        
                        </Box>
                        
                        <Box sx={ {display: 'inherit', justifyContent: 'center', alignContent: 'center' } }>
                            
                            <Typography variant="h3">
                                Our Project
                            </Typography>
                        
                        </Box>
                        
                        <Box sx={buttons}>
                        
                            <Button 
                            color="inherit" variant="outlined" size="medium" onClick={ () => navigate("/myprofile") }
                            >
                                My Profile
                            </Button>
                            
                            <Button onClick={handleLogOut}
                            color="inherit" variant="outlined" size="medium" 
                            >
                                Log Out
                            </Button>
                        
                        </Box>
                    </Box>
                </AppBar>
        </Box>
        
    )
}

export default Header;