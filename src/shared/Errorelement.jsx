import { Link } from "react-router-dom";

 const Errorelement = () => {
        return (
                <div>
                <div className= 'mt-20'>
                      <img src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"alt="" />  
                </div>
                  <Link to ='/'>
                  <p className="text-red-400 bg-blue-400 text-center w-44 font-semibold border border-3 border-green-400"> back to home</p>
                  </Link>
                </div>
        );
};

export default Errorelement;