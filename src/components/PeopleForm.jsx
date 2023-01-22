import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";

const PeopleForm = (props) => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Nome Completo" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="CPF" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container>
    );
};
export default PeopleForm;