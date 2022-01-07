import React, { useState } from 'react'
import { Container, Dropdown, DropdownButton, Button, FormControl, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.png'
import Ubicacion from '../miUbicacion/Ubicacion'


export const Narbar = () => {
  const  user  = useSelector(store => store.login);
  const [modalShow, setModalShow] = useState(false);
   const ubicacion =Ubicacion()
 
    return (
        <div>
            <div className="containerMenu">
                <div className=" menu1">
                    <li>
                        <Link className="link" to="/">
                            <img src={logo} alt="Logo Amazon" className="imglogo" />
                        </Link>
                    </li>
                    <li>
                        <div className="ubicacion">
                           
                            <p className="identifica">Envio,</p>
                            <h6 className="identifica"><span className="iconify iconos" data-icon="akar-icons:location" style={{color: "white" }}></span>{ubicacion}</h6>
                        </div>
                    </li>
                    <li className="col-5">
                        <InputGroup className="mb-3 ">
                            <DropdownButton
                                variant="outline-secondary"
                                title="Todos los Departamentos"
                                id="input-group-dropdown-1"
                                bg="light"
                            >
                                <Dropdown.Item href="#">Arte y Artesanias</Dropdown.Item>
                                <Dropdown.Item href="#">Automotris</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <FormControl aria-label="Text input with dropdown button" />
                        </InputGroup>

                    </li>
                    <li>
                    { user.name===undefined ?  ( <Link to="/login">
                                <p className="identifica">Hola, idetificate</p>
                                <h6 className="identifica">Cuenta y Listas</h6>
                                </Link>)
                                :(<p className="identifica">{user.name}</p>)
                            } 

                    </li>
                    <li>
                        <div className="devoluciones-pedidos">
                            <h6>Devoluciones y Pedidos</h6>
                        </div>
                    </li>
                    <li>
                        <div className="carrito">
                            <Link to="/carrito"><span className="iconify imgCar" data-icon="carbon:shopping-cart"></span></Link>
                        </div>
                    </li>
                </div>
            </div>
            <div className="menu2">
                <Navbar className="fondoMenu2" expand={false} variant="dark">
                    <Container fluid className="listaMenu2" >
                        <div className="logoMenu2">
                            <Navbar.Toggle aria-controls="offcanvasNavbar" className="espacioMenu2" />
                            <Navbar.Brand className="itemsMenu2" href="#">Todo</Navbar.Brand>
                        </div>
                        <Navbar.Brand className="itemsMenu2" href="#">Targeta de Regalo</Navbar.Brand>
                        <Navbar.Brand className="itemsMenu2" href="#">Prime</Navbar.Brand>
                        <Navbar.Brand className="itemsMenu2" href="#">Lo Mas Vendido</Navbar.Brand>
                        <Navbar.Brand className="itemsMenu2" href="#">AmazonBasic</Navbar.Brand>
                        <Navbar.Brand className="itemsMenu2" href="#">Computo y Tablet</Navbar.Brand>
                        <Navbar.Brand className="itemsMenu2" href="#">Lo Mas Regalado</Navbar.Brand>

                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start"
                        >
                            <Offcanvas.Header closeButton className="cabeceraOff">
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                   
                                    <Link to="/login">
                                        <span className="iconify" data-icon="carbon:user-avatar-filled-alt" data-width="30"></span>
                                         Hola, Identificate
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>

        </div>
    )
}
