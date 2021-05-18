import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
// import { useAuth } from '../Context/authContext'
import { useDispatch, useSelector } from 'react-redux'
import { Signin } from '../Store/Action/userAction'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passRef = useRef()
    const confirmRef = useRef()
    const history = useHistory()
    const distpatch = useDispatch()
    const { loading, userSigin, errors } = useSelector(state => state.userReducer)
    console.log(loading, userSigin, errors);
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submit");
        if (passRef.current.value !== confirmRef.current.value) {
            return
        }
        distpatch(Signin(emailRef.current.value, passRef.current.value))
        setTimeout(() => {
            history.push('/login')
        }, 1000);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">SIGN UP</h2>
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
                        <Form.Group>
                            <Form.Label>Confirm</Form.Label>
                            <Form.Control type="password" ref={confirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Submit</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center">Have a account? </div>
        </>
    )
}
