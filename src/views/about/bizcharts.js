import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

class Bizcharts extends Component {
  render() {
    const data = [
      { genre: '1', sold: 45.58,  },
      { genre: '2', sold: 39.98, },
      { genre: '3', sold: 47.41,  },
      { genre: '4', sold: 49.93,  },
      { genre: '5', sold: 54.25, },
      { genre: '6', sold:52.63,  },
      { genre: '7', sold:0, },
      { genre: '8', sold:0, },
      { genre: '9', sold:0, },
      { genre: '10', sold:0,},
    ]
    const tickLine={
      lineWidth: 1,
      stroke: '#ccc',
      length: 5
    }
    return (
        <Chart width={325} height={200} data={data} className="chart">
          <Axis title />
          <Axis title={"亿元"} tickLine={tickLine}/>
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="orange" />
        </Chart>   
    )
  }
}
export default Bizcharts 
