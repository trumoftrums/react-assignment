import React from 'react';

class LoginPage extends React.Component{
    render() {
        return (
            <div className="card-body p-5">
                <h4 className="text-dark mb-5">Sign In</h4>
                <form action="/index.html">
                    <div className="row">
                        <div className="form-group col-md-12 mb-4">
                            <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group col-md-12 ">
                            <input type="password" className="form-control input-lg" id="password" placeholder="Password" />
                        </div>
                        <div className="col-md-12">
                            <div className="d-flex my-2 justify-content-between">
                                <div className="d-inline-block mr-3">
                                    <label className="control control-checkbox">Remember me
                                        <input type="checkbox" />
                                        <div className="control-indicator" />
                                    </label>
                                </div>
                                <p><a className="text-blue" href="#">Forgot Your Password?</a></p>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                            <p>Don't have an account yet ?
                                <a className="text-blue" href="sign-up.html">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;