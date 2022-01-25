import React, {useState, useEffect, useRef} from 'react';
import {Box} from '@mui/material';
import styles from './usersStyles';
import CardItem from './CardItem';
import FilterUsers from './FilterUsers';

function Users() {
    const {users_container, users_filter, users_list} = styles;
    const [data, setData] = useState([]);
    const [gender, setGender] = useState('');
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [search, setSearch] = useState('');
    const unfilteredData = useRef([]);

    const ageCalculate = (bday) => {
        return Math.trunc( ( new Date() - new Date(bday) ) / 31536000000 )
    }

    const handleSearchChange = (e) => {
        setSearch( e.target.value );
        setData( unfilteredData.current.filter( item => item.nickname.toLowerCase().includes( search.toLowerCase() ) ) )
    }

    const handleGenderChange = (e) => {
        setGender( e.target.value );
    }

    const handleAgeFromChange = (e) => {
        setAgeFrom( e.target.value )
    }

    const handleAgeToChange = (e) => {
        setAgeTo( e.target.value )
    }

    const handleFilterClick = () => {
        if (ageTo && gender) {
            setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.datatBirthday) && ageTo >= ageCalculate(item.datatBirthday) && item.gender === gender )  )
        } else {
            if (ageTo) {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.datatBirthday) && ageTo >= ageCalculate(item.datatBirthday) ) )
            } else if (gender) {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.datatBirthday) && item.gender === gender ) )
            } else {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.datatBirthday) ) )
            }
        }
    }

    useEffect( () => {
        fetch('http://localhost:8000/users')
        .then( (res) => res.json() )
        .then( (res) => {
            setData(res);
            unfilteredData.current = res;
        } );
        return () => setData(null);
    }, [] )

    const usersList = data.map( (item) => <CardItem nickname={item.nickname} firstName={item.firstName} lastName={item.lastName} key={item.id} /> );

    return (
        

        <Box sx={users_container}>

            <Box sx={users_filter}>
                <FilterUsers gender={gender} handleGenderChange={handleGenderChange} 
                             ageFrom={ageFrom} handleAgeFromChange={handleAgeFromChange} 
                             ageTo={ageTo} handleAgeToChange={handleAgeToChange} 
                             handleFilterClick={handleFilterClick} 
                             search={search} handleSearchChange={handleSearchChange}
                />
            </Box>

            <Box sx={users_list}>
                { usersList }
            </Box>

        </Box>
  );
}

export default Users;
