import getData from "../utils/getData";
// import SearchIcon from '@mui/icons-material/Search';

function Topbar({ days, setDays }) {

    // const left = '100px'
    // const top = '17px'

    const rangeChangeHandler = (x) => {
        const newValue = x.target.value;
        setDays(newValue);
    }


    return <div className={
        `absolute top-[17px] sm:left-[100px] sm:pr-[100px] flex justify-around w-[90vw] items-center p-5`
    }>
        <div>
            <div className=" sm:text-2xl font-bold text-blue-800">
                COVID19
            </div>
            <div className="sm:text-lg text-xs">
                Priyanshi
            </div>
        </div>
        <div className="relative flex justify-center items-center grow  flex-col">
            {days}
            <input
                id="Days"
                type="range"
                value={days}
                onChange={rangeChangeHandler}
                className="sm:w-[80%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                max={getData().length}
                min={10}
            />
            <label
                htmlFor="Days"
                className="block mr-2 text-sm font-medium text-gray-900 "
            >
                Days
            </label>
        </div>
    </div >
}

export default Topbar