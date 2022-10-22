import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState()
    const { singIn, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const it = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const from = event.target
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        singIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                from.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(it, { replace: true })
                }
                else {
                    toast.error('Your email is not verified.Please verify your email address')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally((setLoading) => {
                setLoading(false);
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;