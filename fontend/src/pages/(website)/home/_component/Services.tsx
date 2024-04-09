import { CustomIcon, GuaranIcon, ShippingIcon, TrophyIcon } from '@/components/icons'
import React from 'react'

const Services = () => {
    return (
        <section className='services'>
            <div className='container-fluid'>
                <div className='service-list'>
                    <div className='service-item'>
                    <img src={TrophyIcon} className='service__image' />
                        <div className='service-info'>
                            <h4 className='service__name'>High Quality</h4>
                            <p className='service__description'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='service-item'>
                    <img src={GuaranIcon} className='service__image' />
                        <div className='service-info'>
                            <h4 className='service__name'>High Quality</h4>
                            <p className='service__description'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='service-item'>
                    <img src={ShippingIcon} className='service__image' />
                        <div className='service-info'>
                            <h4 className='service__name'>High Quality</h4>
                            <p className='service__description'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='service-item'>
                    <img src={CustomIcon} className='service__image' />
                        <div className='service-info'>
                            <h4 className='service__name'>High Quality</h4>
                            <p className='service__description'>crafted from top materials</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
