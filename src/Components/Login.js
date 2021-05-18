import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
// import { useAuth } from '../Context/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Store/Action/userAction'
import { Link, useHistory } from 'react-router-dom'
export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()
    // const { SignUp } = useAuth()
    const distpatch = useDispatch()
    const { loading, userLogin, errors } = useSelector(state => state.userReducer)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit");
        distpatch(login(emailRef.current.value, passRef.current.value))
        setTimeout(() => {
            history.push('/')
        }, 1000);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">LOG IN</h2>

                    {errors && <Alert variant="danger">{errors}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Submit</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center">Need an account? <Link to={'/signin'}>Signin</Link></div>
        </>
    )
}
