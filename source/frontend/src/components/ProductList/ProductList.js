import React from 'react';

class ProductList extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="col-12">
                    <div className="card card-table-border-none" id="recent-orders">
                        <div className="card-header justify-content-between card-header-border-bottom">
                            <h2>Products</h2>
                            <div className="date-range-report ">
                                <span/>
                            </div>
                        </div>
                        <div className="card-body pt-0 pb-5">
                            <table className="table card-table table-responsive table-responsive-large"
                                   style={{width: '100%'}}>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th className="d-none d-md-table-cell">Created at</th>
                                    <th className="d-none d-md-table-cell">Updated at</th>
                                    <th>Status</th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.children}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;