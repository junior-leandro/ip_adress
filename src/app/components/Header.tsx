'use client'
import Image from "next/image";
import Dashboard from "./Dashboard";

// hooks
import useIpTracker from "../hooks/ip-tracker";


import Arrow from '../../assets/icon-arrow.svg'

const Header = () => {
    const {
        ip,
        handleSubmitIp,
        location,
        isp,
        timezone,
        ipAdress,
        position,
        setIp,
        setIpErrorStatus,
    } = useIpTracker();

    return (
        <header className="w-full h-1/3 bg-img_bg_desktop bg-center bg-cover flex flex-col items-center z-10 2xl:pt-6">
            <h1 className="text-white text-2xl font-bold my-5">IP Address Tracker</h1>

            <form className="bg-white w-5/6 h-[50px] max-w-xl flex justify-between rounded-2xl" onSubmit={handleSubmitIp}>
                <input type="text" className="rounded-s-2xl pl-4 py-4 w-full" placeholder="Search for any IP address or domain" autoComplete="off" pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                    value={ip}
                    onChange={(e) => {
                        setIpErrorStatus(false);
                        setIp(e.target.value);
                    }}>

                </input>
                <button type="submit" className="bg-black text-white rounded-e-2xl p-4 font-bold">
                    <Image src={Arrow} alt="Arrow Search" />
                </button>
            </form>

            <Dashboard
                location={location}
                timezone={timezone}
                isp={isp}
                ipAdress={ipAdress}
            />

        </header>
    )
}

export default Header;