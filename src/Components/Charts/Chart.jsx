import React from 'react'
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis, CartesianGrid } from 'recharts'
import './Chart.css'

export default function Chart({ grid, title, datakey, data }) {
    return (
        <div className='chart'>
            <div className="wraperr">
                <div className="chart-item">
                    <h3 className="title-chart">{title}</h3>
                    <div className="chart-box">
                        <ResponsiveContainer width={'100%'} aspect={3} >
                            <LineChart data={data} >
                                <XAxis dataKey={'name'} stroke='  #D21312' />
                                <Line type={'monotone'} dataKey={datakey} stroke=' #D21312' />
                                <Tooltip />
                                {grid && <CartesianGrid stroke=' #FF8400 ' strokeDasharray={9} />}
                            </LineChart>

                        </ResponsiveContainer>
                    </div>
                </div>

            </div>




        </div>
    )
}
