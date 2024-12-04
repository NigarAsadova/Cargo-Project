import Button from "../components/Button";
import watch from "../assets/icons/watch.svg";
import { BlogsData } from "../Data/BlogsData";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Blogs = () => {

    type Blog = {
        id : number,
        category : string,
        title : string,
        date : string,
        img : string
    };

    const blogs : Blog[] = BlogsData;


    return ( 
        <div className="max-w-main-container pt-[130px] m-auto">
            <Breadcrumb />
            <div className="grid grid-flow-col grid-cols-2 border border-black border-opacity-10 rounded-[10px] p-5">
                <Link to="#" className="border-r-[1px] border-black border-opacity-10 pr-[34px] relative">
                    <span className="bg-[#D5E3FF] text-main-blue text-[15px] leading-[18px] tracking-[-0.5px] py-[3px] px-[10px] rounded-[20px]">Clothes</span>
                    <h3 className="font-medium text-5xl leading-[54px] traacking-[-1.6px] mt-5 mb-[30px] ">The best customer experiences are built with Method</h3>
                    <Button path = "#" text = "Read More" textColor = "white" bgColor="bg-black" bgOpacity = "bg-1" />
                    <div className="flex gap-2 absolute bottom-0 left-0">
                        <img src={watch} alt="watch icon" /> 
                        <span className="text-black-60 text-[18px] leading-[20px] tracking-[-0.3px]">07.08.2020</span>
                    </div>
                </Link>
                <div className="grid grid-flow-row grid-rows-2 gap-7">
                    <div className="grid grid-flow-col grid-cols-2 border-b-[1px] border-black border-opacity-10 mx-5 pb-[30px] gap-[15px]">
                        {
                            blogs.filter((blog:Blog) => 1 < blog.id && blog.id < 4 ).map(
                                (blog) => (
                                <Link to="#">
                                    <span className="bg-[#D5E3FF] text-main-blue text-[15px] leading-[18px] tracking-[-0.5px] py-[3px] px-[10px] rounded-[20px]">{blog.category}</span>
                                    <h3 className="font-medium text-3xl leading-[34px] tracking-[-0.8px] mt-[24px] mb-[54px]">{blog.title}</h3>
                                    <div className="flex gap-2">
                                        <img src={watch} alt="watch icon" /> 
                                        <span className="text-black-60 text-[18px] leading-[20px] tracking-[-0.3px]">{blog.date}</span>
                                    </div>                           
                                </Link>
                                )
                            )
                        }
                    </div>
                    <div className="grid grid-flow-col grid-cols-2 mx-5 pb-[30px] gap-[15px]">
                        {
                            blogs.filter((blog:Blog) => 1 < blog.id && blog.id < 4 ).map(
                                (blog) => (
                                <Link to="#">
                                    <span className="bg-[#D5E3FF] text-main-blue text-[15px] leading-[18px] tracking-[-0.5px] py-[3px] px-[10px] rounded-[20px]">{blog.category}</span>
                                    <h3 className="font-medium text-3xl leading-[34px] tracking-[-0.8px] mt-[24px] mb-[54px]">{blog.title}</h3>
                                    <div className="flex gap-2">
                                        <img src={watch} alt="watch icon" /> 
                                        <span className="text-black-60 text-[18px] leading-[20px] tracking-[-0.3px]">{blog.date}</span>
                                    </div>                           
                                </Link>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex-wrap flex gap-[30px] my-[30px]">
                        {
                            blogs.map((blog:Blog) => 
                            (<Link to={'#'}>
                            <div className={`max-w-[410px] min-h-[540px] rounded-[10px] border-[1px] border-black border-opacity-10  relative hover:shadow-xl transition duration-300 group hover:bg-[#F1F4FA]`}>
                                <div className={`w-[410px] h-[270px] group-hover:hidden`}><img src={blog.img} alt="blog image" className="size-full overflow-hidden rounded-t-[10px] object-cover" /></div>     
                                <div className="p-5">
                                    <span className="bg-[#D5E3FF] text-main-blue text-[15px] leading-[18px] tracking-[-0.5px] py-[3px] px-[10px] rounded-[20px]">{blog.category}</span>
                                    <h3 className="font-medium text-3xl leading-[34px] tracking-[-0.8px] mt-[24px] group-hover:font-medium group-hover:text-5xl group-hover:leading-[54px]">{blog.title}</h3>
                                    <div className="flex gap-2 absolute bottom-5 left-5">
                                        <img src={watch} alt="watch icon" /> 
                                        <span className="text-black-60 text-[18px] leading-[20px] tracking-[-0.3px]">{blog.date}</span>
                                    </div>                                     
                                </div>                                             
                            </div> 
                            </Link> ))                         
                        }
            </div>
        </div>
     );
}
 
export default Blogs;