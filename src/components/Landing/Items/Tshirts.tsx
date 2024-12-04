import { getPageProducts } from "../../../features/Product/ProductsApi";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Products } from "../../../models/Products";
import './Tshirts.css'
import { Link } from "react-router-dom";
import { toggleFavorites } from "../../../features/FavoritesSlice";
import { toggleBaskets } from "../../../features/BasketsSlice";
import addFav from "../../../assets/icons/addFav.svg";
import addedFav from "../../../assets/icons/addedFav.svg";
import addBas from "../../../assets/icons/addBas.svg";
import addedBas from "../../../assets/icons/addedBas.svg";

const Tshirts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100; 


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 4);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 4);
        }
    };

    const { products, error, isLoading } = useSelector((state: RootState) => state.pageProducts);

        // Hover, add favorites, add basket
        const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});
        const [favStates, setFavStates] = useState<{ [key: number]: boolean }>({});
        const [basStates, setBasStates] = useState<{ [key: number]: boolean }>({});
    
        const toggleFav = (id: number) => {
            setFavStates((prev) => ({ ...prev, [id]: !prev[id] }));
            dispatch(toggleFavorites(id));
        }
    
        const toggleBas = (id:number) => {
            setBasStates((prev) => ({...prev, [id] : !prev[id]}));
            dispatch(toggleBaskets(id));
        }
    
        const toggleHover = (id:number, isHovered : boolean) => {
            setHoverStates((prev) => ({...prev, [id] : isHovered}));
        }

    useEffect(() => {
        dispatch(getPageProducts(currentPage));
    }, [dispatch, currentPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error has occurred</div>;
    }


    return (
        <div className="max-w-main-container m-auto pt-[50px] border-t-[1px] border-black border-opacity-10">
                <div className="flex justify-between">
                    <h4 className="font-medium text-4xl leading-[44px]">Basic Items</h4>
                    <div></div>
                    <div className="flex overflow-x-auto sm:justify-center mt-4">
                        <div className="flex overflow-hidden">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1} 
                                className="flex items-center justify-center h-[50px] w-[50px] me-3 text-base font-medium text-gray-500 bg-white border border-gray-300  rounded-full hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="flex items-center justify-center h-[50px] w-[50px] text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="left-0 top-0 relative max-w-[1600px]" >
                <div className="flex gap-[30px] overflow-auto size-full py-[50px]" id="style-1">
                    {products.map((product: Products, id:number) => (
                        <div key={id} onMouseOver={() => toggleHover(id, true)} onMouseLeave={() => toggleHover(id, false)} className="relative">
                            <div className="w-[300px] rounded-[10px] shadow-sm">
                                <img src={product.images} alt="Product Image" className="h-full rounded-[10px]" />
                            </div>
                            <div className="flex justify-between mt-5 mb-2">
                                <span className="text-xl leading-6 font-medium">{product.title}</span>
                                <span className="text-xl leading-6 font-medium">${product.price}</span>
                            </div>
                            <Link to="#" className= {`h-[40px] w-[40px] flex justify-center items-center rounded-[10px] absolute top-[10px] right-[10px] bg-white ${hoverStates[id] ? ' block' : ' hidden'} `} onClick={() => {toggleFav(product.id)}}>
                                    <img src={addFav} alt="add favorites" className={favStates[product.id] ? `hidden` : `block`} />
                                    <img src={addedFav} alt="added into favorites" className={favStates[product.id] ? `block` : `hidden`} />
                                </Link>
                                <Link to="#" className= {`h-[40px] w-[40px] flex justify-center items-center rounded-[10px] absolute top-[250px] right-[10px] ${hoverStates[id] ? 'block' : 'hidden'} ${basStates[product.id] ? `bg-button-blue` : `bg-white`} `} onClick={() => toggleBas(product.id)}>
                                    <img src={addBas} alt="add favorites" className={basStates[product.id] ? `hidden` : `block`} />
                                    <img src={addedBas} alt="added into favorites" className={basStates[product.id] ? `block` : `hidden`} />
                            </Link>
                        </div>
                    ))}
                </div>            
                </div>           
        </div>
    );
};

export default Tshirts;

