import heroImg from "../../assets/imgs/hero-product.png";
import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="max-w-main-container grid grid-flow-col grid-cols-4  m-auto bg-contain bg-no-repeat bg-top pt-[80px] justify-between items-center">
      <div className="col-span-2">
        <span className="text-white text-2xl opacity-50">T-shirt</span>
        <div className="text-7xl leading-[80px] font-medium mt-5 mb-8 text-white">Sweatshirt with the hood up</div>
        <div className="flex gap-4">
        <Button path="#" text="Buy now $35" textColor="white" bgColor="bg-button-blue" bgOpacity="bg-opacity-100" />
        <Button path="#" text="Explore" textColor="white" bgColor="bg-white" bgOpacity="bg-opacity-10" />            
        </div>
      </div>
      <div className="relative left-[100px] top-5 w-[630px] h-[850px]">
        <img src={heroImg} alt="Product image" className="size-full" />
      </div>
    </div>
  );
};

export default HeroSection;
