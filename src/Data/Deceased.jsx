import { LineChart } from "@mui/x-charts"

function Deceased({ datas }) {
    // console.log(datas)

    const uData = datas.map((data) => Number(data.dailydeceased));
    const pData = datas.map((data) => data.date);

    // console.log(uData, pData)
    return (<>
        < >
            <LineChart
                series={[
                    { data: uData, label: 'Deceased', id: 'uvId', showMark: false, color: "#000000" },
                ]}
                xAxis={[{ scaleType: 'point', data: pData }]}
            />
        </>
    </>)
}

export default Deceased