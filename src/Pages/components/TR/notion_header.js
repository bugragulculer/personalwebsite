import React from 'react'
import Notion from '../../assets/notion_header.png'
import './notion_header.css'

function notion_header() {
    return (
        <div>
            <div className='notion_header'>
                <div className='notion_header_half'>
                    <h1 className='notion_header_h1'>Notion</h1>
                    <h1 className='notion_header_h2'>Hepsi Bir Arada Çalısma Alanı</h1>
                    <h2 className='notion_header_h3'>Sizin ve tüm ekibiniz için tek bir araç. Yazın, planlayın ve organize edin.</h2>
                </div>
                <div className='notion_header_half'>
                    <img className='notion_header_image' src={Notion} alt=""/>
                </div>
            </div>
            <div className='notion_notice'>
                <h1 className='notion_notice_header'>Notion Türkiye Toplulugu Açıldı!</h1>
                <div className='notion_notice_desc'>
                    <h2 className='notion_notice_desc_i'>Topluluk sayfasına gitmek içi </h2>
                    <a className='notion_notice_desc_i' href="https://www.notion.so/notionturkiye/Notion-T-rkiye-456ec455a3484192a6c4b7a2f9baa61a">n tıklayınız.</a>
                </div>
            </div>
        </div>
    )
}
         

export default notion_header