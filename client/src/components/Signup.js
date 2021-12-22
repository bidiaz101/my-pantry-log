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
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formData.username.toLowerCase(),
                password: formData.password,
                password_confirmation: formData.password_confirmation,
                money_saved: 0,
                last_login: new Date()
            })
        })
        .then(resp => {
            if(resp.ok){
                fetch('/login', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: formData.username.toLowerCase(),
                        password: formData.password
                    })
                })
                .then(r => r.json())
                .then(data => {
                    setUser(data)
                    history.push('/all-foods')
                })
            } else {
                resp.json().then(resp => setErrors(resp.errors))
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label>Username: </label>
            <input type="text" name='username' value={formData.username} onChange={e => handleChange(e)} />
            <br />

            <label>Password: </label>
            <input type={showPassword ? 'text' : 'password'} name='password' value={formData.password} onChange={e => handleChange(e)} />
            <br />

            <label>Password Confirmation: </label>
            <input type={showPassword ? 'text' : 'password'} name='password_confirmation' value={formData.password_confirmation} onChange={e => handleChange(e)} />
            <span id="pw-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "X" : "👁"}</span>
            <br />

            {errors.length ? errors.map(error => <p key={error} >{error}</p>) : null}
            
            <input type='submit' name='Sign up' />
        </form>
    )
}

export default Signup