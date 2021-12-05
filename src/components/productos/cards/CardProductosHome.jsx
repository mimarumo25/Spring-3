import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './stylesProductos.css'

export default function CardProductosHome() {
    return (
        <div>
            <div className=" container-fluid px-5 containerCards">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-between ">
                    <Card style={{ width: '18rem' }} className=" mb-2">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Link to="/details_product">
                                <div> 
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VgwZsyAQL._AC_UL1001_.jpg" />
                                </div>
                            </Link>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Link to="/details_product">
                                <div> 
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VgwZsyAQL._AC_UL1001_.jpg" />
                                </div>
                            </Link>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VgwZsyAQL._AC_UL1001_.jpg" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VgwZsyAQL._AC_UL1001_.jpg" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VgwZsyAQL._AC_UL1001_.jpg" />
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
