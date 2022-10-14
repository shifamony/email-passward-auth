import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {
     const [PasswordError, setPasswordError] = useState('');

     //USESTATE FOR SUCCESS MESSAGE
     const [success, setSuccess] = useState(false);

   const handleRegister = (event) => {
    event.preventDefault();
     //console.log(event);

    //ONLY SUCCESS HOLE EI MSG DEKHABE
     setSuccess(false);

    //FIRST WAY TO DECALARE VARIABLE
    //  const email = event.target.email.value;
    //  const password = event.target.password.value;

    //SECOND WAY DECLARE TO VARIABLE
    const form = event.target;
     const email =form.email.value;
     const password = form.password.value;
     console.log(email,password);

    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setPasswordError('Please enter at least two uppercase');
        return;
    }
    if(password.length < 6){
        setPasswordError('Please enter at least six charecter');
        return;
    }
    if(/(?=.*[!@#$&*])/.test(password)){
        setPasswordError('Please add at least one special charecter');
        return;
    }
    setPasswordError('');
     createUserWithEmailAndPassword(auth,email,password)
     .then(result => {
        const user = result.user;
        console.log(user);

        //PASSWARD RIGHT HOLE EI MSG DEKHABE
        setSuccess(true);
      
        //CLEAR FOR FIELD
        form.reset();

     })
     .catch(error => {
        console.log('error', error);

        //USE FOR PASSWORD
        setPasswordError(error.message);
     })
   }



    return (
        <div className='w-50 mx-auto'>
            <h3 className="text-danger fw-bold">Please Register !!!</h3>
          <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>


                {/* USE FOR PASSWORD */}
               <p className="text-danger">{PasswordError}</p>


               {/* USE FOR SUCCESS MESSAGE */}
               {success && <p className='text-success fw-bold'>User Created Successfully</p>}

                <Button variant="primary" type="submit">
                   Register
                </Button>
         </Form>
         <p>All ready have an account. Please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default RegisterReactBootstrap;