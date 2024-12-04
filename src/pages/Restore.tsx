import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
const Restore = () => {
    return(
    <div className="pt-[80px]  bg-light-black">
        <Breadcrumb />
        <div className="flex justify-center items-center py-32">
            <div className="w-full max-w-[410px] py-6 px-7 bg-white border-gray-200 rounded-[10px]">
                <form action="#">
                    <div className="flex justify-between items-center">
                        <h5 className="text-[28px] leading-[34px] font-medium text-black">Restore password</h5>
                        <div className="text-sm leading-4 font-medium flex gap-1">                     
                            <Link to="/login" className="text-main-blue opacity-100 hover:underline dark:text-main-blue">Sign in</Link>
                        </div>                        
                    </div>
                    <div className="pb-4 pt-5">
                        <input type="email" name="email" id="email" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Email" required />
                    </div>
                    <button type="submit" className="border border-black border-opacity-10 text-white text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 bg-button-blue">Send</button>
                </form>
            </div>            
        </div>

    </div>
    )
}
 
export default Restore;