import React from 'react'
import './Home.css'
import Feature from '../../Components/Feature/Feature'
import Chart from '../../Components/Charts/Chart'
import { dataChart } from '../../datachart'
import WidgtSm from '../../Components/widgetSm/WidgtSm'
import WidgetLg from '../../Components/widgetLg/WidgetLg'

export default function Home() {

    return (
        <div className='Home'>
            <div className="wraperr">
                <Feature />
                <Chart grid title={'Month Sale'} data={dataChart} datakey={'sale'} />
                <div className="widget">
                    <WidgtSm />
                    <WidgetLg />
                </div>
            </div>

        </div>
    )
}
