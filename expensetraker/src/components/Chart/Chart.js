import ChartBar from "./CharBar";
import "./Chart.css";
const Chart =(props)=>{
    const dataPointsValue = props.dataPoints.map(dataPoint=>dataPoint.value)
    console.log(...dataPointsValue);
    const totalMaxValue = Math.max(...dataPointsValue);
    console.log(totalMaxValue);
    return <div className="chart">
        {props.dataPoints.map(dataPoint=>(<ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaxValue}
        label={dataPoint.label}
        
        />))}
    </div>
}

export default Chart;