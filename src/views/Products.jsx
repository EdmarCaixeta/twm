import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import axios from "axios";

class Products extends React.Component {
    handleSubmit = event => {
        event.preventDefault();

        const json_data = {
            Name: event.target.elements.Name.value,
            Price: event.target.elements.Price.value
        };

        const images = event.target.elements.formFileMultiple.files;

        const data = new FormData();
        data.append('data', JSON.stringify(json_data));
        for (const image of images) {
            data.append('images', image);
        }

        axios.post('http://localhost:5000/products', data)
            .then((res) => {
                console.log(res); alert('Produto criado!')
                event.target.reset()
            })
            .catch(err => console.log(err))



    }

    render() {
        return (
            <Container>
                <CustomNavbar />
                <h1>Cadastro de Produtos</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="Name" placeholder="Nome do Produto" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" name="Price" placeholder="Preço" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Control type="file" multiple />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        )
    }

};
export default Products;