import { useState } from "react";
import getData from "../utils/getData";
import { useEffect } from "react";
import Cases from "./Cases";
import Deceased from "./Deceased";
import Recovered from "./Recovered";

function Data({ days, setDays }) {
    const [data, setData] = useState(getData())
    setData;

    useEffect(() => {
        // console.log(data.slice(-50))
    }, [data])

    // For Big Devices =>
    // const left = '100px'
    // const top = '17px'

    // For Small Devices => 
    // const left = '30px'
    // const top = '17px'

    return (<div className={" absolute top-[90px] left-[100px] sm:left-[120px]"
        + " " +
        "w-[70vw] flex flex-wrap justify-center items-center"
    }
    >
        <div className=" h-52 w-60 sm:h-[300px] sm:w-[45%]">
            <Cases datas={data.slice(-days)} />
        </div>
        <div className=" h-52 w-60 sm:h-[300px] sm:w-[45%]">
            <Deceased datas={data.slice(-days)} />
        </div>
        <div className=" h-52 w-60 sm:h-[300px] sm:w-[45%]">
            <Recovered datas={data.slice(-days)} />
        </div>
    </div>)
}

export default Data;