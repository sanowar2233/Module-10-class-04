import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'

const SignUp = () => {

    const[error,setError]=useState(null)

    // 2
    const {createUser}=useContext(AuthContext)



    const handleSubmit=(event)=>{
         event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const confirm=form.confirm.value;
        const password=form.password.value;
        console.log(email,confirm,password)

        if(password.length<6){
            setError('password should be 6 character');
            return;
        }

        if(password !==confirm){
            setError('your password did not match');
            return;
        }
        // 2
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
        })
        .catch(error=>{
            console.error('error', error)
        })
    }


    return (

        <div>
            <h1>this is sign up</h1>
            <div className='form-container'>
            <h1 className='form-tittle'> Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name='email' placeholder='email' required/>
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name='password' placeholder='password' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confrim Password</label>
                    <input type="password"  name='confirm' placeholder='confirm' required/>
                </div>
                <button className='btn'>Sign Up</button>

            </form>
            <p className='pi'>Have an Account on Ema-Jhon <Link to='/login'>Please Log in</Link></p>
            <p className='text-error'>{error}</p>
        </div>
            
        </div>
    );
};

export default SignUp;