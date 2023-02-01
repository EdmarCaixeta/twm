import React, { useState, useEffect } from "react";
import { Container, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import CustomNavbar from "../components/Navbar";

const ServiceOrder = (props) => {
    const [clientData, setClientData] = useState([]);
    const [technicianData, setTechnicianData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/clients")
            .then((res) => {
                setClientData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:5000/tecnicians")
            .then((res) => {
                setTechnicianData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:5000/service-type")
            .then((res) => {
                setServiceData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();

        const json_data = {
            Cliente: event.target.Cliente.value,
            Tecnico: event.target.Tecnico.value,
            Service_Type: event.target.Servico.value
        };

        formData.append('data', JSON.stringify(json_data))
    
        formData.append("laudo", event.target.elements.Laudo.files[0]);

        const images = event.target.elements.formFileMultiple.files;
        for (const image of images) {
            formData.append('images', image)
        }

        axios
            .post("http://localhost:5000/service-order", formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        event.target.reset()
        alert('Ordem de serviço criada!')
    
    };

    return (
        <Container>
            <CustomNavbar />
            <h1>Cadastro de Ordem de Serviços</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Selecione o Cliente</Form.Label>
                    <Form.Control as="select" name="Cliente">
                        <option>Selecione o Cliente</option>
                        {clientData.map((client, index) => (
                            <option key={index} value={client.Name}>
                                {client.Name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <br />
                <FormGroup controlId="Tecnico">
                    <Form.Control as="select" aria-label="Default select example" name='Tecnico'>
                        <option>Selecione o Técnico</option>
                        {technicianData.map((technician, index) => (
                            <option key={index} value={technician.Name}>
                                {technician.Name}
                            </option>
                        ))}
                    </Form.Control>
                </FormGroup>
                <br />
                <FormGroup controlId="Servico">
                    <Form.Control as="select" aria-label="Default select example" name='Servico'>
                        <option>Selecione o Tipo de Serviço</option>
                        {serviceData.map((service, index) => (
                            <option key={index} value={service.Titulo}>
                                {service.Titulo}
                            </option>
                        ))}
                    </Form.Control>
                </FormGroup>
                <br />
                <Form.Group>
                    <h4>Laudo</h4>
                    <Form.Control type="file" accept=".pdf" name="Laudo" />
                </Form.Group>
                <br />
                <Form.Group controlId="formFileMultiple">
                    <h4>Imagens</h4>
                    <Form.Control type="file" accept="image/*" multiple />
                </Form.Group>
                <br />

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container >
    );
}

export default ServiceOrder;