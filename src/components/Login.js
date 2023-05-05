import React, { useContext, useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { EndPointContext } from '../context/EndPointContext'
import { SHA256 } from "crypto-js"
import man from '../images/man.png'
import '../styling/SignIn.css'
import '../styling/SignUp.css'
export const Login = () => {
    const SECRET_KEY = process.env.REACT_APP_SECRET_KEY
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nav, setNav] = useState(false)
    const [message, setMessage] = useState(false)
    const { endpoint } = useContext(EndPointContext)
    const { token, setToken } = useContext(AuthContext)
    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch(`${endpoint}/token/`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: SHA256(password, SECRET_KEY).toString()
            })
        })

        const data = await response.json()
        if (response.ok) {
            setToken(data.access)
            localStorage.setItem('token', data.access)

        }

        setMessage(true)
    }
    const handleSignUp = () => {
        setNav(true)
    }
    return (
        <div className='login'>
            <form className='sign-in' onSubmit={handleLogin}>
                <div className='container'>
                    <div className='information'>
                        <div className='todo'>LOGIN TO YOUR ACCOUNT</div>
                        <div className='user-inputs'>
                            <input
                                type='text'
                                className='username-input'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setMessage(false) }}
                            />
                            <input
                                type='password'
                                className='password-input'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setMessage(false) }}
                            />
                        </div>
                        {
                            message &&
                            <div className='login-fail-message'>
                                No exisiting account with this credentials
                            </div>
                        }
                        <button className='login'>Login</button>
                        <div className='under-login'></div>
                        <div className='no-account'>you don't have an account ?</div>
                        <button onClick={handleSignUp} className="to-sign-up">
                            Sign up
                        </button>
                    </div>
                    <div>
                        <img src={man} className='man' />
                    </div>
                </div>
            </form>
            {
                token && <Navigate replace to="/results/" />
            }
            {
                nav && <Navigate replace to='/sign-up/' />
            }
        </div>
    )
}
