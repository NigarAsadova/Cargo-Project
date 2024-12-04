import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
const Footer = () => {
    return ( 
        <footer className="bg-black mb-0">
            <div className="max-w-main-container  m-auto">
                <div className=" grid grid-cols-6 text-white grid-flow-col justify-center py-[60px]">
                    <div className="col-span-2 text-2xl font-semibold">Cargo</div>
                    <div className=" grid grid-cols-4 grid-flow-col col-span-4 gap-7">
                        <div>
                            <ul>
                                <li className="font-mediu text-xl text-white leading-6 mb-5">Home</li>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Become Affiliate</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Go Unlimited</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white">Services</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="font-medium text-xl text-white leading-6 mb-5">Products</li>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Design Systems</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Themes & Templates</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Mockups</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Presentations</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Wireframes Kits</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white">UI Kits</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="font-mediu text-xl text-white leading-6 mb-5">Legals</li>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">License</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Refund Policy</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">About Us</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white">Contacts</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="font-mediu text-xl text-white leading-6 mb-5">Blog</li>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Business Stories</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Digital Store</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white mb-4">Learning</li>
                                </a>
                                <a href="">
                                    <li className="font-medium text-lg leading-5 text-opacity-50 hover:text-opacity-100 text-white">Social Media</li>
                                </a>
                            </ul>
                        </div>                  
                    </div>
                </div>
                <div className="py-[45px] border-t-[1px] border-white border-opacity-20 flex justify-between items-center">
                    <div className="text-white opacity-50 font-medium text-lg leading-5"> Copyright &copy; 2020 </div>
                    <div className="flex gap-[10px]">
                        <a href="" className="inline-block bg-zinc-800 p-[15px] rounded-full">
                            <div className="w-5 h-5">
                                <img src={facebook} alt="Facebook" className="size-full" />
                            </div> 
                        </a>
                        <a href="" className="inline-block bg-zinc-800 p-[15px] rounded-full">
                            <div className="w-5 h-5">
                                <img src={instagram} alt="instagram" className="size-full" />
                            </div> 
                        </a>
                        <a href="" className="inline-block bg-zinc-800 p-[15px] rounded-full">
                            <div className="w-5 h-5">
                                <img src={twitter} alt="twitter" className="size-full" />
                            </div> 
                        </a>
                    </div>
                </div>                
            </div>
        </footer>
     );
}
 
export default Footer;