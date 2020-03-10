import React from 'react';
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <div className="mobile-sticky-body-overlay"></div>
            <aside className="left-sidebar bg-sidebar">
                <div id="sidebar" className="sidebar sidebar-with-footer">
                    {/* Aplication Brand */}
                    <div className="app-brand">
                        <a href="/index.html">
                            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width={30} height={33} viewBox="0 0 30 33">
                                <g fill="none" fillRule="evenodd">
                                    <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z" />
                                    <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                                </g>
                            </svg>
                            <span className="brand-name">Sleek Dashboard</span>
                        </a>
                    </div>
                    {/* begin sidebar scrollbar */}
                    <div className="sidebar-scrollbar">
                        {/* sidebar menu */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            <li className="has-sub active expand">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                    <i className="mdi mdi-view-dashboard-outline" />
                                    <span className="nav-text">Dashboard</span> <b className="caret" />
                                </a>
                                <ul className="collapse show" id="dashboard" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li className="active">
                                            <a className="sidenav-item-link" href="index.html">
                                                <span className="nav-text">Ecommerce</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="sidenav-item-link" href="analytics.html">
                                                <span className="nav-text">Analytics</span>
                                                <span className="badge badge-success">new</span>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#ui-elements" aria-expanded="false" aria-controls="ui-elements">
                                    <i className="mdi mdi-folder-multiple-outline" />
                                    <span className="nav-text">UI Elements</span> <b className="caret" />
                                </a>
                                <ul className="collapse" id="ui-elements" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#components" aria-expanded="false" aria-controls="components">
                                                <span className="nav-text">Components</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="components">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="alert.html">Alert</a>
                                                    </li>
                                                    <li>
                                                        <a href="badge.html">Badge</a>
                                                    </li>
                                                    <li>
                                                        <a href="breadcrumb.html">Breadcrumb</a>
                                                    </li>
                                                    <li>
                                                        <a href="button-default.html">Button Default</a>
                                                    </li>
                                                    <li>
                                                        <a href="button-dropdown.html">Button Dropdown</a>
                                                    </li>
                                                    <li>
                                                        <a href="button-group.html">Button Group</a>
                                                    </li>
                                                    <li>
                                                        <a href="button-social.html">Button Social</a>
                                                    </li>
                                                    <li>
                                                        <a href="button-loading.html">Button Loading</a>
                                                    </li>
                                                    <li>
                                                        <a href="card.html">Card</a>
                                                    </li>
                                                    <li>
                                                        <a href="carousel.html">Carousel</a>
                                                    </li>
                                                    <li>
                                                        <a href="collapse.html">Collapse</a>
                                                    </li>
                                                    <li>
                                                        <a href="list-group.html">List Group</a>
                                                    </li>
                                                    <li>
                                                        <a href="modal.html">Modal</a>
                                                    </li>
                                                    <li>
                                                        <a href="pagination.html">Pagination</a>
                                                    </li>
                                                    <li>
                                                        <a href="popover-tooltip.html">Popover &amp; Tooltip</a>
                                                    </li>
                                                    <li>
                                                        <a href="progress-bar.html">Progress Bar</a>
                                                    </li>
                                                    <li>
                                                        <a href="spinner.html">Spinner</a>
                                                    </li>
                                                    <li>
                                                        <a href="switcher.html">Switcher</a>
                                                    </li>
                                                    <li>
                                                        <a href="table.html">Table</a>
                                                    </li>
                                                    <li>
                                                        <a href="tab.html">Tab</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#icons" aria-expanded="false" aria-controls="icons">
                                                <span className="nav-text">Icons</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="icons">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="material-icon.html">Material Icon</a>
                                                    </li>
                                                    <li>
                                                        <a href="flag-icon.html">Flag Icon</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#forms" aria-expanded="false" aria-controls="forms">
                                                <span className="nav-text">Forms</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="forms">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="basic-input.html">Basic Input</a>
                                                    </li>
                                                    <li>
                                                        <a href="input-group.html">Input Group</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkbox-radio.html">Checkbox &amp; Radio</a>
                                                    </li>
                                                    <li>
                                                        <a href="form-validation.html">Form Validation</a>
                                                    </li>
                                                    <li>
                                                        <a href="form-advance.html">Form Advance</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#maps" aria-expanded="false" aria-controls="maps">
                                                <span className="nav-text">Maps</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="maps">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="google-map.html">Google Map</a>
                                                    </li>
                                                    <li>
                                                        <a href="vector-map.html">Vector Map</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#widgets" aria-expanded="false" aria-controls="widgets">
                                                <span className="nav-text">Widgets</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="widgets">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="general-widget.html">General Widget</a>
                                                    </li>
                                                    <li>
                                                        <a href="chart-widget.html">Chart Widget</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#charts" aria-expanded="false" aria-controls="charts">
                                    <i className="mdi mdi-chart-pie" />
                                    <span className="nav-text">Charts</span> <b className="caret" />
                                </a>
                                <ul className="collapse" id="charts" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li>
                                            <a className="sidenav-item-link" href="chartjs.html">
                                                <span className="nav-text">ChartJS</span>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages">
                                    <i className="mdi mdi-image-filter-none" />
                                    <span className="nav-text">Pages</span> <b className="caret" />
                                </a>
                                <ul className="collapse" id="pages" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li>
                                            <a className="sidenav-item-link" href="user-profile.html">
                                                <span className="nav-text">User Profile</span>
                                            </a>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#authentication" aria-expanded="false" aria-controls="authentication">
                                                <span className="nav-text">Authentication</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="authentication">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="sign-in.html">Sign In</a>
                                                    </li>
                                                    <li>
                                                        <a href="sign-up.html">Sign Up</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#others" aria-expanded="false" aria-controls="others">
                                                <span className="nav-text">Others</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="others">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="invoice.html">invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="error.html">Error</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="has-sub">
                                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#documentation" aria-expanded="false" aria-controls="documentation">
                                    <i className="mdi mdi-book-open-page-variant" />
                                    <span className="nav-text">Documentation</span> <b className="caret" />
                                </a>
                                <ul className="collapse" id="documentation" data-parent="#sidebar-menu">
                                    <div className="sub-menu">
                                        <li className="section-title">
                                            Getting Started
                                        </li>
                                        <li>
                                            <a className="sidenav-item-link" href="introduction.html">
                                                <span className="nav-text">Introduction</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="sidenav-item-link" href="setup.html">
                                                <span className="nav-text">Setup</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="sidenav-item-link" href="customization.html">
                                                <span className="nav-text">Customization</span>
                                            </a>
                                        </li>
                                        <li className="section-title">
                                            Layouts
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#headers" aria-expanded="false" aria-controls="headers">
                                                <span className="nav-text">Layout Headers</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="headers">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="header-fixed.html">Header Fixed</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-static.html">Header Static</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-light.html">Header Light</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-dark.html">Header Dark</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="has-sub">
                                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#sidebar-navs" aria-expanded="false" aria-controls="sidebar-navs">
                                                <span className="nav-text">layout Sidebars</span> <b className="caret" />
                                            </a>
                                            <ul className="collapse" id="sidebar-navs">
                                                <div className="sub-menu">
                                                    <li>
                                                        <a href="sidebar-open.html">Sidebar Open</a>
                                                    </li>
                                                    <li>
                                                        <a href="sidebar-minimized.html">Sidebar Minimized</a>
                                                    </li>
                                                    <li>
                                                        <a href="sidebar-offcanvas.html">Sidebar Offcanvas</a>
                                                    </li>
                                                    <li>
                                                        <a href="sidebar-with-footer.html">Sidebar With Footer</a>
                                                    </li>
                                                    <li>
                                                        <a href="sidebar-without-footer.html">Sidebar Without Footer</a>
                                                    </li>
                                                    <li>
                                                        <a href="right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="sidenav-item-link" href="rtl.html">
                                                <span className="nav-text">RTL Direction</span>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr className="separator" />
                    <div className="sidebar-footer">
                        <div className="sidebar-footer-content">
                            <h6 className="text-uppercase">
                                Cpu Uses <span className="float-right">40%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div className="progress-bar active" style={{width: '40%'}} role="progressbar" />
                            </div>
                            <h6 className="text-uppercase">
                                Memory Uses <span className="float-right">65%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-warning" style={{width: '65%'}} role="progressbar" />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
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
                                {/* Github Link Button */}
                                <li className="github-link mr-3">
                                    <a className="btn btn-outline-secondary btn-sm"
                                       href="https://github.com/tafcoder/sleek-dashboard" target="_blank">
                                        <span className="d-none d-md-inline-block mr-2">Source Code</span>
                                        <i className="mdi mdi-github-circle"/>
                                    </a>
                                </li>
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
                                    <button href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                        <img src="assets/img/user/user.png" className="user-image" alt="User Image"/>
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
                    <div className="content">
                        {/* Top Statistics */}
                        <div className="row">
                            <div className="col-xl-3 col-sm-6">
                                <div className="card card-mini mb-4">
                                    <div className="card-body">
                                        <h2 className="mb-1">71,503</h2>
                                        <p>Online Signups</p>
                                        <div className="chartjs-wrapper">
                                            <canvas id="barChart"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card card-mini  mb-4">
                                    <div className="card-body">
                                        <h2 className="mb-1">9,503</h2>
                                        <p>New Visitors Today</p>
                                        <div className="chartjs-wrapper">
                                            <canvas id="dual-line"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card card-mini mb-4">
                                    <div className="card-body">
                                        <h2 className="mb-1">71,503</h2>
                                        <p>Monthly Total Order</p>
                                        <div className="chartjs-wrapper">
                                            <canvas id="area-chart"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card card-mini mb-4">
                                    <div className="card-body">
                                        <h2 className="mb-1">9,503</h2>
                                        <p>Total Revenue This Year</p>
                                        <div className="chartjs-wrapper">
                                            <canvas id="line"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-md-12">
                                {/* Sales Graph */}
                                <div className="card card-default" data-scroll-height={675}>
                                    <div className="card-header">
                                        <h2>Sales Of The Year</h2>
                                    </div>
                                    <div className="card-body">
                                        <canvas id="linechart" className="chartjs"/>
                                    </div>
                                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                                        <div className="col-6 px-0">
                                            <div className="text-center p-4">
                                                <h4>$6,308</h4>
                                                <p className="mt-2">Total orders of this year</p>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <div className="text-center p-4 border-left">
                                                <h4>$70,506</h4>
                                                <p className="mt-2">Total revenue of this year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                {/* Doughnut Chart */}
                                <div className="card card-default" data-scroll-height={675}>
                                    <div className="card-header justify-content-center">
                                        <h2>Orders Overview</h2>
                                    </div>
                                    <div className="card-body">
                                        <canvas id="doChart"/>
                                    </div>
                                    <a href="#" className="pb-5 d-block text-center text-muted"><i
                                        className="mdi mdi-download mr-2"/> Download overall report</a>
                                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                                        <div className="col-6">
                                            <div className="py-4 px-4">
                                                <ul className="d-flex flex-column justify-content-between">
                                                    <li className="mb-2"><i
                                                        className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                        style={{color: '#4c84ff'}}/>Order Completed
                                                    </li>
                                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                           style={{color: '#80e1c1'}}/>Order Unpaid
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 border-left">
                                            <div className="py-4 px-4 ">
                                                <ul className="d-flex flex-column justify-content-between">
                                                    <li className="mb-2"><i
                                                        className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                        style={{color: '#8061ef'}}/>Order Pending
                                                    </li>
                                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                           style={{color: '#ffa128'}}/>Order Canceled
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-12">
                                {/* Polar and Radar Chart */}
                                <div className="card card-default">
                                    <div className="card-header justify-content-center">
                                        <h2>Sales Overview</h2>
                                    </div>
                                    <div className="card-body pt-0">
                                        <ul className="nav nav-pills mb-5 mt-5 nav-style-fill nav-justified"
                                            id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill"
                                                   href="#pills-home" role="tab" aria-controls="pills-home"
                                                   aria-selected="true">Sales Status</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill"
                                                   href="#pills-profile" role="tab" aria-controls="pills-profile"
                                                   aria-selected="false">Monthly Sales</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                 aria-labelledby="pills-home-tab">
                                                <canvas id="polar"/>
                                            </div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                                 aria-labelledby="pills-profile-tab">
                                                <canvas id="radar"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-12">
                                {/* Top Sell Table */}
                                <div className="card card-table-border-none" data-scroll-height={550}>
                                    <div className="card-header justify-content-between">
                                        <h2>Sold by Units</h2>
                                        <div>
                                            <button className="text-black-50 mr-2 font-size-20"><i
                                                className="mdi mdi-cached"/></button>
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                                <a className="dropdown-toggle icon-burger-mini" href="#" role="button"
                                                   id="dropdown-units" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false" data-display="static"/>
                                                <ul className="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdown-units">
                                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                                    <li className="dropdown-item"><a href="#">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body slim-scroll py-0">
                                        <table className="table ">
                                            <tbody>
                                            <tr>
                                                <td className="text-dark">Backpack</td>
                                                <td className="text-center">9</td>
                                                <td className="text-right">33% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">T-Shirt</td>
                                                <td className="text-center">6</td>
                                                <td className="text-right">150% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">Coat</td>
                                                <td className="text-center">3</td>
                                                <td className="text-right">50% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">Necklace</td>
                                                <td className="text-center">7</td>
                                                <td className="text-right">150% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">Jeans Pant</td>
                                                <td className="text-center">10</td>
                                                <td className="text-right">300% <i
                                                    className="mdi mdi-arrow-down-bold text-danger pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">Shoes</td>
                                                <td className="text-center">5</td>
                                                <td className="text-right">100% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-dark">T-Shirt</td>
                                                <td className="text-center">6</td>
                                                <td className="text-right">150% <i
                                                    className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer bg-white py-4">
                                        <a href="#" className="btn-link py-3 text-uppercase">View Report</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-12">
                                {/* Notification Table */}
                                <div className="card card-default" data-scroll-height={550}>
                                    <div className="card-header justify-content-between ">
                                        <h2>Latest Notifications</h2>
                                        <div>
                                            <button className="text-black-50 mr-2 font-size-20"><i
                                                className="mdi mdi-cached"/></button>
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                                <a className="dropdown-toggle icon-burger-mini" href="#" role="button"
                                                   id="dropdown-notification" data-toggle="dropdown"
                                                   aria-haspopup="true" aria-expanded="false" data-display="static"/>
                                                <ul className="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdown-notification">
                                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                                    <li className="dropdown-item"><a href="#">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body slim-scroll">
                                        <div className="media pb-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                                <i className="mdi mdi-cart-outline font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3 ">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Order</a>
                                                <p>Selena has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 10 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                                <i className="mdi mdi-email-outline font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Enquiry</a>
                                                <p>Phileine has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 9 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                                <i className="mdi mdi-stack-exchange font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Support
                                                    Ticket</a>
                                                <p>Emma has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 10 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                                <i className="mdi mdi-cart-outline font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New order</a>
                                                <p>Ryan has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 10 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                                                <i className="mdi mdi-calendar-blank font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href>Comapny Meetup</a>
                                                <p>Phileine has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 10 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                                <i className="mdi mdi-stack-exchange font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Support
                                                    Ticket</a>
                                                <p>Emma has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 10 AM</span>
                                        </div>
                                        <div className="media py-3 align-items-center justify-content-between">
                                            <div
                                                className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                                <i className="mdi mdi-email-outline font-size-20"/>
                                            </div>
                                            <div className="media-body pr-3">
                                                <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Enquiry</a>
                                                <p>Phileine has placed an new order</p>
                                            </div>
                                            <span className=" font-size-12 d-inline-block"><i
                                                className="mdi mdi-clock-outline"/> 9 AM</span>
                                        </div>
                                    </div>
                                    <div className="mt-3"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* Recent Order Table */}
                                <div className="card card-table-border-none" id="recent-orders">
                                    <div className="card-header justify-content-between">
                                        <h2>Recent Orders</h2>
                                        <div className="date-range-report ">
                                            <span/>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0 pb-5">
                                        <table className="table card-table table-responsive table-responsive-large"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Product Name</th>
                                                <th className="d-none d-md-table-cell">Units</th>
                                                <th className="d-none d-md-table-cell">Order Date</th>
                                                <th className="d-none d-md-table-cell">Order Cost</th>
                                                <th>Status</th>
                                                <th/>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>24541</td>
                                                <td>
                                                    <a className="text-dark" href> Coach Swagger</a>
                                                </td>
                                                <td className="d-none d-md-table-cell">1 Unit</td>
                                                <td className="d-none d-md-table-cell">Oct 20, 2018</td>
                                                <td className="d-none d-md-table-cell">$230</td>
                                                <td>
                                                    <span className="badge badge-success">Completed</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href
                                                           role="button" id="dropdown-recent-order1"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false" data-display="static"/>
                                                        <ul className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdown-recent-order1">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24541</td>
                                                <td>
                                                    <a className="text-dark" href> Toddler Shoes, Gucci Watch</a>
                                                </td>
                                                <td className="d-none d-md-table-cell">2 Units</td>
                                                <td className="d-none d-md-table-cell">Nov 15, 2018</td>
                                                <td className="d-none d-md-table-cell">$550</td>
                                                <td>
                                                    <span className="badge badge-warning">Delayed</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#"
                                                           role="button" id="dropdown-recent-order2"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false" data-display="static"/>
                                                        <ul className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdown-recent-order2">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24541</td>
                                                <td>
                                                    <a className="text-dark" href> Hat Black Suits</a>
                                                </td>
                                                <td className="d-none d-md-table-cell">1 Unit</td>
                                                <td className="d-none d-md-table-cell">Nov 18, 2018</td>
                                                <td className="d-none d-md-table-cell">$325</td>
                                                <td>
                                                    <span className="badge badge-warning">On Hold</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#"
                                                           role="button" id="dropdown-recent-order3"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false" data-display="static"/>
                                                        <ul className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdown-recent-order3">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24541</td>
                                                <td>
                                                    <a className="text-dark" href> Backpack Gents, Swimming Cap Slin</a>
                                                </td>
                                                <td className="d-none d-md-table-cell">5 Units</td>
                                                <td className="d-none d-md-table-cell">Dec 13, 2018</td>
                                                <td className="d-none d-md-table-cell">$200</td>
                                                <td>
                                                    <span className="badge badge-success">Completed</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#"
                                                           role="button" id="dropdown-recent-order4"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false" data-display="static"/>
                                                        <ul className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdown-recent-order4">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24541</td>
                                                <td>
                                                    <a className="text-dark" href> Speed 500 Ignite</a>
                                                </td>
                                                <td className="d-none d-md-table-cell">1 Unit</td>
                                                <td className="d-none d-md-table-cell">Dec 23, 2018</td>
                                                <td className="d-none d-md-table-cell">$150</td>
                                                <td>
                                                    <span className="badge badge-danger">Cancelled</span>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#"
                                                           role="button" id="dropdown-recent-order5"
                                                           data-toggle="dropdown" aria-haspopup="true"
                                                           aria-expanded="false" data-display="static"/>
                                                        <ul className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdown-recent-order5">
                                                            <li className="dropdown-item">
                                                                <a href="#">View</a>
                                                            </li>
                                                            <li className="dropdown-item">
                                                                <a href="#">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                {/* To Do list */}
                                <div className="card card-default todo-table" id="todo" data-scroll-height={550}>
                                    <div className="card-header justify-content-between">
                                        <h2>To Do List</h2>
                                        <a className="btn btn-primary btn-pill" id="add-task" href="#"
                                           role="button"> Add task </a>
                                    </div>
                                    <div className="card-body slim-scroll">
                                        <div className="todo-single-item d-none" id="todo-input">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Enter Todo"
                                                           autoFocus/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="todo-list" id="todo-list">
                                            <div
                                                className="todo-single-item d-flex flex-row justify-content-between finished">
                                                <i className="mdi"/>
                                                <span>Finish Dashboard UI Kit update</span>
                                                <span className="badge badge-primary">Finished</span>
                                            </div>
                                            <div
                                                className="todo-single-item d-flex flex-row justify-content-between current">
                                                <i className="mdi"/>
                                                <span>Create new prototype for the landing page</span>
                                                <span className="badge badge-primary">Today</span>
                                            </div>
                                            <div className="todo-single-item d-flex flex-row justify-content-between ">
                                                <i className="mdi"/>
                                                <span> Add new Google Analytics code to all main files </span>
                                                <span className="badge badge-danger">Yesterday</span>
                                            </div>
                                            <div className="todo-single-item d-flex flex-row justify-content-between ">
                                                <i className="mdi"/>
                                                <span>Update parallax scroll on team page</span>
                                                <span className="badge badge-success">Dec 15, 2018</span>
                                            </div>
                                            <div className="todo-single-item d-flex flex-row justify-content-between ">
                                                <i className="mdi"/>
                                                <span>Update parallax scroll on team page</span>
                                                <span className="badge badge-success">Dec 15, 2018</span>
                                            </div>
                                            <div className="todo-single-item d-flex flex-row justify-content-between ">
                                                <i className="mdi"/>
                                                <span>Create online customer list book</span>
                                                <span className="badge badge-success">Dec 15, 2018</span>
                                            </div>
                                            <div className="todo-single-item d-flex flex-row justify-content-between ">
                                                <i className="mdi"/>
                                                <span>Lorem ipsum dolor sit amet, consectetur.</span>
                                                <span className="badge badge-success">Dec 15, 2018</span>
                                            </div>
                                            <div
                                                className="todo-single-item d-flex flex-row justify-content-between mb-1">
                                                <i className="mdi"/>
                                                <span>Update parallax scroll on team page</span>
                                                <span className="badge badge-success">Dec 15, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3"/>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* area chart */}
                                <div className="card card-default">
                                    <div className="card-header d-block d-md-flex justify-content-between">
                                        <h2>World Wide Customer </h2>
                                        <div className="dropdown show d-inline-block widget-dropdown ml-auto">
                                            <a className="dropdown-toggle" href="#" role="button" id="world-dropdown"
                                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                               data-display="static">
                                                World Wide
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="world-dropdown">
                                                <li className="dropdown-item"><a href="#">Continetal chart</a></li>
                                                <li className="dropdown-item"><a href="#">Sub-continental</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body vector-map-world">
                                        <div id="world" style={{height: '100%', width: '100%'}}/>
                                    </div>
                                    <div className="card-footer d-flex flex-wrap bg-white p-0">
                                        <div className="col-6">
                                            <div className="p-4">
                                                <ul className="d-flex flex-column justify-content-between">
                                                    <li className="mb-2"><i
                                                        className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                        style={{color: '#29cc97'}}/>America <span
                                                        className="float-right">5k</span></li>
                                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                           style={{color: '#4c84ff'}}/>Australia <span
                                                        className="float-right">3k</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="p-4 border-left">
                                                <ul className="d-flex flex-column justify-content-between">
                                                    <li className="mb-2"><i
                                                        className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                        style={{color: '#ffa128'}}/>Europe <span
                                                        className="float-right">4k</span></li>
                                                    <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2"
                                                           style={{color: '#fe5461'}}/>Africa <span
                                                        className="float-right">2k</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5">
                                {/* New Customers */}
                                <div className="card card-table-border-none" data-scroll-height={580}>
                                    <div className="card-header justify-content-between ">
                                        <h2>New Customers</h2>
                                        <div>
                                            <button className="text-black-50 mr-2 font-size-20">
                                                <i className="mdi mdi-cached"/>
                                            </button>
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                                <a className="dropdown-toggle icon-burger-mini" href="#" role="button"
                                                   id="dropdown-customar" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false" data-display="static">
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdown-customar">
                                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                                    <li className="dropdown-item"><a href="#">Something else here</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <table className="table ">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-45"
                                                                                        src="assets/img/user/u1.jpg"
                                                                                        alt="customer image"/></a>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="profile.html"><h6
                                                                className="mt-0 text-dark font-weight-medium">Selena
                                                                Wagner</h6></a>
                                                            <small>@selena.oi</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td className="text-dark d-none d-md-block">$150</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-45"
                                                                                        src="assets/img/user/u2.jpg"
                                                                                        alt="customer image"/></a>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="profile.html"><h6
                                                                className="mt-0 text-dark font-weight-medium">Walter
                                                                Reuter</h6></a>
                                                            <small>@walter.me</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>5 Orders</td>
                                                <td className="text-dark d-none d-md-block">$200</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-45"
                                                                                        src="assets/img/user/u3.jpg"
                                                                                        alt="customer image"/></a>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="profile.html"><h6
                                                                className="mt-0 text-dark font-weight-medium">Larissa
                                                                Gebhardt</h6></a>
                                                            <small>@larissa.gb</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1 Order</td>
                                                <td className="text-dark d-none d-md-block">$50</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-45"
                                                                                        src="assets/img/user/u4.jpg"
                                                                                        alt="customer image"/></a>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="profile.html"><h6
                                                                className="mt-0 text-dark font-weight-medium">Albrecht
                                                                Straub</h6></a>
                                                            <small>@albrech.as</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td className="text-dark d-none d-md-block">$100</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-45"
                                                                                        src="assets/img/user/u5.jpg"
                                                                                        alt="customer image"/></a>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <a href="profile.html"><h6
                                                                className="mt-0 text-dark font-weight-medium">Leopold
                                                                Ebert</h6></a>
                                                            <small>@leopold.et</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1 Order</td>
                                                <td className="text-dark d-none d-md-block">$60</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                {/* Top Products */}
                                <div className="card card-default" data-scroll-height={580}>
                                    <div className="card-header justify-content-between mb-4">
                                        <h2>Top Products</h2>
                                        <div>
                                            <button className="text-black-50 mr-2 font-size-20"><i
                                                className="mdi mdi-cached"/></button>
                                            <div className="dropdown show d-inline-block widget-dropdown">
                                                <a className="dropdown-toggle icon-burger-mini" href="#" role="button"
                                                   id="dropdown-product" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false" data-display="static">
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right"
                                                    aria-labelledby="dropdown-product">
                                                    <li className="dropdown-item"><a href="#">Update Data</a></li>
                                                    <li className="dropdown-item"><a href="#">Detailed Log</a></li>
                                                    <li className="dropdown-item"><a href="#">Statistics</a></li>
                                                    <li className="dropdown-item"><a href="#">Clear Data</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body py-0">
                                        <div className="media d-flex mb-5">
                                            <div className="media-image align-self-center mr-3 rounded">
                                                <a href="#"><img src="assets/img/products/p1.jpg" alt="customer image"/></a>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <a href="#"><h6 className="mb-3 text-dark font-weight-medium"> Coach
                                                    Swagger</h6></a>
                                                <p className="float-md-right"><span className="text-dark mr-2">20</span>Sales
                                                </p>
                                                <p className="d-none d-md-block">Statement belting with double-turnlock
                                                    hardware adds “swagger” to a simple.</p>
                                                <p className="mb-0">
                                                    <del>$300</del>
                                                    <span className="text-dark ml-3">$250</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media d-flex mb-5">
                                            <div className="media-image align-self-center mr-3 rounded">
                                                <a href="#"><img src="assets/img/products/p2.jpg" alt="customer image"/></a>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <a href="#"><h6 className="mb-3 text-dark font-weight-medium"> Coach
                                                    Swagger</h6></a>
                                                <p className="float-md-right"><span className="text-dark mr-2">20</span>Sales
                                                </p>
                                                <p className="d-none d-md-block">Statement belting with double-turnlock
                                                    hardware adds “swagger” to a simple.</p>
                                                <p className="mb-0">
                                                    <del>$300</del>
                                                    <span className="text-dark ml-3">$250</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media d-flex mb-5">
                                            <div className="media-image align-self-center mr-3 rounded">
                                                <a href="#"><img src="assets/img/products/p3.jpg" alt="customer image"/></a>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <a href="#"><h6 className="mb-3 text-dark font-weight-medium"> Gucci
                                                    Watch</h6></a>
                                                <p className="float-md-right"><span className="text-dark mr-2">10</span>Sales
                                                </p>
                                                <p className="d-none d-md-block">Statement belting with double-turnlock
                                                    hardware adds “swagger” to a simple.</p>
                                                <p className="mb-0">
                                                    <del>$300</del>
                                                    <span className="text-dark ml-3">$50</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer mt-auto">
                    <div className="copyright bg-white">
                        <p>
                            © <span id="copy-year">2019</span> Copyright Sleek Dashboard Bootstrap Template by
                            <a className="text-primary" href="http://www.iamabdus.com/" target="_blank">Abdus</a>.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
