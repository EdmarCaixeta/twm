import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ServicesType = (props) => {
    return (
        <Container>
            <CustomNavbar />
            <h1>Cadastro de Tipos de Serviços</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Título" />
                </Form.Group>

                <h4>Complexidade</h4>
                <p>Medição da quantidade de tempo demandada para realizar o serviço</p>

                <div className="mb-3" key={'inline-radio'}>
                    <Form.Check inline type="radio" name='g2' label="Baixa"></Form.Check>
                    <Form.Check inline type="radio" name='g2' label="Média"></Form.Check>
                    <Form.Check inline type="radio" name='g2' label="Alta"></Form.Check>
                </div>

                <h4>Custeio</h4>
                <p>Serviço incluso em plano ou cobrado a parte</p>
                <div className="mb-3" key={'inline-radio'}>
                    <Form.Check inline type="radio" name='g1' label="Incluso"></Form.Check>
                    <Form.Check inline type="radio" name='g1' label="Pago pelo Cliente"></Form.Check>
                </div>

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container>
    );
};
export default ServicesType;