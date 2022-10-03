import React, { useState } from 'react'
import PropTypes from 'prop-types'


const UserForm = ({handleSubmitData, btnText}) => {

  const [user, setUser] = useState({
    username: '',
    email: ''
  })

  const handleChange = (e) => {
    const selectedField = e.target.name;
    const seletedValue = e.target.value
    setUser(prevState => {
      return {...prevState, [selectedField]: seletedValue}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitData(user);
    
    setUser({
      username: "",
      email: ""
    })
  }

  const {username, email} = user
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' value={username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' value={email} onChange={handleChange} />
      </div>
      <button type='submit' className='btn'>{btnText}</button>
    </form>
  )
}

UserForm.propTypes = {}

export default UserForm;