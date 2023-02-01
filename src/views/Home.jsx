import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientTable from "../components/ClientTable";
import CustomNavbar from "../components/Navbar";
import TecniciansTable from "../components/TecniciansTable";
import ProductsTable from "../components/ProductsTable";
import ServiceTypeTable from "../components/ServiceTypeTable";
import ServiceOrderTable from "../components/ServiceOrder";
const Home = (props) => {
    return (
        <Container>
            <CustomNavbar />
            <br />
            <ClientTable />
            <TecniciansTable />
            <ProductsTable />
            <ServiceTypeTable />
            <ServiceOrderTable/>
        </Container>
    );
};
export default Home;