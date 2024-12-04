import { Link } from "react-router-dom";
import { getProducts } from "../../features/Product/ProductsApi";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Products } from "../../models/Products";
import addFav from "../../assets/icons/addFav.svg";
import addedFav from "../../assets/icons/addedFav.svg";
import addBas from "../../assets/icons/addBas.svg";
import addedBas from "../../assets/icons/addedBas.svg";
import { toggleFavorites } from "../../features/FavoritesSlice";
import { toggleBaskets } from "../../features/BasketsSlice";

const NewCollections = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {products, error, isLoading} = useSelector((state: RootState) => state.products);

    useEffect(
        () => {
            dispatch(getProducts());
        }, [dispatch]
    )

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


    return ( 
        <div className="max-w-main-container pt-[70px] m-auto pb-[100px]">
            <div className="flex justify-between">
                <h4 className="font-medium text-4xl leading-[44px]">New man collection</h4>
                <Link to={`#`} className="text-lg px-[18px] py-[15px] border rounded-[83px] border-black border-opacity-10 hover:bg-black hover:text-white hover:shadow-xl transition ease-in-out duration-500">Explore All</Link>               
            </div>
            <div className="grid grid-cols-3 gap-[30px]  pt-[50px]">
                {
                    products.filter((product:Products) => 44 <= product.id && product.id <= 46)
                    .map(
                        (product : Products, id: number) => (
                            <Link to={`#`} key={id} className="relative" onMouseOver={() => toggleHover(id, true)} onMouseLeave={() => toggleHover(id, false)}>
                                <div className="h-[580px] rounded-[10px] shadow-sm" > <img src={product.images} alt="Product Image" className="h-full rounded-[10px]" /></div>
                                <div className="flex justify-between mt-5 mb-2">
                                    <span className="text-xl leading-6 font-medium">{product.title}</span>
                                    <span className="text-xl leading-6 font-medium">${product.price}</span>
                                </div>
                                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-black-60 text-lg leading-[25px]">{product.description}</p>
                                <Link to="#" className= {`h-[40px] w-[40px] flex justify-center items-center rounded-[10px] absolute top-[10px] right-[10px] bg-white ${hoverStates[id] ? 'block' : 'hidden'} `} onClick={() => {toggleFav(id)}}>
                                    <img src={addFav} alt="add favorites" className={favStates[id] ? `hidden` : `block`} />
                                    <img src={addedFav} alt="added into favorites" className={favStates[id] ? `block` : `hidden`} />
                                </Link>
                                <Link to="#" className= {`h-[40px] w-[40px] flex justify-center items-center rounded-[10px] absolute top-[530px] right-[10px] ${hoverStates[id] ? 'block' : 'hidden'} ${basStates[id] ? `bg-button-blue` : `bg-white`} `} onClick={() => toggleBas(id)}>
                                    <img src={addBas} alt="add favorites" className={basStates[id] ? `hidden` : `block`} />
                                    <img src={addedBas} alt="added into favorites" className={basStates[id] ? `block` : `hidden`} />
                                </Link>
                            </Link>                        
                        )
                    )
                }
            </div>
        </div>
     );
}
 
export default NewCollections;