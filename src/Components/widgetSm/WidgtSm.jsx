import React from 'react'
import dataUsers from '../../datachart'
import './WidgetSm.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
export default function WidgtSm() {
  return (
    <div className='widgetSm'>
      <div className="wraperr">


        <div className="widgetSm__box">
          <h3 className="widgetSm__title">New Join Members</h3>
          {dataUsers.map(user => (
            <div className="widgetsm__item">
              <img src={user.img} alt="img-user" className="widget__img" />
              <div className="widget__text-main">
                <span className="widgetSm__text_name">{user.name}</span>
                <span className="widgetSm__text_name-job">{user.Job}</span>
              </div>
              <button className="widgetSm__btn"><VisibilityOutlinedIcon /></button>
            </div>
          ))}


        </div>



      </div>
    </div>
  )
}
