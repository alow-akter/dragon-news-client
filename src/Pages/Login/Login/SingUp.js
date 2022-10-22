import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SingUp = () => {
    const [error, setError] = useState()
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;
        //   console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset()
                setError('')
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerifiction()
                toast.success('Please verify your email address ')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleEmailVerifiction = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to='/thrams'>Thrams and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Sing Up
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default SingUp;