import watch from "../assets/icons/watch.svg";
const SingleBlog = () => {
    return ( 
        <div>
            <span className="bg-[#D5E3FF] text-main-blue text-[15px] leading-[18px] tracking-[-0.5px] py-[3px] px-[10px] rounded-[20px]">17 Tips for Designing with Type on a Photo</span>
            <h1></h1>
            <div className="flex gap-2 absolute bottom-5 left-5">
                <img src={watch} alt="watch icon" /> 
                <span className="text-black-60 text-[18px] leading-[20px] tracking-[-0.3px]">07.08.2020</span>
            </div>   
            <div className="text-[21px] text-black text-opacity-80 leading-[30px] tracking-[-0.8px]">
                <p>Google Analytics is a fantastic tool because it eliminates the guesswork as to how visitors behave on a website. Conversion rates are one of the top priorities for many marketing websites, and Google Analytics can certainly help give you insight as to why the conversion rate is what it is. It can also shed light on additional user experience issues.</p>
                <p>Google Analytics is a tool for improving products, not just marketing websites. It tells you exactly what users are doing, where they’re coming from, how long they engaged, and so on. All of those things impact conversion rates and retention rates, among other metrics. Google Analytics can be a complicated tool, but it provides an enormous amount of data and insights. So, today we’ll be talking about two subsets of what you can use Google Analytics for as a UX designer: user behavior and user intent.</p>
                <div>
                    <h2>Looking at User Behavior with Google Analytics</h2>
                    <p>In order to improve the user experience, you need to understand how users behave. What are they doing on your site? Where are they going? Where are they coming from? By learning different aspects of user behavior through Google Analytics, you can discover potential problem areas that you can then prioritize and address.</p>
                    <div><img src="" alt="" /></div>             
                    <p>Behavior flow in Google Analytics identifies pages, volume of traffic, and paths of traffic, such as the most common routes visitors take to get in and out of specific pages. You can get a great view of the overall flow of traffic surrounding a specific page, customer journey, or funnel. When you compare the behavior flow against the time spent on your site, you can quickly identify pages that are bridges and areas of the site, which are conversion hubs.</p>
                </div>
                <div>
                    <h2>Event Tracking</h2>
                    <p>Event tracking is another fabulous tool in Google Analytics because it lets you track actions that are otherwise invisible. Event tracking allows you to track specific clicks like on CTA buttons, links, navigation, or anything else that’s interactive. Simply put, event tracking lets you figure out whether or not people are interacting with a specifically identified interactive element on your site.</p>
                    <p>You will have to set them up yourself, but it’s well worth it. For example, you can test whether a new CTA button or strategy is performing well. It is also a fantastic tool to track the success of downloadable items. It’s great to track video plays, ad clicks, and pop-up interaction.</p>                    
                </div>
                <div>

                </div>
            </div>
        </div>
     );
}
 
export default SingleBlog;