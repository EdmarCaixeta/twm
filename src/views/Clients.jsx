import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import PeopleForm from "../components/PeopleForm";

const Client = (props) => {
    return (
        <Container>
            <CustomNavbar />
            <h1>Cadastro de Clientes</h1>
            <PeopleForm />
        </Container>
    );
};
export default Client;