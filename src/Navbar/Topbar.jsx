import { Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {

    // const left = '100px'
    // const top = '17px'

    return <div className={`fixed top-[17px] sm:left-[100px] left-[55px] pr-[100px] flex justify-around w-screen items-center`}>
        <div>
            <div className=" sm:text-2xl font-bold text-blue-800">
                COVID19
            </div>
            <div className="sm:text-lg text-xs">
                Data of the year
            </div>
        </div>

        <div className="relative flex justify-center items-center">
            <input className=" shadow-[1px_5px_15px_1px_rgba(0,0,0,1)] w-20 sm:w-auto rounded-full " />
            <button>
                <SearchIcon className="absolute top-0 right-2" />
            </button>
        </div>
        <div>
            <Avatar >N</Avatar>
        </div>
    </div >
}

export default Topbar