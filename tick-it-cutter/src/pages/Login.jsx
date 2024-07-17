import axios from 'axios'
import config from '../config/config'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardHeader from 'react-bootstrap/CardHeader'
import CardFooter from 'react-bootstrap/CardFooter'
import { useNavigate } from 'react-router-dom'

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

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
        <Card>
            <CardHeader>
                <p>Login</p>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleLogin}>
                    <input
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Username"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </CardBody>
        </Card>
    )
}
