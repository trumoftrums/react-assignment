import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import config from '../../config';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false
        };
        this.submitLogin = this.submitLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    submitLogin(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: config.apiUrl + 'auth/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(response => {
            console.log(response.data);
            if (response.data.success) {
                console.log(response.data.message);
                this.setState({
                    isLogin: true
                });
                localStorage.setItem('token', response.data.data.access_token)
            } else {
                console.log(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        if (this.state.isLogin) {
            return (<Redirect to={'/'}/>);
        }
        if (localStorage.getItem('token')) {
            return (<Redirect to={'/'}/>);
        }

        return (
            <div className="card-body p-5">
                <h4 className="text-dark mb-5">Sign In</h4>
                <form onSubmit={this.submitLogin}>
                    <div className="row">
                        <div className="form-group col-md-12 mb-4">
                            <input type="email" className="form-control input-lg" id="email"
                                   aria-describedby="emailHelp" placeholder="Username" name="email"
                                   onChange={this.handleInput}/>
                        </div>
                        <div className="form-group col-md-12 ">
                            <input type="password" className="form-control input-lg" id="password"
                                   placeholder="Password" name="password" onChange={this.handleInput}/>
                        </div>
                        <div className="col-md-12">
                            <div className="d-flex my-2 justify-content-between">
                                <div className="d-inline-block mr-3">
                                    <label className="control control-checkbox">Remember me
                                        <input type="checkbox"/>
                                        <div className="control-indicator"/>
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