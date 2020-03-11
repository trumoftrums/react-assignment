import React from 'react';
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";

class ProductListPage extends React.Component {
    render() {
        let products = [
            {
                name: "test01",
                email: "test01@gmail.com",
                created_at: "30/03/2020",
                updated_at: "31/03/2020",
                status: "completed"
            },
            {
                name: "test01",
                email: "test01@gmail.com",
                created_at: "30/03/2020",
                updated_at: "31/03/2020",
                status: "completed"
            }
        ];
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