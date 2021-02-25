import React from 'react'
import './newsletter.css'
import Newsletter from '../components/TR/newsletter'

function newsletter() {
    return (
        <div>
            <div className='hero_newsletter'>
                <div className='hero_newsletter_container'>
                    <h1 className='hero_newsletter_header'>
                        Bültenlerime henüz baslamadım ancak çok yakında başlayacagım!
                    </h1>
                    <p className='hero_newsletter_desc'> 
                        Haftalık olarak ilgimi çeken seyler hakkında ve paylastıgım şeyler hakkında yazacagım bültenimde yerinizi simdiden alın!
                    </p>
                </div>
            </div>
            < Newsletter />
            <div className='newsletter_notice'>
                Bültenlerimi gönderdikçe her bir sayı burada mucizevi bir sekilde belirecek.
            </div>
        </div>
    )
}

export default newsletter
