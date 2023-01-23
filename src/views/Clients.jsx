import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Client extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const json_data = {
            Name: event.target.elements.Name.value,
            CPF: event.target.elements.CPF.value,
            Email: event.target.elements.Email.value,
        };

        console.log(json_data)
        const json = JSON.stringify(json_data)

        axios.post('http://localhost:5000/clients', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <CustomNavbar />
                <h1>Cadastro de Clientes</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="Name" placeholder="Nome Completo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" name="CPF" placeholder="CPF" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="Email" placeholder="Email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        )
    };
}

export default Client;