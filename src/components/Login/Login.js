import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {

    // 3
      const {signIn}=useContext(AuthContext)
    //   6
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        // 3
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset()
            // 6
            navigate('/')
        })
        .catch(error=>
        console.error('error',error))
    }

  
    return (
        <div className='form-container'>
            <h1 className='form-tittle'> login</h1>
            <form  onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name='email' placeholder='email' required/>
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name='password' placeholder='password' required/>
                </div>
                <button >Login</button>

            </form>
            <p className='pi'>new to Ema-Jhon <Link to='/signUp'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;