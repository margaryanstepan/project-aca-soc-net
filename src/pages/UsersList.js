import React from 'react'
import {useAuth} from '../hook/useAuth'

function UsersList() {

    const {user} = useAuth();

    const handleOnClick = () => {
        fetch(`http://localhost:8000/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...user,
                lastName: 'Grigoryan'
            }),
            headers: {
            'Content-type' : 'application/json; charset=UTF-8'
            }
        })
    }
    

    return (
        <>
            <button onClick={handleOnClick}></button>
        </>
    )
}

export default UsersList;