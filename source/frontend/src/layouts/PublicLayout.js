import React from 'react';

class PublicLayout extends React.Component{
    render() {
        return (
            <div className="public-page">
                <div className="container d-flex flex-column justify-content-between vh-100">
                    <div className="row justify-content-center mt-5">
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="card">
                                <div className="card-header bg-primary">
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
                                </div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="copyright pl-0">
                        <p className="text-center">© 2018 Copyright Sleek Dashboard Bootstrap Template by
                            <a className="text-primary" href="http://www.iamabdus.com/" target="_blank">Abdus</a>.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PublicLayout;