// Signup page: renders registration form and onboarding prompts.

// Importing dependicies
import Validation from './Validation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup() {

    // navigate function:
    const navigate = useNavigate();

    // State variables of the form:
    const [formData, setFormData] = useState({
        username: '',
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

        try {
            const response = await axios.post('http://localhost:3002/signup', formData);

            // success:
            if (response.data.success) {
                alert(response.data.message);
                navigate('http://localhost:3001');
            }
        }
        catch (err) {

            if (err.status === 409) {
                alert(err.response.data.message);
                try{

                    navigate('http://localhost:3000/login');
                }
                catch(error) {
                    navigate('http://localhost:3000/404');
                }
            }
        }
    }

    return (
        <div>
            <div className="container">
                <div className="mt-5 mb-3 ">
                    <h1 className="fs-2 text-center ">Signup</h1>
                </div>
                <div className="px-5 m-5">
                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="username" className="form-control" id="username" aria-describedby="usernameHelp" required required onChange={handleChange} name="username"/>
                            <div className="invalid-feedback">
                                Name is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required onChange={handleChange} name="email"/>
                            <div className="invalid-feedback">
                                Email is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required onChange={handleChange} name="password"/>
                            <div className="invalid-feedback">
                                Password is required
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                    <div className='d-flex justify-content-center mt-3'>
                        <Link to='/login' className='text-decoration-underline'>Already have an account</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
