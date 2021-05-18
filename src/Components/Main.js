import React, { useEffect, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../Store/Action/userAction'


export default function Main() {
    const [currentUser, setCurrentUser] = useState()
    const { loading, userLogin, errors } = useSelector(state => state.userReducer)
    const history = useHistory()
    useEffect(() => {
        let userStore = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
        setCurrentUser(userStore)
    }, [])
    const handleLogout = async (e) => {
        e.preventDefault()
        await logout()
        history.push('/login')
    }
    return (

        <>
            <Card>
                {errors && <Alert variant="danger">{errors}</Alert>}
                <Card.Body>
                    <h3 className="text-center mb-4">Main</h3>
                    <strong>Email: {currentUser?.user?.email}</strong>
                </Card.Body>
                <Link className="btn btn-primary">update</Link>
            </Card>
            <div className="w-100 text-center">
                <Button className="mt-2" onClick={handleLogout}>Logout</Button>
            </div>
        </>
    )
}
