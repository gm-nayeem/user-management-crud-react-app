import React, { useEffect, useState } from 'react';

import './App.css';
import GetUsers from './api/getUsers';

const URL = "https://rest-api-without-db.herokuapp.com/users";

function App() {

  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErrors] = useState("")

  // const getAllUsers = () => {

  //   fetch(URL)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error("Data not found")
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       setUsers(data.users)
  //     })
  //     .catch(error => {
  //       setErrors(error)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  useEffect(() => {
    <GetUsers URL={URL} setUsers={setUsers} setIsLoading={setIsLoading} setErrors={setErrors}/>
  }, [])


  return (
    <div className="App">
      <h1>User Management App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <section>
        {users && users.map(user => {
          const { id, username, email } = user
          return (
            <article key={id} className="card">
              <p>{username}</p>
              <p>{email}</p>
              <button className='btn'>Edit</button>
              <button className='btn'>Delete</button>
            </article>
          )
        })}
      </section>

    </div>
  );
}

export default App;
