import Graph1 from "../UI/Graph1";

function Cases({ datas }) {
    const numbers = datas.map((data) => Number(data.dailyconfirmed));
    const dates = datas.map((data) => data.date);
    const color = '#ffdd12'; // Yellow
    const label = "Cases";
    return (<Graph1 color={color} label={label} numbers={numbers} dates={dates} />)
}

export default Cases