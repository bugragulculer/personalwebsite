import React from 'react'
import './newsletter.css'
import Newsletter from '../components/EN/newsletter'

function newsletter() {
    return (
        <div>
            <div className='hero_newsletter'>
                <div className='hero_newsletter_container'>
                    <h1 className='hero_newsletter_header'>
                        I'll be sending newsletters in a very short time!
                    </h1>
                    <p className='hero_newsletter_desc'> 
                        What I want to do with my newsletter is sending it weekly and include important things I learned and I published in that week. Hope you like it!
                    </p>
                </div>
            </div>
            < Newsletter />
            <div className='newsletter_notice'>
                As I send newsletters, issues will appear here for you to catch the ones you missed!
            </div>
        </div>
    )
}

export default newsletter
