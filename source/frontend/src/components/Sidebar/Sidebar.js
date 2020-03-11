import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const menus = [
    {
        label: "Products",
        to: "/",
        children: [
            {
                lable: "Products List",
                to: "/products",
                children: []
            },
            {
                lable: "Add New",
                to: "/product/add",
                children: []
            }
        ]
    }
];

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="left-sidebar bg-sidebar">
                <div id="sidebar" className="sidebar sidebar-with-footer">
                    {/* Aplication Brand */}
                    <div className="app-brand">
                        <Link to={"/"}>
                            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMidYMid" width={30} height={33} viewBox="0 0 30 33">
                                <g fill="none" fillRule="evenodd">
                                    <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z"/>
                                    <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z"/>
                                </g>
                            </svg>
                            <span className="brand-name">Sleek Dashboard</span>
                        </Link>
                    </div>
                    {/* begin sidebar scrollbar */}
                    <div className="sidebar-scrollbar">
                        {/* sidebar menu */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            <li className="has-sub active">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse"
                                   data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                    <i className="mdi mdi-view-dashboard-outline"/>
                                    <span className="nav-text">Dashboard</span> <b className="caret"/>
                                </a>
                                <ul className="collapse" id="dashboard" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li className="active">
                                            <Link className="sidenav-item-link" to={'/product/add'}><span className="nav-text">Add new</span></Link>
                                        </li>
                                        <li>
                                            <Link className="sidenav-item-link" to={'/products'}><span className="nav-text">Products</span></Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr className="separator"/>
                    <div className="sidebar-footer">
                        <div className="sidebar-footer-content">
                            <h6 className="text-uppercase">
                                Cpu Uses <span className="float-right">40%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div className="progress-bar active" style={{width: '40%'}} role="progressbar"/>
                            </div>
                            <h6 className="text-uppercase">
                                Memory Uses <span className="float-right">65%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-warning" style={{width: '65%'}}
                                     role="progressbar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;
