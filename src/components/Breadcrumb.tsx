import { Link, useLocation } from "react-router-dom";
const Breadcrumb = () => {
    const location = useLocation();
    console.log(location);
    let currentLink = '';

    const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');
    crumbs.map(
        (crumb) => {
            currentLink += `/${crumb}`;
        }
    )

    const customLabels:{[key: string]: string} = {
        login : 'Sign In',
        signup : 'Sign Up',
        restore : 'Recovery',
    }

    return ( 
        <div>
            <nav className="flex py-7 text-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex items-center">
                    {
                        crumbs.map(
                            (crumb, index) => {
                                const isLast = index === crumbs.length - 1;
                                const label = customLabels[crumb] || crumb.charAt(0).toUpperCase() + crumb.slice(1);
                                return(
                                    <li className="inline-flex items-center" key={crumb}>
                                    <Link to="#" className={`inline-flex items-center text-lg leading-5 font-medium text-black pl-3 ${isLast ? `opacity-100` : `opacity-30 pr-3`}`}>
                                        {label}
                                    </Link>
                                    <span className={`inline-flex items-center text-lg leading-5 font-medium text-black opacity-30 ${isLast && `hidden`}`}>/</span>
                                    </li>                                        
                                )
                      
                            }
                        )
                    }
                </ol>
            </nav>
        </div>
     );
}
 
export default Breadcrumb;