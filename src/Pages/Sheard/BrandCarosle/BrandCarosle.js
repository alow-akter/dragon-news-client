import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../asstes/brands/Brand1.jpeg'
import Brand2 from '../../../asstes/brands/Brand2.png'


const BrandCarosle = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />


            </Carousel.Item>

        </Carousel>
    );
}


export default BrandCarosle;