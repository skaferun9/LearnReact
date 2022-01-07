import React from 'react'

//Import components
import ChartBar from './ChartBar';

//Import css
import "./Chart.css"

export default function Chart(props) {
   
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    

    return (
        <div className='chart'>
            {props?.dataPoint.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}
