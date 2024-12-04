import mail from "../assets/icons/mail.svg";
import image from "../assets/imgs/newsletter-img.png"
const Newsletter = () => {
    return ( 
        <div className="bg-button-blue grid grid-flow-col grid-cols-2">
            <div className="flex items-center justify-end pr-[46px]" >
                <div className="w-full flex flex-col max-w-[600px]">
                    <span className="text-2xl text-white text-opacity-50">Newsletter</span>
                    <h3 className="text-5xl leading-[54px] text-white mt-5 mb-8">Subscribe and get info about new releases first</h3>
                    <div className="flex items-center flex-shrink-0 w-full sm:w-auto m-0">
                        <form className="flex flex-col items-center w-full md:flex-row">
                            <div className="mr-3 relative gap-[10px]">
                                <div className="absolute flex top-0 bottom-0 left-5 items-center pointer-events-none ">
                                    <img src={mail} alt="Mail Icon" />
                                </div>
                                <input id="member_email" className=" block pl-12 text-white rounded-[10px] px-5 py-4 text-xl leading-6" name="email_address" aria-label="Email Address" placeholder="Enter your email" type="email" required />
                            </div>
                            <button type="submit" className="bg-black rounded-[10px] px-5 py-4 text-white text-xl leading-6">Subscribe</button>
                        </form>
                    </div>                    
                </div>

            </div>
            <div >
                <img src={image} alt="shoes" className="size-full" />
            </div>
        </div>
     );
}

export default Newsletter;