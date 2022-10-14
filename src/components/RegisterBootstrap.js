import React from 'react';

const RegisterBootstrap = () => {
    return (
        <div className='w-50 mx-auto'>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default RegisterBootstrap;