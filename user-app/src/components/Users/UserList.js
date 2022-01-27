import React from 'react';
import Card from '../UI/Card';
import classes from "./UserList.module.css";



const Userlist = (props) => {

    const onDeleteUserHandler = (userId) => {
        props.onDeleteUser(userId)
    };
    const users = props.users;

    return (
        <Card className={classes.users}>
            <ul>
                {users.map(user =>
                    <li key={user.id} onClick={() => onDeleteUserHandler(user.id)}>{user.name} ({user.age} years old)</li>)
                }
            </ul>
        </Card>
    );
}

export default Userlist;
