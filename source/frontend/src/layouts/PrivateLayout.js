import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";

class PrivateLayout extends React.Component{
    render() {
        return (
            <div className="private-page">
                <div className="mobile-sticky-body-overlay"/>
                <div className="wrapper">
                    <Sidebar/>
                    <div className="page-wrapper">
                        {/* Header */}
                        <header className="main-header " id="header">
                            <nav className="navbar navbar-static-top navbar-expand-lg">
                                {/* Sidebar toggle button */}
                                <button id="sidebar-toggler" className="sidebar-toggle">
                                    <span className="sr-only">Toggle navigation</span>
                                </button>
                                {/* search form */}
                                <div className="search-form d-none d-lg-inline-block">
                                    <div className="input-group">
                                        <button type="button" name="search" id="search-btn" className="btn btn-flat">
                                            <i className="mdi mdi-magnify"/>
                                        </button>
                                        <input type="text" name="query" id="search-input" className="form-control"
                                               placeholder="'button', 'chart' etc." autoFocus autoComplete="off"/>
                                    </div>
                                    <div id="search-results-container">
                                        <ul id="search-results"/>
                                    </div>
                                </div>
                                <div className="navbar-right ">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown notifications-menu">
                                            <button className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="mdi mdi-bell-outline"/>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-header">You have 5 notifications</li>
                                                <li>
                                                    <a href="#">
                                                        <i className="mdi mdi-account-plus"/> New user registered
                                                        <span className=" font-size-12 d-inline-block float-right"><i
                                                            className="mdi mdi-clock-outline"/> 10 AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="mdi mdi-account-remove"/> User deleted
                                                        <span className=" font-size-12 d-inline-block float-right"><i
                                                            className="mdi mdi-clock-outline"/> 07 AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="mdi mdi-chart-areaspline"/> Sales report is ready
                                                        <span className=" font-size-12 d-inline-block float-right"><i
                                                            className="mdi mdi-clock-outline"/> 12 PM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="mdi mdi-account-supervisor"/> New client
                                                        <span className=" font-size-12 d-inline-block float-right"><i
                                                            className="mdi mdi-clock-outline"/> 10 AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="mdi mdi-server-network-off"/> Server overloaded
                                                        <span className=" font-size-12 d-inline-block float-right"><i
                                                            className="mdi mdi-clock-outline"/> 05 AM</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-footer">
                                                    <a className="text-center" href="#"> View All </a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* User Account */}
                                        <li className="dropdown user-menu">
                                            <button href="#" className="dropdown-toggle nav-link"
                                                    data-toggle="dropdown">
                                                <img src="assets/img/user/user.png" className="user-image"
                                                     alt="User Image"/>
                                                <span className="d-none d-lg-inline-block">Abdus Salam</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                {/* User image */}
                                                <li className="dropdown-header">
                                                    <img src="assets/img/user/user.png" className="img-circle"
                                                         alt="User Image"/>
                                                    <div className="d-inline-block">
                                                        Abdus Salam <small className="pt-1">abdus@gmail.com</small>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="profile.html">
                                                        <i className="mdi mdi-account"/> My Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="email-inbox.html">
                                                        <i className="mdi mdi-email"/> Message
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className="mdi mdi-diamond-stone"/> Projects </a>
                                                </li>
                                                <li>
                                                    <a href="#"> <i className="mdi mdi-settings"/> Account Setting </a>
                                                </li>
                                                <li className="dropdown-footer">
                                                    <a href="signin.html"> <i className="mdi mdi-logout"/> Log Out </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <div className="content-wrapper">
                            {this.props.children}
                        </div>
                        <footer className="footer mt-auto">
                            <div className="copyright bg-white">
                                <p>
                                    © <span id="copy-year">2019</span> Copyright Sleek Dashboard Bootstrap Template by
                                    <a className="text-primary" href="http://www.iamabdus.com/"
                                       target="_blank">Abdus</a>.
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrivateLayout;