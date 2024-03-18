import { LineChart } from "@mui/x-charts"

function Cases({ datas }) {
    // console.log(datas)

    const uData = datas.map((data) => Number(data.dailyconfirmed));
    const pData = datas.map((data) => data.date);

    // console.log(uData, pData)
    return (<>
        < >
            <LineChart
                series={[
                    { data: uData, label: 'uv', id: 'uvId', showMark: false },
                ]}
                xAxis={[{ scaleType: 'point', data: pData }]}
            />
        </>
    </>)
}

export default Cases