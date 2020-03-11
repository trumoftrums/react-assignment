import React from 'react';

class ProductActionPage extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card card-default">
                    <div className="card-header card-header-border-bottom">
                        <h2>Horizontal Form</h2>
                    </div>
                    <div className="card-body">
                        <form className="horizontal-form">
                            <div className="form-group row">
                                <div className="col-12 col-md-3 text-right">
                                    <label htmlFor>Email address</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-3 text-right">
                                    <label htmlFor>Password</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" className="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-3 text-right">
                                    <label htmlFor="Radios">Radios</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <label className="control control-radio">Option one is this and that—be sure to include why it's great
                                        <input type="radio" name="radio1" defaultChecked="checked" />
                                        <div className="control-indicator" />
                                    </label>
                                    <label className="control control-radio">Option two can be something else and selecting it will deselect
                                        <input type="radio" name="radio1" />
                                        <div className="control-indicator" />
                                    </label>
                                    <label className="control control-radio">Option three is disabled
                                        <input type="radio" name="radio1" disabled="disabled" />
                                        <div className="control-indicator" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-3 text-right">
                                    <label htmlFor="checkbox">Checkbox</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <label className="control control-checkbox">Check me out
                                        <input type="checkbox" name="checkbox1" />
                                        <div className="control-indicator" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-footer pt-5 border-top">
                                <button type="submit" className="btn btn-primary btn-default">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductActionPage;