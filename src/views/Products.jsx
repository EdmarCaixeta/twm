import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";

const Products = (props) => {
    return (
        <Container>
            <CustomNavbar />
            <h1>Cadastro de Produtos</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Nome do Produto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Preço" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control type="file" multiple />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container>
    );
};
export default Products;