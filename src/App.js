import React, { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

const URL = "https://rest-api-without-db.herokuapp.com/users";

function App() {

  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErrors] = useState("")

  const getAllUsers = () => {
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error("User Not Found")
        }
        return res.json()
      })
      .then(data => {
        setUsers(data.users)
      })
      .catch(error => {
        setErrors(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  // delete user
  const handleDelete = (id) => {
    fetch(URL + `/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("User Not Delete")
        }
        getAllUsers()
      })
      .catch(error => {
        setErrors(error)
      });
  }

  // create user
  const addUser = (user) => {
    console.log(user)
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          getAllUsers()
        } else {
          throw new Error("User Not Created")
        }
      })
      .catch(error => {
        setErrors(error)
      });
  }

  // update user

  return (
    <div className="App">
      <h1>User Management App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <UserForm btnText="Add User" handleSubmitData={addUser}/>

      <section>
        {users && users.map((user) => {
          const {id, username, email } = user
          return (
            <article key={id} className="card">
              <p>{username}</p>
              <p>{email}</p>
              <button className='btn'>Edit</button>
              <button className='btn' onClick={() => handleDelete(id)}>Delete</button>
            </article>
          )
        })}
      </section>

    </div>
  );
}

export default App;
