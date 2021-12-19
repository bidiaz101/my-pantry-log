import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useHistory } from 'react-router-dom'

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const {setUser} = useContext(UserContext)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: formData.username.toLowerCase(),
                password: formData.password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            setUser(data.username)
            history.push('/all-foods')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" name='username' value={formData.username} onChange={e => handleChange(e)} />
            <br />
            <label>Password: </label>
            <input type="password" name='password' value={formData.password} onChange={e => handleChange(e)} />
            <br />
            <label>Password Confirmation: </label>
            <input type='password' name='password_confirmation' value={formData.password_confirmation} onChange={e => handleChange(e)} />
            <br />
            <input type='submit' name='Sign up' />
        </form>
    )
}

export default Signup