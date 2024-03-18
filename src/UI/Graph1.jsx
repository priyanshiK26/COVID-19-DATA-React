import { LineChart } from "@mui/x-charts"

function Graph1({ numbers, label, color, dates }) {
    return (
        <LineChart
            series={[
                { data: numbers, label: label, id: label, showMark: false, color: color, area: true },
            ]}
            xAxis={[{ scaleType: 'point', data: dates }]}
        />)
}

export default Graph1