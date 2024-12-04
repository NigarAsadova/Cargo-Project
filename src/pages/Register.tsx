import Breadcrumb from "../components/Breadcrumb";
import Eye from "../assets/icons/eye.svg";
import EyeSlash from "../assets/icons/eyeslash.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {

    const [showPasswordF, SetShowPasswordF] = useState(true);
    const [showPasswordS, SetShowPasswordS] = useState(true);

    const toogleEyeF = () =>{
        if(showPasswordF) SetShowPasswordF(false);
        else SetShowPasswordF(true);
    }

    const toogleEyeS = () => {
        if(showPasswordS) SetShowPasswordS(false);
        else SetShowPasswordS(true);
    }

    return(
    <div className="pt-[80px]  bg-light-black">
        <Breadcrumb />
        <div className="flex justify-center items-center py-32">
            <div className="w-full max-w-[410px] py-6 px-7 bg-white border-gray-200 rounded-[10px]">
                <form action="#">
                    <div className="flex justify-between items-center">
                        <h5 className="text-[28px] leading-[34px] font-medium text-black">Sign up</h5>
                        <div className="text-[13px] leading-[15px] font-medium flex gap-1">
                            <p className="text-black opacity-30">Already have an account? </p>                       
                            <Link to="/login" className="text-main-blue opacity-100 hover:underline dark:text-main-blue">Sign in</Link>
                        </div>                        
                    </div>
                    <div className="pb-4 pt-5">
                        <input type="email" name="email" id="email" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Name" required />
                    </div>
                    <div className="pb-4">
                        <input type="text" name="name" id="name" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Email" required />
                    </div>
                    <div className="pb-4 relative">
                        <input type={showPasswordF? `text` : `password`} name="password" id="password" placeholder="Password" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" required />
                        <div onClick={toogleEyeF} className="w-5 h-5 absolute right-4 top-4">
                            <img src={showPasswordF? Eye : EyeSlash} alt="Eye Icon" className="size-full" />
                        </div>
                    </div>
                    <div className="pb-4 relative">
                        <input type={showPasswordS? `text` : `password`} name="password" id="password" placeholder="Confirm password" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" required />
                        <div onClick={toogleEyeS} className="w-5 h-5 absolute right-4 top-4">
                            <img src={showPasswordS? Eye : EyeSlash} alt="Eye Icon" className="size-full" />
                        </div>
                    </div>
                    <button type="submit" className="border border-black border-opacity-10 text-white text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 bg-button-blue">Sign Up</button>
                    <div className="pt-5 text-[13px] leading-[18px] px-5 text-center text-black-60">
                        By signing in to your account you agree with our <a href="#" className="text-black opacity-80 hover:text-main-blue hover:underline font-medium">Privacy Policy</a> and <a href="#" className=" text-black opacity-80 hover:underline hover:text-main-blue font-medium">Terms of Use</a>.
                    </div>
                </form>
            </div>            
        </div>

    </div>
    )
}
 
export default Register;