import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../contextApi/AuthProvider';
import GoogleLogin from './GooleLogin';


const Login = () => {
    
   const [disabled, setDesabled] = useState(true)
   const { signIn } = useContext(AuthContext);
   const [error, setError] = useState('')

   const navigate = useNavigate();

   const handleLogin = event => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         const captcha = form.captcha.value;
        //  console.log(email, password, captcha)

        signIn(email, password)
    // console.log(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
       
      setError(" ");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login success",
        showConfirmButton: false,
        timer: 1500
      });
    })
    navigate("/");
   };
   const validatecaptcha = (e) => {
    const value =  e.target.value;
     if(validateCaptcha(value)){
      setDesabled(false)
     }
     else{
      setDesabled(true)
     }
   }
    useEffect( () => {
      loadCaptchaEnginge(6); 
    },[])
     
    
    
       
    

   return (
      <div className='md:flex w-[80%] items-center mx-auto'>
         <div className='md:w-1/2'>
             <img src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
         </div>
         <div className="w-full md:w-1/2 mx-auto lg:w-[500px] drop-shadow-lg bg-white">
         <form onSubmit={handleLogin} className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
               
              <h1 className="pb-8 text-4xl backdrop-blur-sm">Login</h1>
              <div className="space-y-5">
                <label htmlFor="email_navigate_ui_modal" className="block">
                  Email
                </label>
                <div className="relative">
                  <input id="email_navigate_ui_modal" type="email" placeholder="Email" name="email" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white" />
                  <span className="absolute left-2 top-1/4">
                    <svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" className='fill-black dark:fill-white'></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" className='stroke-black dark:stroke-white'></rect></g></svg>
                  </span>
                </div>
                <label htmlFor="password_navigate_ui_modal" className="block">
                  Password
                </label>
                <div className="relative">
                  <input id="password_navigate_ui_modal" type="password" placeholder=".............." name="password" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white" />
                  <span className="absolute left-2 top-1/4">
                    <svg viewBox="0 0 24 24" fill="none" className="inline-block w-6 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z"></path></g></svg>
                  </span>
                </div>
                <p>
                  {error}
                </p>
              </div> 
               
                <div className='mt-4'>
                < LoadCanvasTemplate /> 
                </div>
                <div className="relative">
                  <input onBlur={validatecaptcha} id="password_navigate_ui_modal" type="text" placeholder="write the captcha" name="captcha" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white" />
                   
             </div>

              {/* button type will be submit for handling form submission*/}
               <input disabled = {disabled} className="btn btn-info w-[40%] mx-auto mt-4" type="submit" value="Ligin" />


               <p>New users? <Link to="/signup" className='text-blue-400'>signup please</Link></p>
               <GoogleLogin></GoogleLogin>
            </form>
        </div>
      </div>
   );
};

export default Login;