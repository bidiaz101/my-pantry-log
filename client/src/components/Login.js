import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import {useHistory} from 'react-router-dom'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')

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
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then(data => {
                    setUser(data)
                    history.push('/user-foods')
                })
            } else {
                resp.json().then(resp => setError(resp.error))
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className='form' >
            <h1>Login </h1>
            <label>Username: </label>
            <input type="text" name='username' value={formData.username} onChange={(e) => handleChange(e)}/>
            <br />
            <label>Password: </label>
            <input type={showPassword ? 'text' : 'password'} name='password' onChange={(e) => handleChange(e)} value={formData.password} />
            <span id="pw-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "X" : "👁"}</span>
            {error ? <p className='error'>{error}</p> : null}
            <br />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login