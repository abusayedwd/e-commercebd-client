import { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';
import { FaGoogle, } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
  

const  GoogleLogin = () => {
        const {googleSignIn} = useContext(AuthContext)
          
        
      const navigate = useNavigate();

      

        const Logingoogle = () => {
         googleSignIn()
                .then( (result) => {
                const logged = result.user;
                console.log(logged)  
                   navigate("/")
               })
               .catch(error => console.log(error))
        }
        return (
                <div>
                          <div className="divider">OR</div>
                          <div className='text-center'>
                          <button onClick={Logingoogle} className="btn btn-outline btn-success"><FaGoogle className='mr-2'></FaGoogle> Login with google</button>
                           
                          </div>
                </div>
        );
};

export default  GoogleLogin;