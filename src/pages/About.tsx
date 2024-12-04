import AboutUs from "../components/About/AboutUs";
import Customers from "../components/About/Customers";
import Statistic from "../components/About/Statistics";
import Video from "../components/About/Video";
import Newsletter from "../components/Newsletter";
import { CustomersData } from "../Data/CustomersData";
import { StatisticsData } from "../Data/StatisticsData";
const About = () => {


    return ( 
        <div>
            <Video />
            <AboutUs />
            <Statistic datas = {StatisticsData} />
            <Customers customers = {CustomersData} />
            <Newsletter />
        </div>
     );
}
 
export default About;