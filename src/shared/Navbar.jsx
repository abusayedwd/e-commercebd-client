import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthProvider";



const Navbar = () => {

  const { logOut, user } = useContext(AuthContext)

        const handleLogout = () => {
                logOut()
                  .then(() => { })
                  .catch(error => console.log(error))
              }
  
  const navitem = (
    <>
      <li className="font-bold text-black hover:underline">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-black hover:underline">
        <Link to="/products">Product</Link>
      </li>
      <li className="font-bold text-black hover:underline">
        <Link to="/">Features</Link>
      </li>
      <div className="dropdown dropdown-hover">
  <div className="font-bold text-white flex md:mt-2 items-center justify-center">Category <IoIosArrowDown /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Fashion</a></li>
    <li><a>Electronics</a></li>
  </ul>
</div>

   
       
    </>
  );
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="navbar bg-gray-300 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <img
            className="md:h-10 h-6 rounded-full"
            src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Link
            to="/"
            className="btn btn-ghost normal-case md:text-xl text-rose-800 font-bold"
          >
           ShoppingHUB
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navitem}</ul>
        </div>
        <div className="navbar-end sm:display-none ">
        {
      user ?
        <>
          <button onClick={handleLogout} className="btn btn-active btn-ghost font-semibold font-serif">Logout</button>
          <img className='h-10 rounded-full md:mr-8' title={user.displayName} src={user?.photoURL} alt="" />
        </> :
        <>

          
<Link to ="/login" className=" font-semibold md:mr-8 font-serif"> Login 
          </Link> 
        </>
    }
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
