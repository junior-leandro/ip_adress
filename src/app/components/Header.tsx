import { Infos } from "./Infos";

export function Header() {
    return (
        <header className="w-full h-[320px] lg:h-[281px] bg-img_bg_desktop bg-center bg-cover flex flex-col items-center">
            <h1 className="text-white text-2xl font-bold my-5">IP Adress Tracker</h1>

            <form className="bg-white w-5/6 h-[50px] flex justify-between m-0 rounded-2xl">
                <input type="text" className="rounded-s-2xl pl-4" placeholder="192.212.174.101"></input>
                <button type="submit" className="bg-black text-white rounded-e-2xl px-4"> &gt; </button>
            </form>
            
        </header>
    )
}