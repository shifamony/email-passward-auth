 //import { getAuth } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useState } from "react";
import './App.css';
import Main from "./layout/Main";
//import RegisterBootstrap from "./components/RegisterBootstrap";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import LoginBootstrap from "./components/LoginBootstrap";
 //import app from "./firebase/firebase.init";
 
const router = createBrowserRouter([
  {
    path: '/',
  element: <Main></Main>,
  children:[
   {
    path: '/',
    element:<RegisterReactBootstrap></RegisterReactBootstrap>
   },
   {
    path: '/register',
    element:<RegisterReactBootstrap></RegisterReactBootstrap>
   },
   {
    path: '/login',
    element:<LoginBootstrap></LoginBootstrap>
   },
  ]
  }
]);





//const auth = getAuth(app);
// const handleRegister = (event) =>{
//   event.preventDefault();
//   const email = event.target.email.value;
//   const passward = event.target.passward.value;
//   console.log(email,passward);
//   }

// const handleEmailChange = event => {
//   console.log(event.target.value);
// }

// const handlePasswardChange = event => {
//   console.log(event.target.value);
// }



function App() {

  return (
    <div className="">
     
     <RouterProvider router ={router}></RouterProvider>
     {/* <RegisterBootstrap></RegisterBootstrap> */}
      {/* <form onSubmit={handleRegister}>
        <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="Your Email"/>
        <br />
        <input onChange={handlePasswardChange} type="passward" name="passward" id="" placeholder="Your passward"/>
        <br />
        <button type="submit">Register</button>

      </form> */}
    </div>
  );
}

export default App;
