import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const ServiceTypeTable = () => {
    const [data, setData] = useState({
        columns: [
            {
                label: 'Titulo',
                field: 'Titulo',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Complexidade',
                field: 'Complexidade',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Custeio',
                field: 'Custeio',
                sort: 'asc',
                width: 100
            },
        ],
        rows: []
    });
    useEffect(() => {
        axios
            .get("http://localhost:5000/service-type")
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
            <h3>Tipos de Serviço</h3>
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

export default ServiceTypeTable;