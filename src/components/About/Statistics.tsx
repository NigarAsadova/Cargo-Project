    type StatisticProp = {
        datas: Array<{ id: number; amount: string; title: string; }>;
    }

const Statistic = ({datas} : StatisticProp) => {
    return ( 
        <div className="py-[70px] bg-black">
            <div className="max-w-main-container grid grid-cols-3 m-auto">
                {
                    datas.map(
                        (data) => (
                            <div key={data.id} className="flex flex-col gap-5 justify-center text-center">
                                <div className="text-5xl leading-[54px] font-medium text-white">{data.amount}</div>
                                <p className="text-white opacity-50 text-2xl">{data.title}</p>
                            </div>                   
                        )
                    )
                }
            </div>
        </div>
     );
}
 
export default Statistic;