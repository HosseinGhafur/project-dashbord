import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './Feature.css'

export default function Feature() {
    return (
        <div className='feature'>
            <div className="wraperr">
                <div className="feature-box">
                    <div className="feature-box__item">
                        <h3 className="feature-box__title">Revanue</h3>
                        <div className="feature-box__main">
                            <span className="main__money">15.2$</span>
                            <span className="main__rate">+13.1</span>
                            <KeyboardDoubleArrowUpIcon className='main__rate-icon' />
                        </div>
                        <span className="main__footer">Compaired to last month</span>
                    </div>
                    <div className="feature-box__item">
                        <h3 className="feature-box__title">Sales</h3>
                        <div className="feature-box__main">
                            <span className="main__money">25.2$</span>
                            <span className="main__rate">+11.21</span>
                            <KeyboardDoubleArrowUpIcon className='main__rate-icon' />
                        </div>
                        <span className="main__footer">Compaired to last month</span>
                    </div>
                    <div className="feature-box__item">
                        <h3 className="feature-box__title">Const</h3>
                        <div className="feature-box__main">
                            <span className="main__money">10.2$</span>
                            <span className="main__rate negative">-9.1</span>
                            <KeyboardDoubleArrowDownIcon className='main__rate-icon negative' />
                        </div>
                        <span className="main__footer">Compaired to last month</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
