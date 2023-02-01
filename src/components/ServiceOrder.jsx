import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const ServiceOrderTable = () => {
    const [data, setData] = useState({
        columns: [
            {
                label: 'Cliente',
                field: 'Cliente',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Técnico',
                field: 'Tecnico',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Tipo de Servico',
                field: 'Service_Type',
                sort: 'asc',
                width: 100
            },
        ],
        rows: []
    });
    useEffect(() => {
        axios
            .get("http://localhost:5000/service-order")
            .then((res) => {
                console.log(res.data)
                setData({ ...data, rows: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Container>
            <h3>Ordens de Serviço</h3>
            < MDBDataTable
                maxHeight='200px'
                striped
                small
                displayEntries={false}
                btn={false}
                paging={false}
                searching={false}
                noBottomColumns

                data={data} />
        </Container>
    );
}

export default ServiceOrderTable;