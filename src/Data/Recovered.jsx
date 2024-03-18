import Graph1 from "../UI/Graph1";

function Recovered({ datas }) {
    const numbers = datas.map((data) => Number(data.dailyrecovered));
    const dates = datas.map((data) => data.date);
    const color = '#33FF3E'; // Green
    const label = "Recovered";
    return (<Graph1 color={color} label={label} numbers={numbers} dates={dates} />)
}

export default Recovered