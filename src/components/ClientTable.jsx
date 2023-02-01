import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const ClientTable = () => {
    const [data, setData] = useState({
        columns: [
            {
                label: 'Nome',
                field: 'Name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'CPF',
                field: 'CPF',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Email',
                field: 'Email',
                sort: 'asc',
                width: 200,
            }
        ],
        rows: []
    });
    useEffect(() => {
        axios
            .get("http://localhost:5000/clients")
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
            <h3>Clientes</h3>
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

export default ClientTable;