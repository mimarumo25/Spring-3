import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Carrusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/51-j15iFimL._SX1500_.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61uIjme4x8L._SX3000_.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61d5Aj-jQPL._SX3000_.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
