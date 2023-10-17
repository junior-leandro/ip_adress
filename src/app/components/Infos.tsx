export function Infos() {

    let IpAdress  = '192.212.174.101';
    let Location = 'Brooklyn, NY 10001';
    let Timezone = 'UTC-05:00';
    let ISP = 'SpaceX Starlink';
    return (

        <article className="w-full h-72 mt-7 flex items-center justify-center">
            <div className="flex flex-col lg:mt-16 lg:flex-row lg:justify-around gap-3 items-top py-4 lg:py-6 w-5/6 max-w-[950px] bg-white rounded-xl shadow-2xl">
                <div className="flex flex-col items-center lg:items-start lg:justify-center lg:gap-2 lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">IP ADRESS</span>
                    <span className="text-black text-xl font-semibold">{IpAdress}</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-center lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">LOCATION</span>
                    <span className="text-black text-xl font-semibold">{Location}</span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-center lg:pl-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">TIMEZONE</span>
                    <span className="text-black text-xl font-semibold"> {Timezone} </span>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:border-l-2 lg:justify-center lg:px-10 lg:w-1/4">
                    <span className="text-gray-400 text-xs">ISP</span>
                    <span className="text-black text-xl font-semibold">{ISP}</span>
                </div>
            </div>

        </article>
    )
}