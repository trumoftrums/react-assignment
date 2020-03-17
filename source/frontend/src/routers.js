import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/Products/ProductListPage";
import ProductActionPage from "./pages/Products/ProductActionPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateLayout from "./layouts/PrivateLayout";

const routers = [
    {
        path: '/',
        exact: true,
        layout: () => <PrivateLayout/>,
        component: () => <HomePage/>
    },
    {
        path:'/register',
        exact: true,
        layout: () => <PublicLayout/>,
        component: () => <SignUpPage/>
    },
    {
        path:'/login',
        exact: true,
        layout: () => <PublicLayout/>,
        component: () => <LoginPage/>
    },
    {
        path: '/products',
        exact: false,
        layout: () => <PrivateLayout/>,
        component: () => <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        layout: () => <PrivateLayout/>,
        component: () => <ProductActionPage/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        layout: () => <PrivateLayout/>,
        component: ({product_id}) => <ProductActionPage product_id={product_id}/>
    },
    {
        path: '',
        exact: false,
        layout: () => <PrivateLayout/>,
        component: () => <NotFoundPage/>
    }

];

export default routers;