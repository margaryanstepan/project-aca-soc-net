import React from 'react';
import styles from './myProfileStyles';
import {Box} from '@mui/material';

function MyProfile() {
    const {profile_container, profile_main, profile_edit, profile_warning} = styles;
    
    return (
        <Box sx={profile_container}>
            <Box sx={profile_main}>

            </Box>

            <Box sx={profile_edit}>

            </Box>

            <Box sx={profile_warning}>

            </Box>
        </Box>
    )
}

export default MyProfile;