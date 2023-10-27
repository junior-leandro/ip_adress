'use client'

interface InfoProps {
    ipAdress: string;
    location: string;
    timezone: string;
    isp: string;
}

const Dashboard: React.FC<InfoProps> = ({
    ipAdress,
    location,
    timezone,
    isp,
  }) => {


    return (

        <article className="w-full h-72 mt-7 flex items-center justify-center">
            <div className="flex flex-col  lg:mt-2 2xl:mt-16 lg:flex-row lg:justify-around gap-3 py-4 lg:py-6 w-5/6 max-w-[950px] bg-white rounded-xl shadow-2xl">
                <div className="flex flex-col items-center lg:items-start lg:justify-start lg:gap-2 lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">IP ADRESS</span>
                    <span className="text-black text-xl font-semibold">{ipAdress}</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-start lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">LOCATION</span>
                    <span className="text-black text-xl font-semibold">{location}</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-start lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">TIMEZONE</span>
                    <span className="text-black text-xl font-semibold"> {timezone} </span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-start lg:px-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">ISP</span>
                    <span className="text-black text-xl font-semibold">{isp}</span>
                </div>
            </div>

        </article>
    )
}

export default Dashboard;