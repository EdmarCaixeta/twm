import React from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ServiceOrder = (props) => {
    return (
        <Container>
            <CustomNavbar />
            <h1>Cadastro de Ordem de Serviços</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder=" Nome do Cliente" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Selecione o Técnico</option>
                    <option value="1">João</option>
                    <option value="2">Timóteo</option>
                    <option value="3">Reginald Welder Driver</option>
                </Form.Select>
                <br />
                <Form.Select aria-label="Default select example">
                    <option>Selecione o Tipo de Serviço</option>
                    <option value="1">Vistoria</option>
                    <option value="2">Orçamento</option>
                    <option value="3">Sinistro</option>
                </Form.Select>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <h4>Submeter Fotos</h4>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control type="file" multiple />
                </Form.Group>
                <h4>Submeter Laudo</h4>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control type="file" multiple />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container >
    );
};
export default ServiceOrder;