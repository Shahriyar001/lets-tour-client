import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Singup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSingup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);
            })
            .catch(err => console.error(err));

    }

    return (
        <div className="hero ">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 p-10">
                    <h1 className='text-5xl text-center font-bold'>Sign up</h1>
                    <form onSubmit={handleSingup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className='text-center'>Have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Singup;