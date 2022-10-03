import React from 'react'

const GetApi = (props) => {
    const {setUsers, setIsLoading, setErrors} = props

    const getAllUsers = () => {
        fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Data not found")
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

    return (
        <>
            <getAllUsers />
        </>
    )
  
}

export default GetApi


