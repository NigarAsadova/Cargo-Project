import HeroSection from "../components/Landing/HeroSection";
import NewCollections from "../components/Landing/NewCollections";
import PlayUnite from "../components/Landing/PlayUnite";
import Tshirts from "../components/Landing/Items/Tshirts";
import Newsletter from "../components/Newsletter";

const Landing = () => {
    return ( 
        <div>
            <div className="bg-hoopUpBg">
                <HeroSection />
            </div>
                <NewCollections />
                <Tshirts />  
                <PlayUnite />
                <Newsletter />       
        </div>
     );
}
 
export default Landing;