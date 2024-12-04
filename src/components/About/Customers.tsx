
    type CustomersProp = {
        customers : Array<{id : number; logo: string; src : string}>
    }

const Customers = ({customers} : CustomersProp) => {
    return ( 
        <div className="py-20">
            <div className="max-w-main-container m-auto">
                <div>
                    <h2 className="text-7xl leading-[70px] font-medium pb-6">The best customers</h2>
                    <p className="text-[20px] text-black-60 leading-[30px]">Create screens directly in Laurent or add your images from Sketch or Figma.</p>
                    <p className="text-[20px] text-black-60 leading-[30px]"> You can even sync designs from your cloud storage!</p> 
                </div>
                <div className="grid grid-cols-6 pt-[95px] pb-8">
                    {
                        customers.map(
                            (customer) => (
                                <a href={customer.src} key={customer.id}>
                                    <img src={customer.logo} alt="Customer Logo" />
                                </a>
                            )
                        )
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Customers;