import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";
import Eye from "../assets/icons/eye.svg";
import EyeSlash from "../assets/icons/eyeslash.svg";
import { Link } from "react-router-dom";
const Login = () => {

    const [showPassword, SetShowPassword] = useState(false);

    const toogleEye = () =>{
        if(showPassword) SetShowPassword(false);
        else SetShowPassword(true);
    }

    return(
    <div className="pt-[80px]  bg-light-black">
        <Breadcrumb />
        <div className="flex justify-center items-center py-32">
            <div className="w-full max-w-[410px] py-6 px-7 bg-white border-gray-200 rounded-[10px]">
                <form action="#">
                    <div className="flex justify-between items-center">
                        <h5 className="text-[28px] leading-[34px] font-medium text-black">Sign In</h5>
                        <div className="text-sm leading-4 font-medium flex gap-1">
                            <p className="text-black opacity-30">Don't have an account? </p>                       
                            <Link to="/signup" className="text-main-blue opacity-100 hover:underline dark:text-main-blue">Sign up</Link>
                        </div>                        
                    </div>
                    <div className="pb-4 pt-5">
                        <input type="email" name="email" id="email" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Email" required />
                    </div>
                    <div className="pb-4 relative">
                        <input type={showPassword? `text` : `password`} name="password" id="password" placeholder="Password" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" required />
                        <div onClick={toogleEye} className="w-5 h-5 absolute right-4 top-4">
                            <img src={showPassword? Eye : EyeSlash} alt="Eye Icon" className="size-full" />
                        </div>
                    </div>
                    <button type="submit" className="border border-black border-opacity-10 text-white text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 bg-button-blue">Login</button>
                    <div className="text-center pt-5">
                        <Link to="/restore" className="text-[13px] leading-[15px] text-main-blue hover:underline font-medium">Lost your Password?</Link>
                    </div>
                </form>
            </div>            
        </div>

    </div>
    )
}
 
export default Login;