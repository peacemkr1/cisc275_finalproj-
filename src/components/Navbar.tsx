import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
    const navigate = useNavigate();

    return (
        <Navbar bg="light" className="shadow-sm">
            <Container>
                <Navbar.Brand>My App</Navbar.Brand>
                <Button variant="primary" onClick={() => navigate("/")}>
                    Home
                </Button>
            </Container>
        </Navbar>
    );
}