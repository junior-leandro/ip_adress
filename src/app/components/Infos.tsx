export function Infos() {

    let IpAdress  = '192.212.174.101';
    let Location = 'Brooklyn, NY 10001';
    let Timezone = 'UTC-05:00';
    let ISP = 'SpaceX Starlik';
    return (

        <article className="w-80 h-72 bg-white rounded-xl sticky z-50 -my-36" style={{ float: "left" }}>
            <div className="flex flex-col gap-3 items-center py-4">
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs">IP ADRESS</span>
                    <span className="text-black text-xl font-semibold">{IpAdress}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs">LOCATION</span>
                    <span className="text-black text-xl font-semibold">{Location}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs">TIMEZONE</span>
                    <span className="text-black text-xl font-semibold"> {Timezone} </span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs">ISP</span>
                    <span className="text-black text-xl font-semibold">{ISP}</span>
                </div>
            </div>

        </article>
    )
}