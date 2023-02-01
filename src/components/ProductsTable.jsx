import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const ProductsTable = () => {
    const [data, setData] = useState({
        columns: [
            {
                label: 'Nome',
                field: 'Name',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Preço',
                field: 'Price',
                sort: 'asc',
                width: 100
            },
        ],
        rows: []
    });
    useEffect(() => {
        axios
            .get("http://localhost:5000/products")
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
            <h3>Produtos</h3>
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

export default ProductsTable;