import Graph1 from "../UI/Graph1";

function Deceased({ datas }) {
    const numbers = datas.map((data) => Number(data.dailydeceased));
    const dates = datas.map((data) => data.date);
    const color = '#C70039'; // Red
    const label = "Deceased";
    return (<Graph1 color={color} label={label} numbers={numbers} dates={dates} />)
}

export default Deceased