import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

const UserForm = ({handleSubmitData, selectedUser, btnText}) => {

  const [user, setUser] = useState({
    username: '',
    email: ''
  })

  useEffect(() => {
    setUser({
      username: selectedUser.username,
      email: selectedUser.email
    })
  }, [selectedUser])

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
        <input type="text" name='username' id='username' required value={username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' required value={email} onChange={handleChange} />
      </div>
      <button type='submit' className='btn'>{btnText}</button>
    </form>
  )
}

UserForm.defaultProps = {
  selectedUser: {
    username: '',
    email: ''
  }
}

export default UserForm;