import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {

    const [success, setSuccess] = useState(false);

    //FOR FORGATE PASSWORD STATE
    const [userEmail, setUserEmail] = useState('')

const handleSubmit = (event) => {
  event.preventDefault();

  setSuccess(false);

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  signInWithEmailAndPassword(auth,email,password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setSuccess(true);
  })
  .catch(error => {
    console.log('error', error)
  })
}

const handleEmailBlur = (event) => {
  const email = event.target.value;
  setUserEmail(email);
  console.log(email)
}


 //FORGETE PASSWORD FUNCTIONS
 const handleForgetPassword = () => {
  //ALERT FUNCTION
  if(!userEmail){
   alert('Please enter your email address');
   return;
  }
  sendPasswordResetEmail(auth, userEmail)
  .then(() => {
    alert('Password reset email setn. Please check your email');
  })
  .catch((error) => {
    console.error(error);
  })
 }

    return (
        <div className="w-50 mx-auto">
            <h2>Please Login !!!!!!!!!!</h2>
            <form onSubmit={handleSubmit} className="">
            <div class="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input onBlur={handleEmailBlur} type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" />
                </div>
                <button className="btn btn-primary" type='submit'>Login</button>
            </form>
            {success && <p className='text-success fw-bold'>Successfully login to the account</p>}
            <p>New to the website? Please <Link to='/register'>Register</Link></p>
            <p><small>Forgate password?</small> <button type='button' className="btn btn-link" onClick={handleForgetPassword}>Reset password</button ></p>
        </div>
    );
};

export default LoginBootstrap;