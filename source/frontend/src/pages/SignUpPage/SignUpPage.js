import React from 'react';

class SignUpPage extends React.Component{
    render() {
        return (
            <div className="card-body p-5">
                <h4 className="text-dark mb-5">Sign Up</h4>
                <form action="/index.html">
                    <div className="row">
                        <div className="form-group col-md-12 mb-4">
                            <input type="text" className="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-12 mb-4">
                            <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group col-md-12 ">
                            <input type="password" className="form-control input-lg" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-12 ">
                            <input type="password" className="form-control input-lg" id="cpassword" placeholder="Confirm Password" />
                        </div>
                        <div className="col-md-12">
                            <div className="d-inline-block mr-3">
                                <label className="control control-checkbox">
                                    <input type="checkbox" />
                                    <div className="control-indicator" />
                                    I Agree the terms and conditions
                                </label>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block mb-4">Sign Up</button>
                            <p>Already have an account?
                                <a className="text-blue" href="sign-in.html">Sign in</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpPage;