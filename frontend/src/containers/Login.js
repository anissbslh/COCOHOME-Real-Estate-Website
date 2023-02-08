import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {Helmet} from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated)
        return <Redirect to='/home' />;
    
    return (
        <div>
            <Helmet>
                <title>Cocohome Login</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form  onSubmit={e => onSubmit(e)}>
                <div>
                    <input 
                        
                        type='email'
                        placeholder='Email'
                        name='email' value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div >
                    <input
                        
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <button>Login</button>
            </form>
            <p>
                Vous n'êtes pas de compte ? <Link className='auth__authtext__link' to='/signup'>Inscrivez-vous</Link>
            </p>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);