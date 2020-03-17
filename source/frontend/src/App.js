import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import routers from './routers';
import AppRoute from "./layouts/AppRoute";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateLayout from "./layouts/PrivateLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/Products/ProductListPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <AppRoute exact path="/login" layout={PublicLayout} component={LoginPage} />
                    <AppRoute exact path="/register" layout={PublicLayout} component={SignUpPage}/>
                    <AppRoute exact path="/" layout={PrivateLayout} component={HomePage} />
                    <AppRoute exact path="/products" layout={PrivateLayout} component={ProductListPage}/>
                </Switch>
            </Router>
        )
    }

    showMenu = (routers) => {
        let result = null;
        if (routers.length > 0) {
            result = routers.map((router, index) => {
                return (
                    <AppRoute
                        layout={router.layout}
                        component={router.component}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>
    }
}

export default App;
