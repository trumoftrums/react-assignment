import React from 'react';
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import axios from 'axios';
import config from "../../config";

class ProductListPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }

    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        console.log(token);
        axios({
            method: 'get',
            url: config.apiUrl + 'products',
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.data);
            if (response.data.success) {
                console.log(response.data.data.data);
                this.setState({
                    products:response.data.data.data
                })
            } else {
                console.log(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let {products} = this.state;
        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        );
    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index}/>
            })
        }
        return result;
    }
}

export default ProductListPage;