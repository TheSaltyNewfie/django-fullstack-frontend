import axios from 'axios'
import config from '../config/config'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardFooter from 'react-bootstrap/CardFooter'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import '../App.css'

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = "csrftoken"


export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const csrftoken = Cookies.get('csrftoken')
        const response = await axios.post(`${config.api_endpoint}/api-token-auth/`,
            {
                username,
                password
            },
            {
                headers: {
                    'X-CSRFToken': csrftoken
                }
            }
        )

        const token = response.data.token
        localStorage.setItem('token', token)
        console.log(token)
        navigate('/')
    }

    return (
        <div>
            <Navbar />
            <Card className='loginContainer'>
            <CardHeader className='loginHeader'>
                <h3>Login</h3>
            </CardHeader>
            <CardBody >
                <form className='loginForm'onSubmit={handleLogin}>
                    <input className='loginUsername'
                        type='username'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input className='loginPassword'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='loginSubmit' type="submit">Submit</button>
                </form>
            </CardBody>
        </Card>
        </div>
    )
}
