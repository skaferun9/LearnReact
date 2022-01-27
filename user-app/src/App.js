import React, { useState } from 'react';

import AddUser from "./components/Users/AddUser";
import Userlist from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    })
    console.log(usersList)
  }

  const deleteUsersHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updateUsersList = prevUsersList.filter(user => user.id !== userId)
      return updateUsersList;
    })
    console.log(usersList)
  }

  return (
    <div>
      <section>
        <AddUser onAddUser={addUsersHandler} />
      </section>
      <section>
        <Userlist users={usersList}
          onDeleteUser={deleteUsersHandler}
        />
      </section>
    </div>
  );
}

export default App;
