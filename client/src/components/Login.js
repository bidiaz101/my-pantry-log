import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import {useHistory} from 'react-router-dom'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const {setUser} = useContext(UserContext)

    const history = useHistory()

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

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
            setFormData({
                username: '',
                password: ''
            })
            history.push('/all-foods')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login: </h1>
            <label>Username: </label>
            <input type="text" name='username' value={formData.username} onChange={(e) => handleChange(e)}/>
            <br />
            <label>Password: </label>
            <input type={showPassword ? 'text' : 'password'} name='password' onChange={(e) => handleChange(e)} value={formData.password} />
            <div id="pw-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "X" : "👁"}</div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login