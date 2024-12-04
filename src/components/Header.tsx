import { useEffect, useState } from "react";
import arrow from "../assets/icons/arrowToRight.svg";
import { getCategories } from "../features/Categories/CategoriesApi";
import { Category } from "../models/Products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { Link } from "react-router-dom";
import { toggleFavorites } from "../features/FavoritesSlice";
import About from "../pages/About";
interface HeaderProps {
    color: string;
  }

  
const Header = ({color}: HeaderProps) => {


    // Scroll control

    const [isScrolled, SetIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 0) SetIsScrolled(true);
            else SetIsScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    // Getting data

    const dispatch = useDispatch<AppDispatch>();

    const {isLoading, error, categories} = useSelector((state: RootState) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    if(isLoading){
        (
            <div>Is Loading...</div>
        )
    }
    if(error){
        (
            <div>Error has occured</div>
        )
    }

    // Visibility
    
    const [visible, setVisible] = useState(true);

    const handleVisibility = () => setVisible(!visible);

    // DropDown
    const [hover , setHover] = useState<boolean | string>(false);

    //Favorites amount
    const favItems = useSelector((state:RootState) => state.favorites.favItems);
    const FavCount = Object.keys(favItems).length;

    //Basket amount
    const BasketItems = useSelector((state:RootState) => state.baskets.basketItems);
    const BasketCount = Object.keys(BasketItems).length;

    return ( 
        <header className={`fixed w-[100%] ${isScrolled ? (color === "black" ? `bg-white z-40 shadow-xl` : `bg-black z-40 shadow-xl`) : `z-40 bg-transparent`} transition-colors duration-500 ${hover && `bg-white`}`  } >
            <div className="flex justify-between max-xl:justify-start px-7 py-6 items-center">
                <div>
                    <nav>
                    <div className="flex flex-wrap items-center gap-10">
                        <Link to="/" className="max-h">
                            <svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6619 6.43466H12.4744C12.3835 5.91193 12.2159 5.44886 11.9716 5.04545C11.7273 4.63636 11.4233 4.28977 11.0597 4.00568C10.696 3.72159 10.2813 3.50852 9.81534 3.36648C9.35511 3.21875 8.85795 3.14489 8.32386 3.14489C7.375 3.14489 6.53409 3.38352 5.80114 3.86079C5.06818 4.33239 4.49432 5.02557 4.07955 5.94034C3.66477 6.84943 3.45739 7.96023 3.45739 9.27273C3.45739 10.608 3.66477 11.733 4.07955 12.6477C4.5 13.5568 5.07386 14.2443 5.80114 14.7102C6.53409 15.1705 7.37216 15.4006 8.31534 15.4006C8.83807 15.4006 9.3267 15.3324 9.78125 15.196C10.2415 15.054 10.6534 14.8466 11.017 14.5739C11.3864 14.3011 11.696 13.9659 11.946 13.5682C12.2017 13.1705 12.3778 12.7159 12.4744 12.2045L15.6619 12.2216C15.5426 13.0511 15.2841 13.8295 14.8864 14.5568C14.4943 15.2841 13.9801 15.9261 13.3438 16.483C12.7074 17.0341 11.9631 17.4659 11.1108 17.7784C10.2585 18.0852 9.3125 18.2386 8.27273 18.2386C6.73864 18.2386 5.36932 17.8835 4.16477 17.1733C2.96023 16.4631 2.01136 15.4375 1.31818 14.0966C0.625 12.7557 0.278409 11.1477 0.278409 9.27273C0.278409 7.39205 0.627841 5.78409 1.3267 4.44886C2.02557 3.10795 2.97727 2.08239 4.18182 1.37216C5.38636 0.661931 6.75 0.306818 8.27273 0.306818C9.24432 0.306818 10.1477 0.443181 10.983 0.715908C11.8182 0.988636 12.5625 1.3892 13.2159 1.91761C13.8693 2.44034 14.4063 3.08239 14.8267 3.84375C15.2528 4.59943 15.5313 5.46307 15.6619 6.43466ZM21.6882 18.2642C20.8587 18.2642 20.1115 18.1165 19.4467 17.821C18.7876 17.5199 18.2649 17.0767 17.8786 16.4915C17.4979 15.9062 17.3075 15.1847 17.3075 14.3267C17.3075 13.5881 17.4439 12.9773 17.7166 12.4943C17.9893 12.0114 18.3615 11.625 18.8331 11.3352C19.3047 11.0455 19.8359 10.8267 20.4268 10.679C21.0234 10.5256 21.6399 10.4148 22.2763 10.3466C23.0433 10.267 23.6655 10.196 24.1428 10.1335C24.62 10.0653 24.9666 9.96307 25.1825 9.8267C25.4041 9.68466 25.5149 9.46591 25.5149 9.17045V9.11932C25.5149 8.47727 25.3246 7.98011 24.9439 7.62784C24.5632 7.27557 24.0149 7.09943 23.299 7.09943C22.5433 7.09943 21.9439 7.2642 21.5007 7.59375C21.0632 7.9233 20.7678 8.3125 20.6143 8.76136L17.7337 8.35227C17.9609 7.55682 18.3359 6.89205 18.8587 6.35795C19.3814 5.81818 20.0206 5.41477 20.7763 5.14773C21.532 4.875 22.3672 4.73864 23.282 4.73864C23.9126 4.73864 24.5405 4.8125 25.1655 4.96023C25.7905 5.10795 26.3615 5.35227 26.8786 5.69318C27.3956 6.02841 27.8104 6.4858 28.1229 7.06534C28.4411 7.64489 28.6001 8.36932 28.6001 9.23864V18H25.6342V16.2017H25.532C25.3445 16.5653 25.0803 16.9062 24.7393 17.2244C24.4041 17.5369 23.9808 17.7898 23.4695 17.983C22.9638 18.1705 22.37 18.2642 21.6882 18.2642ZM22.4893 15.9972C23.1087 15.9972 23.6456 15.875 24.1001 15.6307C24.5547 15.3807 24.9041 15.0511 25.1484 14.642C25.3984 14.233 25.5234 13.7869 25.5234 13.304V11.7614C25.4268 11.8409 25.2621 11.9148 25.0291 11.983C24.8018 12.0511 24.5462 12.1108 24.2621 12.1619C23.978 12.2131 23.6967 12.2585 23.4183 12.2983C23.1399 12.3381 22.8984 12.3722 22.6939 12.4006C22.2337 12.4631 21.8217 12.5653 21.4581 12.7074C21.0945 12.8494 20.8075 13.0483 20.5973 13.304C20.3871 13.554 20.282 13.8778 20.282 14.2756C20.282 14.8438 20.4893 15.2727 20.9041 15.5625C21.3189 15.8523 21.8473 15.9972 22.4893 15.9972ZM31.2024 18V4.90909H34.1939V7.09091H34.3303C34.5689 6.33523 34.978 5.75284 35.5575 5.34375C36.1428 4.92898 36.8104 4.72159 37.5604 4.72159C37.7308 4.72159 37.9212 4.73011 38.1314 4.74716C38.3473 4.75852 38.5263 4.77841 38.6683 4.80682V7.64489C38.5376 7.59943 38.3303 7.55966 38.0462 7.52557C37.7678 7.4858 37.4979 7.46591 37.2365 7.46591C36.674 7.46591 36.1683 7.58807 35.7195 7.83239C35.2763 8.07102 34.9268 8.40341 34.6712 8.82955C34.4155 9.25568 34.2876 9.74716 34.2876 10.304V18H31.2024ZM45.3722 23.1818C44.2642 23.1818 43.3125 23.0313 42.517 22.7301C41.7216 22.4347 41.0824 22.0369 40.5994 21.5369C40.1165 21.0369 39.7812 20.483 39.5938 19.875L42.3722 19.2017C42.4972 19.4574 42.679 19.7102 42.9176 19.9602C43.1563 20.2159 43.4773 20.4261 43.8807 20.5909C44.2898 20.7614 44.804 20.8466 45.4233 20.8466C46.2983 20.8466 47.0227 20.6335 47.5966 20.2074C48.1705 19.7869 48.4574 19.0938 48.4574 18.1278V15.6477H48.304C48.1449 15.9659 47.9119 16.2926 47.6051 16.6278C47.304 16.9631 46.9034 17.2443 46.4034 17.4716C45.9091 17.6989 45.2869 17.8125 44.5369 17.8125C43.5312 17.8125 42.6193 17.5767 41.8011 17.1051C40.9886 16.6278 40.3409 15.9176 39.858 14.9744C39.3807 14.0256 39.142 12.8381 39.142 11.4119C39.142 9.97443 39.3807 8.76136 39.858 7.77273C40.3409 6.77841 40.9915 6.02557 41.8097 5.5142C42.6278 4.99716 43.5398 4.73864 44.5455 4.73864C45.3125 4.73864 45.9432 4.86932 46.4375 5.13068C46.9375 5.38636 47.3352 5.69602 47.6307 6.05966C47.9261 6.41761 48.1506 6.75568 48.304 7.07386H48.4744V4.90909H51.517V18.2131C51.517 19.3324 51.25 20.2585 50.7159 20.9915C50.1818 21.7244 49.4517 22.2727 48.5256 22.6364C47.5994 23 46.5483 23.1818 45.3722 23.1818ZM45.3977 15.392C46.0511 15.392 46.608 15.233 47.0682 14.9148C47.5284 14.5966 47.8778 14.1392 48.1165 13.5426C48.3551 12.946 48.4744 12.2301 48.4744 11.3949C48.4744 10.571 48.3551 9.84943 48.1165 9.23011C47.8835 8.6108 47.5369 8.13068 47.0767 7.78977C46.6222 7.44318 46.0625 7.26989 45.3977 7.26989C44.7102 7.26989 44.1364 7.44886 43.6761 7.80682C43.2159 8.16477 42.8693 8.65625 42.6364 9.28125C42.4034 9.90057 42.2869 10.6051 42.2869 11.3949C42.2869 12.196 42.4034 12.8977 42.6364 13.5C42.875 14.0966 43.2244 14.5625 43.6847 14.8977C44.1506 15.2273 44.7216 15.392 45.3977 15.392ZM59.8892 18.2557C58.6108 18.2557 57.5028 17.9744 56.5653 17.4119C55.6278 16.8494 54.9006 16.0625 54.3835 15.0511C53.8722 14.0398 53.6165 12.858 53.6165 11.5057C53.6165 10.1534 53.8722 8.96875 54.3835 7.9517C54.9006 6.93466 55.6278 6.14489 56.5653 5.58239C57.5028 5.01989 58.6108 4.73864 59.8892 4.73864C61.1676 4.73864 62.2756 5.01989 63.2131 5.58239C64.1506 6.14489 64.875 6.93466 65.3864 7.9517C65.9034 8.96875 66.1619 10.1534 66.1619 11.5057C66.1619 12.858 65.9034 14.0398 65.3864 15.0511C64.875 16.0625 64.1506 16.8494 63.2131 17.4119C62.2756 17.9744 61.1676 18.2557 59.8892 18.2557ZM59.9062 15.7841C60.5994 15.7841 61.179 15.5937 61.6449 15.2131C62.1108 14.8267 62.4574 14.3097 62.6847 13.6619C62.9176 13.0142 63.0341 12.2926 63.0341 11.4972C63.0341 10.696 62.9176 9.97159 62.6847 9.32386C62.4574 8.67045 62.1108 8.15057 61.6449 7.7642C61.179 7.37784 60.5994 7.18466 59.9062 7.18466C59.196 7.18466 58.6051 7.37784 58.1335 7.7642C57.6676 8.15057 57.3182 8.67045 57.0852 9.32386C56.858 9.97159 56.7443 10.696 56.7443 11.4972C56.7443 12.2926 56.858 13.0142 57.0852 13.6619C57.3182 14.3097 57.6676 14.8267 58.1335 15.2131C58.6051 15.5937 59.196 15.7841 59.9062 15.7841Z" fill = {hover ? "black" : color}/>
                            </svg>
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" onClick={handleVisibility} aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        {
                            visible && (
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="gap-7 py-[6px] xl:flex">
                            <li className="m-0">
                                <Link to="#" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`} onMouseOver={() => setHover(true)} aria-current="page">Men</Link>
                            </li>
                            <li className="m-0">
                                <Link to="#" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`} aria-current="page" onMouseOver={() => setHover(true)}>Women</Link>
                            </li>
                            <li className="m-0">
                                <Link to="#" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`} aria-current="page" onMouseOver={() => setHover(true)}>Sale</Link>
                            </li>
                            <li className="m-0">
                                <Link to= "/About" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`}aria-current="page">About</Link>
                            </li>
                            <li className="m-0">
                                <Link to="/blogs" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`} aria-current="page">Blog</Link>
                            </li>
                            <li className="m-0">
                                <Link to="#" className={`block text-${hover ? !color : color} opacity-60 hover:opacity-100 text-base leading-5`}aria-current="page">Contacts</Link>
                            </li>
                        </ul>
                        </div>                    
                            )
                        }

                    </div>
                    </nav>
                </div>
                <div className="flex gap-10 items-center">
                    <div>
                    <form className="max-w-md mx-auto">   
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className={`w-4 h-4 text-${hover ? !color : color} dark:text-${hover ? !color : color} opacity-50`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className={`block w-full p-3 ps-10 text-sm text-gray-900 border  rounded-lg bg-transparent  dark:bg-transparent dark:border-gray-600 dark:placeholder-${hover ? !color : color} dark:placeholder-opacity-30 dark:text-${hover ? !color : color}`} placeholder="Search" required />
                            </div>
                    </form>
                    </div>
                    <div className="flex gap-6">
                        <Link to="" className="w-5 h-5 relative group">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className="size-full" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7999 2.16666C14.9166 1.281 13.7456 0.740442 12.4986 0.642633C11.2515 0.544825 10.0106 0.896213 8.99995 1.63333C7.93966 0.84469 6.61994 0.487084 5.30655 0.632523C3.99315 0.777961 2.78364 1.41564 1.92159 2.41715C1.05953 3.41865 0.608963 4.70959 0.660612 6.03C0.712261 7.35041 1.26229 8.60222 2.19994 9.53332L7.37495 14.7167C7.80829 15.1431 8.39193 15.3822 8.99995 15.3822C9.60796 15.3822 10.1916 15.1431 10.6249 14.7167L15.7999 9.53332C16.7729 8.55438 17.319 7.23022 17.319 5.84999C17.319 4.46976 16.7729 3.1456 15.7999 2.16666ZM14.6249 8.38332L9.44995 13.5583C9.39106 13.6178 9.32097 13.665 9.24373 13.6972C9.16649 13.7294 9.08363 13.746 8.99995 13.746C8.91626 13.746 8.8334 13.7294 8.75616 13.6972C8.67892 13.665 8.60883 13.6178 8.54995 13.5583L3.37494 8.35832C2.72141 7.69028 2.35545 6.79288 2.35545 5.85833C2.35545 4.92377 2.72141 4.02637 3.37494 3.35832C4.04091 2.70081 4.93909 2.33213 5.87494 2.33213C6.8108 2.33213 7.70898 2.70081 8.37495 3.35832C8.45241 3.43643 8.54458 3.49843 8.64613 3.54073C8.74768 3.58304 8.8566 3.60482 8.96661 3.60482C9.07662 3.60482 9.18554 3.58304 9.28709 3.54073C9.38864 3.49843 9.48081 3.43643 9.55828 3.35832C10.2242 2.70081 11.1224 2.33213 12.0583 2.33213C12.9941 2.33213 13.8923 2.70081 14.5583 3.35832C15.2208 4.01762 15.5988 4.91015 15.6112 5.84473C15.6237 6.77931 15.2696 7.6816 14.6249 8.35832V8.38332Z" fill = {hover ? "black" : color} className="group-hover:fill-[#2D74FF]"/>
                            </svg>
                            <div className={`absolute inline-flex justify-center w-3 h-3 font-mulish text-[9px] font-bold text-white bg-[#FA4A69] rounded-full -top-2 -end-2 dark:border-gray-900 leading-[12px] ${FavCount === 0 && `hidden`}`}>{FavCount}</div>
                        </Link>
                        <Link to="" className="w-5 h-5 group relative">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="size-full" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8334 4.83333H10.3334V4C10.3334 3.11595 9.98218 2.2681 9.35706 1.64298C8.73194 1.01786 7.8841 0.666668 7.00004 0.666668C6.11598 0.666668 5.26814 1.01786 4.64302 1.64298C4.0179 2.2681 3.66671 3.11595 3.66671 4V4.83333H1.16671C0.945694 4.83333 0.733732 4.92113 0.577452 5.07741C0.421172 5.23369 0.333374 5.44565 0.333374 5.66667V14.8333C0.333374 15.4964 0.596766 16.1323 1.06561 16.6011C1.53445 17.0699 2.17033 17.3333 2.83337 17.3333H11.1667C11.8297 17.3333 12.4656 17.0699 12.9345 16.6011C13.4033 16.1323 13.6667 15.4964 13.6667 14.8333V5.66667C13.6667 5.44565 13.5789 5.23369 13.4226 5.07741C13.2663 4.92113 13.0544 4.83333 12.8334 4.83333ZM5.33337 4C5.33337 3.55797 5.50897 3.13405 5.82153 2.82149C6.13409 2.50893 6.55801 2.33333 7.00004 2.33333C7.44207 2.33333 7.86599 2.50893 8.17855 2.82149C8.49111 3.13405 8.66671 3.55797 8.66671 4V4.83333H5.33337V4ZM12 14.8333C12 15.0543 11.9122 15.2663 11.756 15.4226C11.5997 15.5789 11.3877 15.6667 11.1667 15.6667H2.83337C2.61236 15.6667 2.4004 15.5789 2.24412 15.4226C2.08784 15.2663 2.00004 15.0543 2.00004 14.8333V6.5H3.66671V7.33333C3.66671 7.55435 3.7545 7.76631 3.91078 7.92259C4.06707 8.07887 4.27903 8.16667 4.50004 8.16667C4.72105 8.16667 4.93302 8.07887 5.0893 7.92259C5.24558 7.76631 5.33337 7.55435 5.33337 7.33333V6.5H8.66671V7.33333C8.66671 7.55435 8.7545 7.76631 8.91078 7.92259C9.06706 8.07887 9.27903 8.16667 9.50004 8.16667C9.72105 8.16667 9.93301 8.07887 10.0893 7.92259C10.2456 7.76631 10.3334 7.55435 10.3334 7.33333V6.5H12V14.8333Z" fill={hover ? "black" : color}  className="group-hover:fill-[#2D74FF]" />
                            </svg>
                            <div className={`absolute inline-flex justify-center w-3 h-3 font-mulish text-[9px] font-bold text-white bg-[#2D74FF] rounded-full -top-2 -end-2 dark:border-gray-900 leading-[12px] ${BasketCount == 0 && `hidden`}`}>{BasketCount}</div>
                        </Link>
                        <Link to="/login" className="w-5 h-5 group">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-full" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0917 9.59167C12.9087 8.94888 13.505 8.06743 13.7977 7.06995C14.0904 6.07247 14.0649 5.00855 13.7248 4.02622C13.3847 3.04389 12.7469 2.19199 11.9001 1.58905C11.0532 0.986099 10.0395 0.662086 9 0.662086C7.96045 0.662086 6.94676 0.986099 6.09994 1.58905C5.25312 2.19199 4.61528 3.04389 4.27517 4.02622C3.93506 5.00855 3.90959 6.07247 4.2023 7.06995C4.49501 8.06743 5.09134 8.94888 5.90833 9.59167C4.5084 10.1525 3.2869 11.0828 2.37407 12.2833C1.46125 13.4837 0.8913 14.9094 0.724997 16.4083C0.712959 16.5178 0.722594 16.6285 0.753352 16.7342C0.784109 16.8399 0.835387 16.9385 0.904257 17.0244C1.04335 17.1979 1.24565 17.309 1.46666 17.3333C1.68768 17.3576 1.9093 17.2932 2.08277 17.1541C2.25624 17.015 2.36735 16.8127 2.39166 16.5917C2.57465 14.9627 3.3514 13.4582 4.57351 12.3657C5.79562 11.2731 7.37741 10.6692 9.01667 10.6692C10.6559 10.6692 12.2377 11.2731 13.4598 12.3657C14.6819 13.4582 15.4587 14.9627 15.6417 16.5917C15.6643 16.7964 15.762 16.9855 15.9159 17.1225C16.0698 17.2595 16.269 17.3346 16.475 17.3333H16.5667C16.7851 17.3082 16.9848 17.1977 17.1221 17.026C17.2595 16.8543 17.3234 16.6353 17.3 16.4167C17.1329 14.9135 16.5599 13.4842 15.6424 12.2818C14.7249 11.0795 13.4974 10.1496 12.0917 9.59167ZM9 9C8.34073 9 7.69626 8.8045 7.1481 8.43823C6.59993 8.07196 6.17269 7.55137 5.9204 6.94228C5.66811 6.33319 5.6021 5.66297 5.73071 5.01637C5.85933 4.36976 6.1768 3.77582 6.64297 3.30964C7.10915 2.84347 7.70309 2.526 8.3497 2.39738C8.9963 2.26876 9.66652 2.33478 10.2756 2.58707C10.8847 2.83936 11.4053 3.2666 11.7716 3.81477C12.1378 4.36293 12.3333 5.0074 12.3333 5.66667C12.3333 6.55072 11.9821 7.39857 11.357 8.02369C10.7319 8.64881 9.88405 9 9 9Z" fill={hover ? "black" : color}  className="group-hover:fill-[#2D74FF]"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            {
                hover && (
            <div className="max-w-main-container grid grid-cols-4 gap-[70px] m-auto pb-[60px]" onMouseLeave={() => setHover(false)}>
                <div>
                    <Link to={`#`} className="font-medium text-2xl flex justify-between items-center pb-5 border-b-[1px] border-black border-opacity-10 mb-[20px] group">
                        <span className="transition-transform duration-7000 group-hover:translate-x-2">Clothing</span>
                        <div className="w-[10px] h-[10px] transition-transform duration-7000"><img src={arrow} alt="arrow icon" className="size-full group-hover:-translate-x-2" /></div>                  
                    </Link>
                        <ul>
                        {
                            categories.filter(
                                (category:Category) => category.id <= 10
                            )
                            .map(
                                (category:Category, id:number) => (
                                    <li key={id} className="pt-[8px] hover:text-main-blue">
                                        <Link to = {`categories/${category.id}`}>{category.name}</Link>
                                    </li>
                                )
                            )
                        }
                        </ul>
                </div>
                <div>
                <Link to={`#`} className="font-medium text-2xl flex justify-between items-center pb-5 border-b-[1px] border-black border-opacity-10 mb-[20px] group">
                        <span className="transition-transform duration-7000 group-hover:translate-x-2">New & Now</span>
                        <div className="w-[10px] h-[10px] transition-transform duration-7000"><img src={arrow} alt="arrow icon" className="size-full group-hover:-translate-x-2" /></div>                  
                    </Link>
                        <ul>
                        {
                            categories.filter(
                                (category:Category) => category.id <= 8
                            )
                            .map(
                                (category:Category, id:number) => (
                                    <li key={id} className="pt-[8px] hover:text-main-blue">
                                        <Link to = {`categories/${category.id}`}>{category.name}</Link>
                                    </li>
                                )
                            )
                        }
                        </ul>
                </div>
                <div>
                    <Link to={`#`} className="font-medium text-2xl flex justify-between items-center pb-5 border-b-[1px] border-black border-opacity-10 mb-[20px] group">
                        <span className="transition-transform duration-7000 group-hover:translate-x-2">Featured Designers</span>
                        <div className="w-[10px] h-[10px] transition-transform duration-7000"><img src={arrow} alt="arrow icon" className="size-full group-hover:-translate-x-2" /></div>                  
                    </Link>
                        <ul>
                        {
                            categories.filter(
                                (category:Category) => category.id <= 11
                            )
                            .map(
                                (category:Category, id:number) => (
                                    <li key={id} className="pt-[8px] hover:text-main-blue">
                                        <Link to = {`categories/${category.id}`}>{category.name}</Link>
                                    </li>
                                )
                            )
                        }
                        </ul>
                </div>
                <div>
                    <Link
                    to="#"
                    className="font-medium text-2xl flex justify-between items-center pb-5 border-b-[1px] border-black border-opacity-10 mb-[20px] group"
                    >
                    <span className="transition-transform duration-7000 group-hover:translate-x-2">Occasions</span>
                    <div className="w-[10px] h-[10px] transition-transform duration-7000">
                        <img
                        src={arrow}
                        alt="arrow icon"
                        className="size-full group-hover:-translate-x-2"
                        />
                    </div>
                    </Link>
                        <ul>
                        {
                            categories.filter(
                                (category:Category) => category.id <= 10
                            )
                            .map(
                                (category:Category, id:number) => (
                                    <li key={id} className="pt-[8px] hover:text-main-blue ">
                                        <Link to = {`categories/${category.id}`}>{category.name}</Link>
                                    </li>
                                )
                            )
                        }
                        </ul>
                </div>
            </div>                    
                )
            }

        </header>
     );
}

export default Header;