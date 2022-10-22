import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosle from '../BrandCarosle/BrandCarosle';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary">
                    <FaGoogle></FaGoogle> Login with Google </Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github </Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h3>Find us on </h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> FaceBook  </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosle></BrandCarosle>
            </div>

        </div>
    );
};

export default RightSideNav;