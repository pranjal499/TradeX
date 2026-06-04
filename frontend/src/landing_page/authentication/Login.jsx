// Login page: render form to login

// Importing dependencies:
import Validation from './Validation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, '');
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

export default function Login() {

    // State variables of the form:
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input change:
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // Handle form data:
    const handleSubmit = async (e) => {
        e.preventDefault();

        Validation(e);
        if (!e.currentTarget.checkValidity()) {
            return;
        }

        if (!API_BASE_URL || !DASHBOARD_URL) {
            alert('Login configuration is missing. Please restart the frontend server.');
            return;
        }
        
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, 
                formData,
                {
                    withCredentials: true
                }
                
            );

            if (response.data.success) {

                // navigate after successful login:
                window.location.assign(DASHBOARD_URL);
                // alert('login success');
            }
        }
        catch(err) {
            if (err.response?.status === 401) {
                alert(err.response.data.message);
                return;
            }

            alert(err.response?.data?.message || 'Unable to login. Please check that the backend server is running.');
        }
    }

    return (
        <div>
            <div className="container">
                <div className="mt-5 mb-3 ">
                    <h1 className="fs-2 text-center ">Login</h1>
                </div>
                <div className="px-5 m-5">
                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required onChange={handleChange} name='email'/>
                            <div className="invalid-feedback">
                                Email is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required onChange={handleChange} name='password'/>
                            <div className="invalid-feedback">
                                Password is required
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                    <div className='d-flex justify-content-center mt-3'>
                    <Link to='/signup' className='text-decoration-underline'>Not have an account</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
