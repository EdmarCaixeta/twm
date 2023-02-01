import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import axios from 'axios';
import CustomNavbar from "../components/Navbar";

class ServicesType extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const json_data = {
            Titulo: event.target.Titulo.value,
            Complexidade: event.target.Complexidade.value,
            Custeio: event.target.Custeio.value,
        };

        console.log(json_data)
        const json = JSON.stringify(json_data)

        axios.post('http://localhost:5000/service-type', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        alert('Tipo de serviço criado!')
        event.target.reset()
    }


    render() {
        return (
            <Container>
                <CustomNavbar />
                <h1>Cadastro de Tipos de Serviços</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" name="Titulo">
                        <Form.Control type="text" placeholder="Título" name="Titulo" />
                    </Form.Group>

                    <h4>Complexidade</h4>
                    <p>Medição da quantidade de tempo demandada para realizar o serviço</p>

                    <div className="mb-3" key={'inline-radio'}>
                        <Form.Check inline type="radio" name='Complexidade' label="Baixa" value="Baixa"></Form.Check>
                        <Form.Check inline type="radio" name='Complexidade' label="Média" value="Média"></Form.Check>
                        <Form.Check inline type="radio" name='Complexidade' label="Alta" value="Alta"></Form.Check>
                    </div>

                    <h4>Custeio</h4>
                    <p>Serviço incluso em plano ou cobrado a parte</p>
                    <div className="mb-3" key={'inline-radio'}>
                        <Form.Check inline type="radio" name='Custeio' label="Incluso" value="Incluso"></Form.Check>
                        <Form.Check inline type="radio" name='Custeio' label="Pago pelo Cliente" value="Pago pelo Cliente"></Form.Check>
                    </div>
                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        );
    }
};
export default ServicesType;