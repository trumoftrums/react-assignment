import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductActionPage from "./pages/Products/ProductActionPage";

const routers = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage/>
    },
    {
        path: '/products',
        exact: false,
        component: () => <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        component: () => <ProductActionPage/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        component: ({product_id}) => <ProductActionPage product_id={product_id}/>
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage/>
    }

];

export default routers;