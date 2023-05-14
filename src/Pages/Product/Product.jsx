import React from 'react'
import './Product.css'
import Chart from '../../Components/Charts/Chart'
import { DataSale } from '../../datachart'

export default function Product() {
    return (
        <div className='product'>
            <div className="wraperr">
                <div className="product-detail">
                    <div className='produact-left' >
                        <img src='/img/laptop1.jpg' alt="" className="product-left__img" />

                    </div>

                    <div className='product-right'>
                        <h1>Lap Top</h1>
                        <p className="caption-product">The ROG Strix G513IE-HN060 laptop is one of the products of the Asus company, which has been launched with a beautiful design. The stylish body of ROG Strix G513IE-HN060 is designed in a way that promises a high-end laptop. This laptop weighs 2.1 kg and you won't have any special problem to move it permanently. The 15.6-inch screen of this product has FullHD resolution. USB and HDMI ports can be seen on the edges of this Asus model, which can be used to connect all kinds of peripherals without needing to...</p>
                        <span className="price-product">Price :12800000 $</span>
                    </div>

                </div>
                <div className="product-chart">
                    <Chart title='Sale In Month' data={DataSale} datakey='sales' />
                </div>

            </div>
        </div>

    )
}
