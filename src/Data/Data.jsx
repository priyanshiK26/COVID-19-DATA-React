import { useState } from "react";
import getData from "../utils/getData";
import Cases from "./Cases";
import Deceased from "./Deceased";
import Recovered from "./Recovered";

function Data({ days }) {
    const [data, setData] = useState(getData())
    setData;

    // For Big Devices =>
    // const left = '100px'
    // const top = '17px'

    // For Small Devices => 
    // const left = '30px'
    // const top = '17px'

    const graphClassName = "w-[100%] h-[50vh] sm:h-[300px] "

    return (<div className={"absolute top-[90px] sm:left-[120px]"
        + " " +
        "sm:w-[85vw] w-[90vw]  flex flex-wrap justify-center items-center"
    }
    >
        <div className={graphClassName}> <Cases datas={data.slice(-days)} /></div>
        <div className={graphClassName}><Deceased datas={data.slice(-days)} /></div>
        <div className={graphClassName}><Recovered datas={data.slice(-days)} /></div>
    </div>)
}

export default Data;