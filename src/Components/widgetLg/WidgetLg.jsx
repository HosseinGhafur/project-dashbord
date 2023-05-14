import React from 'react'
import dataUsers from '../../datachart'
import './WidgetLg.css'

export default function WidgetLg() {
    return (
        <div className='widgetlg'>
            <div className="wraperr">
                <table className="widgetLg-table">
                    <tr className="widgetLg__tr">
                        <th className="widgetLg__th">Coustumer</th>
                        <th className="widgetLg__th">Date</th>
                        <th className="widgetLg__th">Amount</th>

                    </tr>

                    {dataUsers.map(users => (
                        <tr className="widgetLg__tr">
                            <td className="widgetLg__td">
                                <img src={users.img} alt="" className="widgetLg__td-img" />
                                <span className="widgetLg__td-name">{users.name} </span>
                            </td>
                            <td className="widgetLg__td-data">{users.Date}</td>
                            <td className="widgetLg__td-amount">{users.amount}</td>
                        </tr>
                    ))}


                </table>
            </div>
        </div>
    )
}
